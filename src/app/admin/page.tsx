
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
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Plus, Edit, LogOut, Map, BookOpen, Loader2, Package, Image as ImageIcon, Settings, Save } from 'lucide-react';
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
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryForm, setGalleryForm] = useState({ url: '', caption: '', order: 0 });

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
    if (!db || !galleryForm.url) return;
    try {
      const id = `img-${Date.now()}`;
      await setDoc(doc(db, 'gallery', id), { ...galleryForm, id, createdAt: serverTimestamp() });
      toast({ title: 'Success', description: 'Gallery image added.' });
      setIsGalleryOpen(false);
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
    if (currentView === 'see-and-do') return a.type === 'destination';
    if (currentView === 'stories') return a.type === 'story';
    return false;
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
          {currentView === 'gallery' ? (
            <Button onClick={() => setIsGalleryOpen(true)} className="bg-primary text-white rounded-none h-14 px-8 font-black uppercase text-[10px] tracking-widest">
              <Plus size={18} className="mr-2" /> New Image
            </Button>
          ) : currentView !== 'settings' && (
            <Button asChild className="bg-primary text-white rounded-none h-14 px-8 font-black uppercase text-[10px] tracking-widest">
              <Link href={currentView === 'packages' ? '/admin/plan-your-trip/editor/new' : `/admin/editor/new?type=${currentView === 'see-and-do' ? 'destination' : 'story'}`}>
                <Plus size={18} className="mr-2" /> New {currentView === 'packages' ? 'Package' : 'Article'}
              </Link>
            </Button>
          )}
        </header>

        <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
          <DialogContent className="rounded-none border-4 border-black p-0 overflow-hidden">
            <DialogHeader className="p-6 border-b bg-secondary/20">
              <DialogTitle className="text-sm font-black uppercase tracking-widest">Add Gallery Image</DialogTitle>
            </DialogHeader>
            <div className="p-6 space-y-4">
              <div className="space-y-1">
                <Label className="text-[10px] font-black uppercase">Image URL</Label>
                <Input value={galleryForm.url} onChange={e => setGalleryForm({...galleryForm, url: e.target.value})} className="rounded-none h-10 text-xs" />
              </div>
              <div className="space-y-1">
                <Label className="text-[10px] font-black uppercase">Caption</Label>
                <Input value={galleryForm.caption} onChange={e => setGalleryForm({...galleryForm, caption: e.target.value})} className="rounded-none h-10 text-xs" />
              </div>
              <div className="space-y-1">
                <Label className="text-[10px] font-black uppercase">Order (Number)</Label>
                <Input type="number" value={galleryForm.order} onChange={e => setGalleryForm({...galleryForm, order: parseInt(e.target.value) || 0})} className="rounded-none h-10 text-xs" />
              </div>
            </div>
            <DialogFooter className="p-6 border-t bg-secondary/10">
              <Button variant="ghost" onClick={() => setIsGalleryOpen(false)} className="rounded-none font-black uppercase text-[10px]">Cancel</Button>
              <Button onClick={handleAddGallery} className="bg-primary text-white rounded-none h-12 px-8 font-black uppercase text-[10px]">Add to Gallery</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

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
        ) : (
          <Card className="rounded-none border-2 shadow-xl overflow-hidden bg-white">
            {isLoading ? <div className="p-20 flex justify-center"><Loader2 className="animate-spin text-primary h-10 w-10" /></div> : (
              <Table>
                <TableHeader className="bg-secondary/50">
                  <TableRow>
                    <TableHead className="text-[10px] font-black uppercase tracking-widest py-4">Preview</TableHead>
                    <TableHead className="text-[10px] font-black uppercase tracking-widest">CATEGORY</TableHead>
                    <TableHead className="text-[10px] font-black uppercase tracking-widest text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {(currentView === 'see-and-do' || currentView === 'stories') && (
                    filteredArticles.length === 0 ? (
                      <TableRow><TableCell colSpan={3} className="text-center py-20 text-[10px] font-bold uppercase text-muted-foreground">No articles found.</TableCell></TableRow>
                    ) : filteredArticles.map(a => (
                      <TableRow key={a.id} className="hover:bg-secondary/10 h-20">
                        <TableCell className="py-2 px-4 flex items-center gap-4">
                          <div className="w-32 h-16 bg-gray-100 border overflow-hidden shrink-0">
                            {a.image && <img src={a.image} className="w-full h-full object-cover" alt={a.title} />}
                          </div>
                          <div className="flex flex-col justify-center max-w-md">
                            <div className="font-black uppercase text-[11px] leading-tight truncate">{a.title}</div>
                            <div className="text-[8px] text-muted-foreground uppercase mt-1 font-bold tracking-wider">{a.date} | {a.author || 'Admin'}</div>
                          </div>
                        </TableCell>
                        <TableCell className="py-2 px-4"><Badge className="rounded-none text-[8px] uppercase font-black px-2">{getCategoryLabel(a.category)}</Badge></TableCell>
                        <TableCell className="py-2 px-4 text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-secondary" asChild><Link href={`/admin/editor/${a.id}`}><Edit size={14}/></Link></Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}

                  {currentView === 'packages' && (
                    allPackages?.length === 0 ? (
                      <TableRow><TableCell colSpan={3} className="text-center py-20 text-[10px] font-bold uppercase text-muted-foreground">No packages found.</TableCell></TableRow>
                    ) : allPackages?.map(p => (
                      <TableRow key={p.id} className="hover:bg-secondary/10 h-20">
                        <TableCell className="py-2 px-4">
                          <div className="flex flex-col">
                            <div className="font-black uppercase text-[11px] leading-tight">{p.title}</div>
                            <div className="text-[8px] text-muted-foreground uppercase mt-1 font-bold tracking-wider">{p.time}</div>
                          </div>
                        </TableCell>
                        <TableCell className="py-2 px-4"><span className="text-[10px] font-black text-primary">{p.price}</span></TableCell>
                        <TableCell className="py-2 px-4 text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-secondary" asChild><Link href={`/admin/plan-your-trip/editor/${p.id}`}><Edit size={14}/></Link></Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}

                  {currentView === 'gallery' && (
                    allGallery?.length === 0 ? (
                      <TableRow><TableCell colSpan={3} className="text-center py-20 text-[10px] font-bold uppercase text-muted-foreground">No images found.</TableCell></TableRow>
                    ) : allGallery?.map(g => (
                      <TableRow key={g.id} className="hover:bg-secondary/10 h-20">
                        <TableCell className="py-2 px-4">
                          <div className="w-32 h-16 bg-gray-100 border overflow-hidden">
                            {g.url && <img src={g.url} className="w-full h-full object-cover" alt={g.caption} />}
                          </div>
                        </TableCell>
                        <TableCell className="py-2 px-4"><span className="text-[10px] font-bold uppercase">{g.caption}</span></TableCell>
                        <TableCell className="py-2 px-4 text-right">
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
