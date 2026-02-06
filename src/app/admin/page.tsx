
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useUser, useFirestore, useCollection, useDoc, useMemoFirebase } from '@/firebase';
import { collection, doc, query, orderBy, setDoc, serverTimestamp, writeBatch } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, Edit, LogOut, Map, BookOpen, Loader2, Package, Image as ImageIcon, Settings, Save, Search, X, Trash2, User as UserIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { getAuth, signOut } from 'firebase/auth';
import { cn } from '@/lib/utils';
import { deleteDocumentNonBlocking } from '@/firebase/non-blocking-updates';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type DashboardView = 'see-and-do' | 'stories' | 'packages' | 'gallery' | 'display';

const AdminDashboard = () => {
  const { user, isUserLoading } = useUser();
  const db = useFirestore();
  const auth = getAuth();
  const router = useRouter();
  const { toast } = useToast();
  const [currentView, setCurrentView] = useState<DashboardView>('see-and-do');
  const [isSavingConfig, setIsSavingConfig] = useState(false);
  const [galleryForm, setGalleryForm] = useState({ url: '', caption: '' });
  const [tableSearch, setTableSearch] = useState('');
  const [isDeletingAll, setIsDeletingAll] = useState(false);

  useEffect(() => {
    if (!isUserLoading && !user) router.push('/login');
  }, [user, isUserLoading, router]);

  const articlesQ = useMemoFirebase(() => db ? query(collection(db, 'articles'), orderBy('updatedAt', 'desc')) : null, [db]);
  const packagesQ = useMemoFirebase(() => db ? query(collection(db, 'trip_packages'), orderBy('updatedAt', 'desc')) : null, [db]);
  const galleryQ = useMemoFirebase(() => db ? query(collection(db, 'gallery'), orderBy('order', 'asc')) : null, [db]);
  const configRef = useMemoFirebase(() => db ? doc(db, 'config', 'website') : null, [db]);

  const { data: allArticles, isLoading: isArticlesLoading } = useCollection(articlesQ);
  const { data: allPackages, isLoading: isPkgsLoading } = useCollection(packagesQ);
  const { data: allGallery, isLoading: isGalleryLoading } = useCollection(galleryQ);
  const { data: websiteConfig, isLoading: isConfigLoading } = useDoc(configRef);

  const [configForm, setConfigForm] = useState({
    heroHome: '',
    heroSeeDo: '',
    heroStories: '',
    catNature: '',
    catHeritage: '',
    catFood: '',
    catHistory: '',
    catPeople: '',
    catGeo: '',
    catTips: ''
  });

  useEffect(() => {
    if (websiteConfig) {
      setConfigForm({
        heroHome: websiteConfig.heroImages?.home || '',
        heroSeeDo: websiteConfig.heroImages?.seeAndDo || '',
        heroStories: websiteConfig.heroImages?.stories || '',
        catNature: websiteConfig.categoryImages?.['Nature & Adventure'] || '',
        catHeritage: websiteConfig.categoryImages?.['Heritage & Culture'] || '',
        catFood: websiteConfig.categoryImages?.['Food & Drink'] || '',
        catHistory: websiteConfig.categoryImages?.['History & Heritage'] || '',
        catPeople: websiteConfig.categoryImages?.['People & Culture'] || '',
        catGeo: websiteConfig.categoryImages?.['Geography & Landscape'] || '',
        catTips: websiteConfig.categoryImages?.['Travel Tips'] || ''
      });
    }
  }, [websiteConfig]);

  const handleSaveConfig = async () => {
    if (!db) return;
    setIsSavingConfig(true);
    try {
      await setDoc(doc(db, 'config', 'website'), {
        heroImages: {
          home: configForm.heroHome,
          seeAndDo: configForm.heroSeeDo,
          stories: configForm.heroStories
        },
        categoryImages: {
          'Nature & Adventure': configForm.catNature,
          'Heritage & Culture': configForm.catHeritage,
          'Food & Drink': configForm.catFood,
          'History & Heritage': configForm.catHistory,
          'People & Culture': configForm.catPeople,
          'Geography & Landscape': configForm.catGeo,
          'Travel Tips': configForm.catTips
        },
        updatedAt: serverTimestamp()
      }, { merge: true });
      toast({ title: 'Success', description: 'Website configuration updated.' });
    } catch (err) {
      toast({ variant: 'destructive', title: 'Error' });
    } finally {
      setIsSavingConfig(false);
    }
  };

  const handleAddGallery = async () => {
    if (!db || !galleryForm.url) {
      toast({ variant: 'destructive', title: 'Missing URL', description: 'Please provide an image URL.' });
      return;
    }
    try {
      const id = `img-${Date.now()}`;
      const newOrder = (allGallery?.length || 0) + 1;
      await setDoc(doc(db, 'gallery', id), { ...galleryForm, id, order: newOrder, updatedAt: serverTimestamp() }, { merge: true });
      toast({ title: 'Success', description: 'Gallery image added.' });
      setGalleryForm({ url: '', caption: '' });
    } catch (err) {
      toast({ variant: 'destructive', title: 'Error' });
    }
  };

  const handleDeleteGallery = (id: string) => {
    if (!db) return;
    deleteDocumentNonBlocking(doc(db, 'gallery', id));
    toast({ title: 'Deleted', description: 'Image removed from gallery.' });
  };

  const handleDeleteArticle = (articleId: string) => {
    if (!db) return;
    deleteDocumentNonBlocking(doc(db, 'articles', articleId));
    toast({ title: 'Deleted', description: 'Artikel telah dihapus.' });
  };

  const handleDeleteAllArticles = async () => {
    if (!db || !allArticles || allArticles.length === 0) return;
    setIsDeletingAll(true);
    try {
      const batch = writeBatch(db);
      allArticles.forEach((article) => {
        batch.delete(doc(db, 'articles', article.id));
      });
      await batch.commit();
      toast({ title: 'Success', description: 'Semua artikel telah dihapus.' });
    } catch (err) {
      toast({ variant: 'destructive', title: 'Error', description: 'Gagal menghapus artikel.' });
    } finally {
      setIsDeletingAll(false);
    }
  };

  const getCategoryLabel = (cat: string) => {
    const map: Record<string, string> = {
      'Alam': 'Nature & Adventure',
      'Budaya': 'Heritage & Culture',
      'Kuliner': 'Food & Drink',
      'Sejarah': 'History & Heritage',
      'Sosial': 'People & Culture',
      'Geografis': 'Geography & Landscape',
      'Tips': 'Travel Tips'
    };
    return map[cat] || cat;
  };

  if (isUserLoading || !user) return <div className="h-screen flex items-center justify-center font-black uppercase text-xs tracking-widest">Authenticating...</div>;

  const filteredArticles = allArticles?.filter(a => {
    const matchesSearch = a.title?.toLowerCase().includes(tableSearch.toLowerCase()) || 
                         a.category?.toLowerCase().includes(tableSearch.toLowerCase());
    if (currentView === 'see-and-do') return a.type === 'destination' && matchesSearch;
    if (currentView === 'stories') return a.type === 'story' && matchesSearch;
    return false;
  }) || [];

  const isLoading = isArticlesLoading || isPkgsLoading || isGalleryLoading || isConfigLoading;

  return (
    <div className="min-h-screen bg-secondary/20 flex">
      <aside className="w-64 bg-black text-white flex flex-col p-8 fixed h-full z-20 overflow-y-auto no-scrollbar">
        <div className="mb-12">
          <span className="text-xl font-black uppercase text-primary tracking-tighter">visitwonosobo</span>
        </div>
        
        <nav className="flex-grow space-y-8">
          <div className="space-y-4">
            <h4 className="px-4 text-[8px] font-black uppercase tracking-[0.3em] text-muted-foreground/40">Article</h4>
            <div className="space-y-1">
              {[
                { id: 'see-and-do', icon: Map, label: 'See & Do' },
                { id: 'stories', icon: BookOpen, label: 'Stories' },
                { id: 'packages', icon: Package, label: 'Packages' },
              ].map((item) => (
                <Button 
                  key={item.id} 
                  variant="ghost" 
                  onClick={() => setCurrentView(item.id as DashboardView)} 
                  className={cn(
                    "w-full justify-start rounded-none h-11 gap-3 px-4 transition-all", 
                    currentView === item.id 
                      ? "bg-primary text-white" 
                      : "hover:bg-white/10 hover:text-white"
                  )}
                >
                  <item.icon size={16} /> <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="px-4 text-[8px] font-black uppercase tracking-[0.3em] text-muted-foreground/40">Gallery</h4>
            <Button 
              variant="ghost" 
              onClick={() => setCurrentView('gallery')} 
              className={cn(
                "w-full justify-start rounded-none h-11 gap-3 px-4 transition-all", 
                currentView === 'gallery' 
                  ? "bg-primary text-white" 
                  : "hover:bg-white/10 hover:text-white"
              )}
            >
              <ImageIcon size={16} /> <span className="text-[10px] font-black uppercase tracking-widest">Manage Assets</span>
            </Button>
          </div>

          <div className="space-y-4">
            <h4 className="px-4 text-[8px] font-black uppercase tracking-[0.3em] text-muted-foreground/40">Display</h4>
            <Button 
              variant="ghost" 
              onClick={() => setCurrentView('display')} 
              className={cn(
                "w-full justify-start rounded-none h-11 gap-3 px-4 transition-all", 
                currentView === 'display' 
                  ? "bg-primary text-white" 
                  : "hover:bg-white/10 hover:text-white"
              )}
            >
              <Settings size={16} /> <span className="text-[10px] font-black uppercase tracking-widest">Site Config</span>
            </Button>
          </div>
        </nav>

        <div className="mt-8 pt-8 border-t border-white/10 mb-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-primary rounded-none flex items-center justify-center shrink-0">
              <UserIcon size={16} className="text-white" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] font-black uppercase tracking-widest leading-none">Administrator</span>
              <span className="text-[8px] font-bold text-muted-foreground truncate">{user?.email}</span>
            </div>
          </div>
        </div>

        <Button variant="destructive" onClick={() => signOut(auth)} className="w-full rounded-none h-12 gap-3 font-black text-[10px] uppercase">
          <LogOut size={16} /> Sign Out
        </Button>
      </aside>

      <main className="flex-grow ml-64 p-12">
        {currentView === 'display' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl pb-20">
            <Card className="rounded-none border-2 shadow-xl bg-white p-8 space-y-6">
              <div className="border-b pb-4">
                <h3 className="text-lg font-black uppercase tracking-tight">Main Hero Configuration</h3>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Home Hero', key: 'heroHome', value: configForm.heroHome },
                  { label: 'See & Do Hero', key: 'heroSeeDo', value: configForm.heroSeeDo },
                  { label: 'Stories Hero', key: 'heroStories', value: configForm.heroStories }
                ].map((field) => (
                  <div key={field.key} className="space-y-1">
                    <Label className="text-[10px] font-black uppercase">{field.label}</Label>
                    <Input value={field.value} onChange={e => setConfigForm({...configForm, [field.key]: e.target.value})} className="rounded-none border-2 h-10 text-xs" />
                  </div>
                ))}
              </div>
            </Card>
            <Card className="rounded-none border-2 shadow-xl bg-white p-8 space-y-6">
               <div className="border-b pb-4">
                <h3 className="text-lg font-black uppercase tracking-tight">Category Images</h3>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Nature & Adventure', key: 'catNature', value: configForm.catNature },
                  { label: 'Heritage & Culture', key: 'catHeritage', value: configForm.catHeritage },
                  { label: 'Food & Drink', key: 'catFood', value: configForm.catFood },
                  { label: 'History & Heritage', key: 'catHistory', value: configForm.catHistory },
                  { label: 'People & Culture', key: 'catPeople', value: configForm.catPeople },
                  { label: 'Geography & Landscape', key: 'catGeo', value: configForm.catGeo },
                  { label: 'Travel Tips', key: 'catTips', value: configForm.catTips }
                ].map((field) => (
                  <div key={field.key} className="space-y-1">
                    <Label className="text-[10px] font-black uppercase">{field.label}</Label>
                    <Input value={field.value} onChange={e => setConfigForm({...configForm, [field.key]: e.target.value})} className="rounded-none border-2 h-10 text-xs" />
                  </div>
                ))}
              </div>
            </Card>
            <div className="lg:col-span-2">
              <Button onClick={handleSaveConfig} disabled={isSavingConfig} className="bg-primary text-white rounded-none h-14 px-12 font-black uppercase text-[10px] tracking-widest gap-2">
                {isSavingConfig ? <Loader2 className="animate-spin h-4 w-4" /> : <Save size={18} />} Save All Settings
              </Button>
            </div>
          </div>
        ) : currentView === 'gallery' ? (
          <div className="space-y-8">
            <Card className="rounded-none border-2 shadow-xl bg-white p-8">
              <div className="flex flex-col md:flex-row gap-8 items-stretch">
                <div className="w-[180px] aspect-square bg-secondary/10 border-2 border-black/10 flex items-center justify-center overflow-hidden shrink-0">
                  {galleryForm.url ? (
                    <img src={galleryForm.url} className="w-full h-full object-cover" alt="Preview" />
                  ) : (
                    <div className="text-[10px] font-black uppercase text-muted-foreground flex flex-col items-center gap-2 px-4 text-center">
                      <ImageIcon size={20} className="opacity-20" />
                      <span>Square Preview</span>
                    </div>
                  )}
                </div>

                <div className="flex-grow flex flex-col justify-between py-0">
                  <div className="space-y-4">
                    <div className="space-y-1 text-left">
                      <Label className="text-[10px] font-black uppercase block text-left">Image URL</Label>
                      <Input 
                        value={galleryForm.url} 
                        onChange={e => setGalleryForm({...galleryForm, url: e.target.value})} 
                        className="rounded-none border-2 h-10 text-xs" 
                        placeholder="https://..."
                      />
                    </div>
                    <div className="space-y-1 text-left">
                      <Label className="text-[10px] font-black uppercase block text-left">Caption</Label>
                      <Input 
                        value={galleryForm.caption} 
                        onChange={e => setGalleryForm({...galleryForm, caption: e.target.value})} 
                        className="rounded-none border-2 h-10 text-xs" 
                        placeholder="Image Description..."
                      />
                    </div>
                  </div>
                  <Button onClick={handleAddGallery} className="w-full bg-primary text-white rounded-none h-12 font-black uppercase text-[10px] tracking-widest gap-2 mt-4">
                    <Save size={14} /> Save to Gallery
                  </Button>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 pb-20">
               {isGalleryLoading ? (
                 <div className="col-span-full py-20 flex justify-center"><Loader2 className="animate-spin text-primary h-10 w-10" /></div>
               ) : (allGallery?.length === 0 || !allGallery) ? (
                 <div className="col-span-full py-20 text-center text-[10px] font-black uppercase text-muted-foreground">Gallery is empty.</div>
               ) : allGallery?.map(g => (
                 <div key={g.id} className="relative group aspect-square bg-gray-100 border overflow-hidden">
                    <img src={g.url} className="w-full h-full object-cover" alt={g.caption} />
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                      <button onClick={() => handleDeleteGallery(g.id)} className="absolute top-2 right-2 p-1 bg-red-600 text-white hover:bg-red-700"><X size={12} /></button>
                      <p className="text-[9px] font-black text-white uppercase leading-tight mb-2">{g.caption}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between items-end mb-6">
              <div className="space-y-1">
                <h1 className="text-4xl font-black uppercase tracking-tighter">{currentView.replace('-', ' ')}</h1>
                {(currentView === 'see-and-do' || currentView === 'stories') && filteredArticles.length > 0 && (
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="link" className="text-red-600 font-black uppercase text-[10px] p-0 h-auto gap-2">
                        <Trash2 size={12} /> Hapus Semua Artikel
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="rounded-none border-2">
                      <AlertDialogHeader>
                        <AlertDialogTitle className="font-black uppercase tracking-tight">Hapus Semua Artikel?</AlertDialogTitle>
                        <AlertDialogDescription className="text-xs font-medium">
                          Tindakan ini akan menghapus seluruh artikel {currentView.replace('-', ' ')} dari database secara permanen. Anda tidak dapat membatalkan ini.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="rounded-none font-black uppercase text-[10px]">Batal</AlertDialogCancel>
                        <AlertDialogAction onClick={handleDeleteAllArticles} className="bg-red-600 hover:bg-red-700 rounded-none font-black uppercase text-[10px]">
                          Ya, Hapus Semua
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                )}
              </div>
              <Button asChild className="bg-primary text-white rounded-none h-14 px-8 font-black uppercase text-[10px] tracking-widest">
                <Link href={currentView === 'packages' ? '/admin/plan-your-trip/editor/new' : `/admin/editor/new?type=${currentView === 'see-and-do' ? 'destination' : 'story'}`}>
                  <Plus size={18} className="mr-2" /> New {currentView === 'packages' ? 'Package' : 'Article'}
                </Link>
              </Button>
            </div>
            <Card className="rounded-none border-2 shadow-xl overflow-hidden bg-white mb-20">
              {isLoading ? <div className="p-20 flex justify-center"><Loader2 className="animate-spin text-primary h-10 w-10" /></div> : (
                <Table>
                  <TableHeader className="bg-secondary/50">
                    <TableRow>
                      <TableHead className="p-0 min-w-[320px] border-r">
                        <div className="relative flex items-center h-full">
                          <Search className="absolute left-4 h-3 w-3 text-muted-foreground" />
                          <Input 
                            placeholder="SEARCH CONTENT..." 
                            value={tableSearch}
                            onChange={(e) => setTableSearch(e.target.value)}
                            className="pl-10 h-12 border-none rounded-none text-[10px] font-black uppercase focus-visible:ring-0 bg-transparent w-full"
                          />
                        </div>
                      </TableHead>
                      <TableHead className="text-[10px] font-black uppercase tracking-widest px-6">CATEGORY</TableHead>
                      <TableHead className="text-[10px] font-black uppercase tracking-widest text-right px-6">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {(currentView === 'see-and-do' || currentView === 'stories') && (
                      filteredArticles.length === 0 ? (
                        <TableRow><TableCell colSpan={3} className="text-center py-20 text-[10px] font-bold uppercase text-muted-foreground">No records found.</TableCell></TableRow>
                      ) : filteredArticles.map(a => (
                        <TableRow key={a.id} className="hover:bg-secondary/10 border-b">
                          <TableCell className="p-0 flex items-center gap-4">
                            <div className="w-32 h-16 bg-gray-100 border overflow-hidden shrink-0">
                              {a.image && <img src={a.image} className="w-full h-full object-cover" alt={a.title} />}
                            </div>
                            <div className="flex flex-col justify-center max-w-md pr-4 py-2">
                              <div className="font-black uppercase text-[11px] leading-tight truncate">{a.title}</div>
                            </div>
                          </TableCell>
                          <TableCell className="py-2 px-6"><Badge className="rounded-none text-[8px] uppercase font-black px-2">{getCategoryLabel(a.category)}</Badge></TableCell>
                          <TableCell className="py-2 px-6 text-right">
                            <div className="flex justify-end gap-2">
                              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-secondary" asChild>
                                <Link href={`/admin/editor/${a.id}`}><Edit size={14}/></Link>
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                className="h-8 w-8 hover:bg-red-50 text-red-600" 
                                onClick={() => handleDeleteArticle(a.id)}
                              >
                                <Trash2 size={14}/>
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              )}
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
