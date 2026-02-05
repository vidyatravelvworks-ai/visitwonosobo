'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useUser, useFirestore, useCollection, useDoc, useMemoFirebase } from '@/firebase';
import { collection, doc, deleteDoc, query, orderBy, setDoc, serverTimestamp } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, Edit, Trash2, LogOut, Map, BookOpen, Loader2, Package, Image as ImageIcon, Settings, Save } from 'lucide-react';
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
    heroStories: ''
  });

  useEffect(() => {
    if (websiteConfig) {
      setConfigForm({
        heroHome: websiteConfig.heroImages?.home || '',
        heroSeeDo: websiteConfig.heroImages?.seeAndDo || '',
        heroStories: websiteConfig.heroImages?.stories || ''
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
        updatedAt: serverTimestamp()
      }, { merge: true });
      toast({ title: 'Berhasil', description: 'Konfigurasi website telah diperbarui.' });
    } catch (err) {
      toast({ variant: 'destructive', title: 'Gagal', description: 'Gagal menyimpan konfigurasi.' });
    } finally {
      setIsSavingConfig(false);
    }
  };

  const handleDelete = async (e: React.MouseEvent, col: string, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!db) return;
    
    const confirmed = window.prompt(`Ketik "hapus" untuk mengonfirmasi penghapusan data ini:`);
    if (confirmed === 'hapus') {
      try {
        await deleteDoc(doc(db, col, id));
        toast({ title: 'Berhasil Dihapus', description: 'Data telah dihapus secara permanen.' });
      } catch (err) {
        toast({ variant: 'destructive', title: 'Gagal Menghapus', description: 'Terjadi kesalahan sistem.' });
      }
    }
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
          <Button variant="ghost" onClick={() => setCurrentView('see-and-do')} className={cn("w-full justify-start rounded-none h-12 gap-3 px-4", currentView === 'see-and-do' && "bg-primary")}>
            <Map size={18} /> <span className="text-[10px] font-black uppercase tracking-widest">See & Do</span>
          </Button>
          <Button variant="ghost" onClick={() => setCurrentView('stories')} className={cn("w-full justify-start rounded-none h-12 gap-3 px-4", currentView === 'stories' && "bg-primary")}>
            <BookOpen size={18} /> <span className="text-[10px] font-black uppercase tracking-widest">Stories</span>
          </Button>
          <Button variant="ghost" onClick={() => setCurrentView('packages')} className={cn("w-full justify-start rounded-none h-12 gap-3 px-4", currentView === 'packages' && "bg-primary")}>
            <Package size={18} /> <span className="text-[10px] font-black uppercase tracking-widest">Packages</span>
          </Button>
          <Button variant="ghost" onClick={() => setCurrentView('gallery')} className={cn("w-full justify-start rounded-none h-12 gap-3 px-4", currentView === 'gallery' && "bg-primary")}>
            <ImageIcon size={18} /> <span className="text-[10px] font-black uppercase tracking-widest">Gallery</span>
          </Button>
          <Button variant="ghost" onClick={() => setCurrentView('settings')} className={cn("w-full justify-start rounded-none h-12 gap-3 px-4", currentView === 'settings' && "bg-primary")}>
            <Settings size={18} /> <span className="text-[10px] font-black uppercase tracking-widest">Settings</span>
          </Button>
        </nav>
        <Button variant="destructive" onClick={() => signOut(auth)} className="mt-auto w-full rounded-none h-12 gap-3 font-black text-[10px] uppercase">
          <LogOut size={16} /> Sign Out
        </Button>
      </aside>

      <main className="flex-grow ml-64 p-12">
        <header className="flex justify-between items-end mb-12">
          <h1 className="text-4xl font-black uppercase tracking-tighter">{currentView.replace('-', ' ')}</h1>
          {currentView !== 'gallery' && currentView !== 'settings' && (
            <Button asChild className="bg-primary text-white rounded-none h-14 px-8 font-black uppercase text-[10px] tracking-widest">
              <Link href={currentView === 'packages' ? '/admin/plan-your-trip/editor/new' : `/admin/editor/new?type=${currentView === 'see-and-do' ? 'destination' : 'story'}`}>
                <Plus size={18} className="mr-2" /> New {currentView === 'packages' ? 'Package' : 'Article'}
              </Link>
            </Button>
          )}
        </header>

        {currentView === 'settings' ? (
          <Card className="rounded-none border-2 shadow-xl bg-white p-8 space-y-8 max-w-4xl">
            <div className="space-y-6">
              <div className="border-b pb-4">
                <h3 className="text-lg font-black uppercase tracking-tight">Hero Images Configuration</h3>
                <p className="text-[10px] font-bold uppercase text-muted-foreground">Manage background images for main pages.</p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase">Home Hero Image URL</Label>
                  <Input 
                    value={configForm.heroHome} 
                    onChange={e => setConfigForm({...configForm, heroHome: e.target.value})} 
                    className="rounded-none border-2 h-12 text-xs" 
                    placeholder="https://images.unsplash.com/..." 
                  />
                  {configForm.heroHome && <div className="mt-2 aspect-[3/1] w-full overflow-hidden border"><img src={configForm.heroHome} className="w-full h-full object-cover" /></div>}
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase">See & Do Hero Image URL</Label>
                  <Input 
                    value={configForm.heroSeeDo} 
                    onChange={e => setConfigForm({...configForm, heroSeeDo: e.target.value})} 
                    className="rounded-none border-2 h-12 text-xs" 
                    placeholder="https://images.unsplash.com/..." 
                  />
                  {configForm.heroSeeDo && <div className="mt-2 aspect-[3/1] w-full overflow-hidden border"><img src={configForm.heroSeeDo} className="w-full h-full object-cover" /></div>}
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase">Stories Hero Image URL</Label>
                  <Input 
                    value={configForm.heroStories} 
                    onChange={e => setConfigForm({...configForm, heroStories: e.target.value})} 
                    className="rounded-none border-2 h-12 text-xs" 
                    placeholder="https://images.unsplash.com/..." 
                  />
                  {configForm.heroStories && <div className="mt-2 aspect-[3/1] w-full overflow-hidden border"><img src={configForm.heroStories} className="w-full h-full object-cover" /></div>}
                </div>
              </div>

              <Button 
                onClick={handleSaveConfig} 
                disabled={isSavingConfig}
                className="bg-primary text-white rounded-none h-14 px-10 font-black uppercase text-[10px] tracking-widest gap-2"
              >
                {isSavingConfig ? <Loader2 className="animate-spin h-4 w-4" /> : <Save size={18} />}
                Save Configuration
              </Button>
            </div>
          </Card>
        ) : (
          <Card className="rounded-none border-2 shadow-xl overflow-hidden bg-white">
            {isLoading ? <div className="p-20 flex justify-center"><Loader2 className="animate-spin text-primary h-10 w-10" /></div> : (
              <Table>
                <TableHeader className="bg-secondary/50">
                  <TableRow>
                    <TableHead className="text-[10px] font-black uppercase tracking-widest py-4">
                      {currentView === 'gallery' ? 'Image Preview' : 'Preview'}
                    </TableHead>
                    <TableHead className="text-[10px] font-black uppercase tracking-widest">
                      {currentView === 'packages' ? 'Price' : currentView === 'gallery' ? 'Caption' : 'Category'}
                    </TableHead>
                    <TableHead className="text-[10px] font-black uppercase tracking-widest text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {(currentView === 'see-and-do' || currentView === 'stories') && (
                    filteredArticles.length === 0 ? (
                      <TableRow><TableCell colSpan={3} className="text-center py-20 text-[10px] font-bold uppercase text-muted-foreground">Tidak ada artikel.</TableCell></TableRow>
                    ) : filteredArticles.map(a => (
                      <TableRow key={a.id} className="hover:bg-secondary/10 h-24">
                        <TableCell className="py-2 px-4 flex items-center gap-4 h-full">
                          <div className="w-32 h-20 bg-gray-100 border overflow-hidden shrink-0">
                            {a.image && <img src={a.image} className="w-full h-full object-cover" alt={a.title} />}
                          </div>
                          <div className="flex flex-col justify-center max-w-md">
                            <div className="font-black uppercase text-[11px] leading-tight truncate">{a.title}</div>
                            <div className="text-[9px] text-muted-foreground uppercase mt-1 font-bold tracking-wider">{a.date} | {a.author}</div>
                          </div>
                        </TableCell>
                        <TableCell className="py-2 px-4">
                          <Badge className="rounded-none text-[8px] uppercase font-black px-2">{a.category}</Badge>
                        </TableCell>
                        <TableCell className="py-2 px-4 text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-secondary" asChild>
                              <Link href={`/admin/editor/${a.id}`}><Edit size={14}/></Link>
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-8 w-8 text-red-600 hover:bg-red-50 relative z-30" 
                              onClick={(e) => handleDelete(e, 'articles', a.id)}
                            >
                              <Trash2 size={14}/>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}

                  {currentView === 'packages' && (
                    allPackages?.length === 0 ? (
                      <TableRow><TableCell colSpan={3} className="text-center py-20 text-[10px] font-bold uppercase text-muted-foreground">Tidak ada paket.</TableCell></TableRow>
                    ) : allPackages?.map(p => (
                      <TableRow key={p.id} className="hover:bg-secondary/10 h-24">
                        <TableCell className="py-2 px-4">
                          <div className="font-black uppercase text-[11px] leading-tight">{p.title}</div>
                          <div className="text-[9px] text-muted-foreground uppercase mt-1 font-bold">{p.time}</div>
                        </TableCell>
                        <TableCell className="py-2 px-4">
                          <span className="font-black text-xs">{p.price}</span>
                        </TableCell>
                        <TableCell className="py-2 px-4 text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-secondary" asChild>
                              <Link href={`/admin/plan-your-trip/editor/${p.id}`}><Edit size={14}/></Link>
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-8 w-8 text-red-600 hover:bg-red-50 relative z-30" 
                              onClick={(e) => handleDelete(e, 'trip_packages', p.id)}
                            >
                              <Trash2 size={14}/>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}

                  {currentView === 'gallery' && (
                    allGallery?.length === 0 ? (
                      <TableRow><TableCell colSpan={3} className="text-center py-20 text-[10px] font-bold uppercase text-muted-foreground">Tidak ada gambar.</TableCell></TableRow>
                    ) : allGallery?.map(g => (
                      <TableRow key={g.id} className="hover:bg-secondary/10 h-24">
                        <TableCell className="py-2 px-4">
                          <div className="w-32 h-20 bg-gray-100 border overflow-hidden">
                            {g.url && <img src={g.url} className="w-full h-full object-cover" alt={g.caption} />}
                          </div>
                        </TableCell>
                        <TableCell className="py-2 px-4">
                          <span className="text-[10px] font-bold uppercase">{g.caption}</span>
                        </TableCell>
                        <TableCell className="py-2 px-4 text-right">
                          <div className="flex justify-end gap-2">
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-8 w-8 text-red-600 hover:bg-red-50 relative z-30" 
                              onClick={(e) => handleDelete(e, 'gallery', g.id)}
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
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;