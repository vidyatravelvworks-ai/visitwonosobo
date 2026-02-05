'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useUser, useFirestore, useCollection, useDoc, useMemoFirebase } from '@/firebase';
import { collection, doc, query, orderBy, setDoc, serverTimestamp } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, Edit, LogOut, Map, BookOpen, Loader2, Package, Image as ImageIcon, Settings, Save, Search } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { getAuth, signOut } from 'firebase/auth';
import { cn } from '@/lib/utils';

type DashboardView = 'see-and-do' | 'stories' | 'packages' | 'gallery' | 'settings';

const AdminDashboard = () => {
  const { user, isUserLoading } = useUser();
  const db = useFirestore();
  const auth = getAuth();
  const router = useRouter();
  const { toast } = useToast();
  const [currentView, setCurrentView] = useState<DashboardView>('see-and-do');
  const [isSavingConfig, setIsSavingConfig] = useState(false);
  const [galleryForm, setGalleryForm] = useState({ url: '', caption: '', order: 0 });
  const [tableSearch, setTableSearch] = useState('');

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
    catFood: ''
  });

  useEffect(() => {
    if (websiteConfig) {
      setConfigForm({
        heroHome: websiteConfig.heroImages?.home || '',
        heroSeeDo: websiteConfig.heroImages?.seeAndDo || '',
        heroStories: websiteConfig.heroImages?.stories || '',
        catNature: websiteConfig.categoryImages?.['Nature & Adventure'] || '',
        catHeritage: websiteConfig.categoryImages?.['Heritage & Culture'] || '',
        catFood: websiteConfig.categoryImages?.['Food & Drink'] || ''
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
          'Food & Drink': configForm.catFood
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
      await setDoc(doc(db, 'gallery', id), { ...galleryForm, id, createdAt: serverTimestamp() });
      toast({ title: 'Success', description: 'Gallery image added.' });
      setGalleryForm({ url: '', caption: '', order: (allGallery?.length || 0) + 1 });
    } catch (err) {
      toast({ variant: 'destructive', title: 'Error' });
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
                         a.category?.toLowerCase().includes(tableSearch.toLowerCase()) ||
                         getCategoryLabel(a.category)?.toLowerCase().includes(tableSearch.toLowerCase());
    if (currentView === 'see-and-do') return a.type === 'destination' && matchesSearch;
    if (currentView === 'stories') return a.type === 'story' && matchesSearch;
    return false;
  }) || [];

  const filteredPackages = allPackages?.filter(p => {
    return p.title?.toLowerCase().includes(tableSearch.toLowerCase()) || 
           p.price?.toLowerCase().includes(tableSearch.toLowerCase());
  }) || [];

  const isLoading = isArticlesLoading || isPkgsLoading || isGalleryLoading || isConfigLoading;

  return (
    <div className="min-h-screen bg-secondary/20 flex">
      <aside className="w-64 bg-black text-white flex flex-col p-8 fixed h-full z-20">
        <div className="mb-12">
          <span className="text-xl font-black uppercase text-primary tracking-tighter">visitwonosobo</span>
        </div>
        <nav className="flex-grow space-y-2">
          {[
            { id: 'see-and-do', icon: Map, label: 'See & Do' },
            { id: 'stories', icon: BookOpen, label: 'Stories' },
            { id: 'packages', icon: Package, label: 'Packages' },
            { id: 'gallery', icon: ImageIcon, label: 'Gallery' },
            { id: 'settings', icon: Settings, label: 'Settings' }
          ].map((item) => (
            <Button 
              key={item.id} 
              variant="ghost" 
              onClick={() => setCurrentView(item.id as DashboardView)} 
              className={cn("w-full justify-start rounded-none h-12 gap-3 px-4", currentView === item.id && "bg-primary")}
            >
              <item.icon size={18} /> <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
            </Button>
          ))}
        </nav>
        <Button variant="destructive" onClick={() => signOut(auth)} className="mt-auto w-full rounded-none h-12 gap-3 font-black text-[10px] uppercase">
          <LogOut size={16} /> Sign Out
        </Button>
      </aside>

      <main className="flex-grow ml-64 p-12">
        <header className="flex justify-between items-end mb-12">
          <h1 className="text-4xl font-black uppercase tracking-tighter">{currentView.replace('-', ' ')}</h1>
          {(currentView !== 'settings' && currentView !== 'gallery') && (
            <Button asChild className="bg-primary text-white rounded-none h-14 px-8 font-black uppercase text-[10px] tracking-widest">
              <Link href={currentView === 'packages' ? '/admin/plan-your-trip/editor/new' : `/admin/editor/new?type=${currentView === 'see-and-do' ? 'destination' : 'story'}`}>
                <Plus size={18} className="mr-2" /> New {currentView === 'packages' ? 'Package' : 'Article'}
              </Link>
            </Button>
          )}
        </header>

        {currentView === 'settings' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl">
            <Card className="rounded-none border-2 shadow-xl bg-white p-8 space-y-6">
              <div className="border-b pb-4">
                <h3 className="text-lg font-black uppercase tracking-tight">Main Hero Configuration</h3>
                <p className="text-[10px] font-bold uppercase text-muted-foreground">Manage background images for main pages.</p>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Home Hero', key: 'heroHome', value: configForm.heroHome },
                  { label: 'See & Do Hero', key: 'heroSeeDo', value: configForm.heroSeeDo },
                  { label: 'Stories Hero', key: 'heroStories', value: configForm.heroStories }
                ].map((field) => (
                  <div key={field.key} className="space-y-1">
                    <Label className="text-[10px] font-black uppercase">{field.label}</Label>
                    <Input 
                      value={field.value} 
                      onChange={e => setConfigForm({...configForm, [field.key]: e.target.value})} 
                      className="rounded-none border-2 h-10 text-xs" 
                    />
                  </div>
                ))}
              </div>
            </Card>

            <Card className="rounded-none border-2 shadow-xl bg-white p-8 space-y-6">
              <div className="border-b pb-4">
                <h3 className="text-lg font-black uppercase tracking-tight">Category Covers</h3>
                <p className="text-[10px] font-bold uppercase text-muted-foreground">Visuals for See & Do categories.</p>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Nature & Adventure', key: 'catNature', value: configForm.catNature },
                  { label: 'Heritage & Culture', key: 'catHeritage', value: configForm.catHeritage },
                  { label: 'Food & Drink', key: 'catFood', value: configForm.catFood }
                ].map((field) => (
                  <div key={field.key} className="space-y-1">
                    <Label className="text-[10px] font-black uppercase">{field.label}</Label>
                    <Input 
                      value={field.value} 
                      onChange={e => setConfigForm({...configForm, [field.key]: e.target.value})} 
                      className="rounded-none border-2 h-10 text-xs" 
                    />
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
              <div className="border-b pb-4 mb-6">
                <h3 className="text-lg font-black uppercase tracking-tight">Gallery Quick Add</h3>
                <p className="text-[10px] font-bold uppercase text-muted-foreground">Add new photos to the trip gallery instantly.</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <Label className="text-[10px] font-black uppercase">Image URL</Label>
                    <Input 
                      value={galleryForm.url} 
                      onChange={e => setGalleryForm({...galleryForm, url: e.target.value})} 
                      className="rounded-none border-2 h-10 text-xs" 
                      placeholder="https://..."
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-[10px] font-black uppercase">Caption</Label>
                    <Input 
                      value={galleryForm.caption} 
                      onChange={e => setGalleryForm({...galleryForm, caption: e.target.value})} 
                      className="rounded-none border-2 h-10 text-xs" 
                      placeholder="Description..."
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Label className="text-[10px] font-black uppercase">Display Order</Label>
                      <Input 
                        type="number" 
                        value={galleryForm.order} 
                        onChange={e => setGalleryForm({...galleryForm, order: parseInt(e.target.value) || 0})} 
                        className="rounded-none border-2 h-10 text-xs" 
                      />
                    </div>
                    <div className="flex items-end">
                      <Button onClick={handleAddGallery} className="w-full bg-primary text-white rounded-none h-10 font-black uppercase text-[10px] tracking-widest gap-2">
                        <Save size={14} /> Save Image
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase">Live Preview</Label>
                  <div className="w-32 aspect-square bg-secondary/10 border-2 border-dashed border-black/10 flex items-center justify-center overflow-hidden">
                    {galleryForm.url ? (
                      <img src={galleryForm.url} className="w-full h-full object-cover" alt="Preview" />
                    ) : (
                      <div className="text-[10px] font-black uppercase text-muted-foreground flex flex-col items-center gap-2">
                        <ImageIcon size={32} className="opacity-20" />
                        No Image URL provided
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
               {isGalleryLoading ? (
                 <div className="col-span-full py-20 flex justify-center"><Loader2 className="animate-spin text-primary h-10 w-10" /></div>
               ) : allGallery?.length === 0 ? (
                 <div className="col-span-full py-20 text-center text-[10px] font-black uppercase text-muted-foreground">No images in gallery yet.</div>
               ) : allGallery?.map(g => (
                 <div key={g.id} className="relative group aspect-square bg-gray-100 border overflow-hidden">
                    {g.url && g.url.trim() !== "" ? <img src={g.url} className="w-full h-full object-cover" alt={g.caption} /> : null}
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                      <p className="text-[9px] font-black text-white uppercase tracking-tighter leading-tight mb-2">{g.caption}</p>
                      <div className="text-[8px] font-bold text-primary uppercase">Order: {g.order}</div>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        ) : (
          <Card className="rounded-none border-2 shadow-xl overflow-hidden bg-white">
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
                      <TableRow><TableCell colSpan={3} className="text-center py-20 text-[10px] font-bold uppercase text-muted-foreground">No articles found.</TableCell></TableRow>
                    ) : filteredArticles.map(a => (
                      <TableRow key={a.id} className="hover:bg-secondary/10 border-b">
                        <TableCell className="p-0 flex items-center gap-4">
                          <div className="w-32 h-16 bg-gray-100 border overflow-hidden shrink-0">
                            {a.image && <img src={a.image} className="w-full h-full object-cover" alt={a.title} />}
                          </div>
                          <div className="flex flex-col justify-center max-w-md pr-4 py-2">
                            <div className="font-black uppercase text-[11px] leading-tight truncate">{a.title}</div>
                            <div className="text-[8px] text-muted-foreground uppercase mt-1 font-bold tracking-wider">{a.date} | {a.author || 'Admin'}</div>
                          </div>
                        </TableCell>
                        <TableCell className="py-2 px-6"><Badge className="rounded-none text-[8px] uppercase font-black px-2">{getCategoryLabel(a.category)}</Badge></TableCell>
                        <TableCell className="py-2 px-6 text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-secondary" asChild><Link href={`/admin/editor/${a.id}`}><Edit size={14}/></Link></Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}

                  {currentView === 'packages' && (
                    filteredPackages?.length === 0 ? (
                      <TableRow><TableCell colSpan={3} className="text-center py-20 text-[10px] font-bold uppercase text-muted-foreground">No packages found.</TableCell></TableRow>
                    ) : filteredPackages?.map(p => (
                      <TableRow key={p.id} className="hover:bg-secondary/10 border-b">
                        <TableCell className="py-2 px-4">
                          <div className="flex flex-col">
                            <div className="font-black uppercase text-[11px] leading-tight">{p.title}</div>
                            <div className="text-[8px] text-muted-foreground uppercase mt-1 font-bold tracking-wider">{p.time}</div>
                          </div>
                        </TableCell>
                        <TableCell className="py-2 px-6"><span className="text-[10px] font-black text-primary">{p.price}</span></TableCell>
                        <TableCell className="py-2 px-6 text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-secondary" asChild><Link href={`/admin/plan-your-trip/editor/${p.id}`}><Edit size={14}/></Link></Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            )}
          </Card>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
