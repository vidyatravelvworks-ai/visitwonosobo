'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useUser, useFirestore, useCollection, useDoc, useMemoFirebase } from '@/firebase';
import { collection, doc, deleteDoc, query, orderBy, setDoc } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Plus, Edit, Trash2, LogOut, Map, BookOpen, MapPin, 
  Layout, Save, Grid, Loader2 
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { getAuth, signOut } from 'firebase/auth';
import { cn } from '@/lib/utils';

const AdminDashboard = () => {
  const { user, isUserLoading } = useUser();
  const db = useFirestore();
  const auth = getAuth();
  const router = useRouter();
  const { toast } = useToast();

  const [currentView, setCurrentView] = useState<'see-and-do' | 'stories' | 'packages' | 'website-config' | 'gallery'>('see-and-do');
  const [configData, setConfigData] = useState<any>(null);
  const [isSavingConfig, setIsSavingConfig] = useState(false);

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  // Firestore Queries
  const articlesQuery = useMemoFirebase(() => {
    if (!db) return null;
    return query(collection(db, 'articles'), orderBy('updatedAt', 'desc'));
  }, [db]);

  const packagesQuery = useMemoFirebase(() => {
    if (!db) return null;
    return query(collection(db, 'trip_packages'), orderBy('title', 'asc'));
  }, [db]);

  const galleryQuery = useMemoFirebase(() => {
    if (!db) return null;
    return query(collection(db, 'gallery'), orderBy('order', 'asc'));
  }, [db]);

  const { data: allArticles, isLoading: isArticlesLoading } = useCollection(articlesQuery);
  const { data: packages, isLoading: isPkgsLoading } = useCollection(packagesQuery);
  const { data: galleryItems, isLoading: isGalleryLoading } = useCollection(galleryQuery);
  
  const configRef = useMemoFirebase(() => db ? doc(db, 'config', 'website') : null, [db]);
  const { data: dbConfig, isLoading: isConfigLoading } = useDoc(configRef);

  // Initialize configData with defaults if not exists in DB
  useEffect(() => {
    if (dbConfig) {
      setConfigData(dbConfig);
    } else if (!isConfigLoading && dbConfig === null) {
      setConfigData({
        heroImages: { home: '', seeAndDo: '', stories: '' },
        categoryImages: {
          'Alam': '', 'Budaya': '', 'Kuliner': '', 
          'Sejarah': '', 'Sosial': '', 'Geografis': '', 'Tips': ''
        }
      });
    }
  }, [dbConfig, isConfigLoading]);

  const filteredArticles = allArticles?.filter(a => {
    if (currentView === 'see-and-do') return a.type === 'destination';
    if (currentView === 'stories') return a.type === 'story';
    return false;
  }) || [];

  const handleSaveConfig = async () => {
    if (!db || !configData) return;
    setIsSavingConfig(true);
    try {
      await setDoc(doc(db, 'config', 'website'), configData, { merge: true });
      toast({ title: 'Success', description: 'Website configuration saved.' });
    } catch (error) {
      toast({ variant: 'destructive', title: 'Error', description: 'Failed to save config.' });
    } finally {
      setIsSavingConfig(false);
    }
  };

  const handleAddGalleryImage = async () => {
    if (!db) return;
    const id = `img-${Date.now()}`;
    const newImage = {
      id,
      url: '',
      caption: 'New Trip Photo',
      order: (galleryItems?.length || 0) + 1
    };
    await setDoc(doc(db, 'gallery', id), newImage);
  };

  const handleDeleteGallery = async (id: string) => {
    if (!window.confirm('Hapus gambar galeri ini?')) return;
    try {
      await deleteDoc(doc(db!, 'gallery', id));
      toast({ title: 'Berhasil', description: 'Gambar dihapus.' });
    } catch (error) {
      toast({ variant: 'destructive', title: 'Error', description: 'Gagal menghapus.' });
    }
  };

  const handleDeleteArticle = async (id: string) => {
    if (!window.confirm('Hapus artikel ini?')) return;
    try {
      await deleteDoc(doc(db!, 'articles', id));
      toast({ title: 'Berhasil', description: 'Artikel telah dihapus.' });
    } catch (error) {
      toast({ variant: 'destructive', title: 'Error', description: 'Gagal menghapus.' });
    }
  };

  const handleDeletePackage = async (id: string) => {
    if (!window.confirm('Hapus paket trip ini?')) return;
    try {
      await deleteDoc(doc(db!, 'trip_packages', id));
      toast({ title: 'Berhasil', description: 'Paket trip telah dihapus.' });
    } catch (error) {
      toast({ variant: 'destructive', title: 'Error', description: 'Gagal menghapus.' });
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (error) {
      toast({ variant: 'destructive', title: 'Error', description: 'Gagal keluar.' });
    }
  };

  if (isUserLoading || !user) {
    return <div className="h-screen flex items-center justify-center font-black uppercase tracking-widest text-xs">Authenticating...</div>;
  }

  return (
    <div className="min-h-screen bg-secondary/20 flex">
      {/* SIDEBAR */}
      <aside className="w-64 bg-black text-white flex flex-col p-8 fixed h-full z-20">
        <div className="mb-12">
          <span className="text-xl font-black uppercase tracking-tighter text-primary">Admin Panel</span>
          <p className="text-[8px] font-bold text-white/50 uppercase tracking-[0.3em] mt-1">visitwonosobo</p>
        </div>
        
        <nav className="flex-grow space-y-2">
          <p className="text-[8px] font-bold uppercase tracking-widest text-white/30 px-4 mb-2">Content</p>
          <Button variant="ghost" onClick={() => setCurrentView('see-and-do')} className={cn("w-full justify-start text-white hover:bg-primary rounded-none h-10 gap-3 px-4", currentView === 'see-and-do' && "bg-primary")}>
            <Map size={16} /> <span className="text-[10px] font-bold uppercase tracking-widest">See &amp; Do</span>
          </Button>
          <Button variant="ghost" onClick={() => setCurrentView('stories')} className={cn("w-full justify-start text-white hover:bg-primary rounded-none h-10 gap-3 px-4", currentView === 'stories' && "bg-primary")}>
            <BookOpen size={16} /> <span className="text-[10px] font-bold uppercase tracking-widest">Stories</span>
          </Button>

          <p className="text-[8px] font-bold uppercase tracking-widest text-white/30 px-4 mt-6 mb-2">Appearance</p>
          <Button variant="ghost" onClick={() => setCurrentView('website-config')} className={cn("w-full justify-start text-white hover:bg-primary rounded-none h-10 gap-3 px-4", currentView === 'website-config' && "bg-primary")}>
            <Layout size={16} /> <span className="text-[10px] font-bold uppercase tracking-widest">Hero &amp; Categories</span>
          </Button>
          <Button variant="ghost" onClick={() => setCurrentView('gallery')} className={cn("w-full justify-start text-white hover:bg-primary rounded-none h-10 gap-3 px-4", currentView === 'gallery' && "bg-primary")}>
            <Grid size={16} /> <span className="text-[10px] font-bold uppercase tracking-widest">Trip Gallery</span>
          </Button>
          
          <p className="text-[8px] font-bold uppercase tracking-widest text-white/30 px-4 mt-6 mb-2">Offerings</p>
          <Button variant="ghost" onClick={() => setCurrentView('packages')} className={cn("w-full justify-start text-white hover:bg-primary rounded-none h-10 gap-3 px-4", currentView === 'packages' && "bg-primary")}>
            <MapPin size={16} /> <span className="text-[10px] font-bold uppercase tracking-widest">Paket Trip</span>
          </Button>
        </nav>

        <Button variant="destructive" onClick={handleSignOut} className="mt-auto w-full rounded-none h-12 gap-3 shadow-lg bg-red-600 hover:bg-red-700 text-white">
          <LogOut size={18} /> <span className="text-[10px] font-bold uppercase tracking-widest">Sign Out</span>
        </Button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-grow ml-64 p-12">
        <header className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-4xl font-black uppercase tracking-tighter">
              {currentView.replace('-', ' ')}
            </h1>
            <p className="text-sm font-medium text-muted-foreground mt-2">Adjust your website elements in real-time.</p>
          </div>
          {(currentView === 'see-and-do' || currentView === 'stories' || currentView === 'packages' || currentView === 'gallery') && (
            <Button onClick={currentView === 'gallery' ? handleAddGalleryImage : undefined} asChild={currentView !== 'gallery'} className="bg-primary hover:bg-primary/90 text-white rounded-none h-14 px-8 gap-3 font-black uppercase tracking-widest text-[10px]">
              {currentView === 'gallery' ? (
                <span className="flex items-center gap-3 cursor-pointer"><Plus size={18} /> Add Photo</span>
              ) : (
                <Link href={currentView === 'packages' ? '/admin/plan-your-trip/editor/new' : `/admin/editor/new?type=${currentView === 'see-and-do' ? 'destination' : 'story'}`}>
                  <Plus size={18} /> New {currentView === 'packages' ? 'Package' : 'Article'}
                </Link>
              )}
            </Button>
          )}
        </header>

        {/* VIEW: ARTICLES & PACKAGES TABLE */}
        {(currentView === 'see-and-do' || currentView === 'stories' || currentView === 'packages') && (
          <Card className="rounded-none border-2 border-black/5 shadow-xl">
            {(isArticlesLoading || isPkgsLoading) ? (
              <div className="flex justify-center p-20"><Loader2 className="animate-spin text-primary h-10 w-10" /></div>
            ) : (
              <Table>
                <TableHeader className="bg-secondary/50">
                  <TableRow>
                    <TableHead className="text-[10px] font-bold uppercase tracking-widest py-1 px-4">Title / Info</TableHead>
                    <TableHead className="text-[10px] font-bold uppercase tracking-widest py-1 px-4">Category / Price</TableHead>
                    <TableHead className="text-[10px] font-bold uppercase tracking-widest py-1 px-4 text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentView === 'packages' ? (
                    packages?.map(p => (
                      <TableRow key={p.id} className="hover:bg-secondary/10">
                        <TableCell className="py-1 px-4">
                          <div className="font-bold uppercase text-[11px]">{p.title}</div>
                          <div className="text-[8px] text-muted-foreground">{p.time}</div>
                        </TableCell>
                        <TableCell className="py-1 px-4"><Badge className="bg-primary rounded-none text-[8px] uppercase">{p.price}</Badge></TableCell>
                        <TableCell className="py-1 px-4 text-right space-x-1">
                          <Button variant="ghost" size="icon" className="h-7 w-7" asChild><Link href={`/admin/plan-your-trip/editor/${p.id}`}><Edit size={12}/></Link></Button>
                          <Button variant="ghost" size="icon" className="h-7 w-7 text-red-600" onClick={() => handleDeletePackage(p.id)}><Trash2 size={12}/></Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    filteredArticles.map(a => (
                      <TableRow key={a.id} className="hover:bg-secondary/10">
                        <TableCell className="py-1 px-4 flex items-center gap-3">
                          <div className="w-10 h-7 bg-gray-200 border p-0.5"><img src={a.image} className="w-full h-full object-cover" /></div>
                          <div>
                            <div className="font-bold uppercase text-[11px] truncate max-w-[300px]">{a.title}</div>
                            <div className="text-[8px] text-muted-foreground uppercase">{a.date}</div>
                          </div>
                        </TableCell>
                        <TableCell className="py-1 px-4"><Badge variant="outline" className="rounded-none text-[8px] uppercase">{a.category}</Badge></TableCell>
                        <TableCell className="py-1 px-4 text-right space-x-1">
                          <Button variant="ghost" size="icon" className="h-7 w-7" asChild><Link href={`/admin/editor/${a.id}`}><Edit size={12}/></Link></Button>
                          <Button variant="ghost" size="icon" className="h-7 w-7 text-red-600" onClick={() => handleDeleteArticle(a.id)}><Trash2 size={12}/></Button>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            )}
          </Card>
        )}

        {/* VIEW: WEBSITE CONFIG */}
        {currentView === 'website-config' && (
          <div className="space-y-8">
            {isConfigLoading ? (
              <div className="flex justify-center p-20"><Loader2 className="animate-spin text-primary h-10 w-10" /></div>
            ) : configData && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                  <Card className="rounded-none border-2 border-black/5 shadow-xl">
                    <CardHeader className="border-b"><CardTitle className="text-xs font-black uppercase tracking-widest">Hero Banner Images</CardTitle></CardHeader>
                    <CardContent className="p-6 space-y-4">
                      {['home', 'seeAndDo', 'stories'].map(page => (
                        <div key={page} className="space-y-1">
                          <Label className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">{page} Page Hero URL</Label>
                          <Input 
                            value={configData.heroImages?.[page] || ''} 
                            onChange={(e) => setConfigData({...configData, heroImages: {...configData.heroImages, [page]: e.target.value}})}
                            className="rounded-none border-2 text-[10px] h-10"
                          />
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                <Card className="rounded-none border-2 border-black/5 shadow-xl">
                  <CardHeader className="border-b"><CardTitle className="text-xs font-black uppercase tracking-widest">Category Images</CardTitle></CardHeader>
                  <CardContent className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {['Alam', 'Budaya', 'Kuliner', 'Sejarah', 'Sosial', 'Geografis', 'Tips'].map(cat => (
                      <div key={cat} className="space-y-1">
                        <Label className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">{cat} Category URL</Label>
                        <Input 
                          value={configData.categoryImages?.[cat] || ''} 
                          onChange={(e) => setConfigData({...configData, categoryImages: {...configData.categoryImages, [cat]: e.target.value}})}
                          className="rounded-none border-2 text-[10px] h-10"
                        />
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Button onClick={handleSaveConfig} disabled={isSavingConfig} className="bg-black hover:bg-primary text-white rounded-none h-14 w-full gap-3 font-black uppercase tracking-widest text-[10px]">
                  <Save size={18} /> {isSavingConfig ? 'Saving...' : 'Save Configuration'}
                </Button>
              </>
            )}
          </div>
        )}

        {/* VIEW: GALLERY */}
        {currentView === 'gallery' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isGalleryLoading ? (
              <div className="col-span-full flex justify-center p-20"><Loader2 className="animate-spin text-primary h-10 w-10" /></div>
            ) : galleryItems?.map(item => (
              <Card key={item.id} className="rounded-none border-2 border-black/5 shadow-xl overflow-hidden group">
                <div className="aspect-video bg-gray-100 relative">
                  {item.url ? <img src={item.url} className="w-full h-full object-cover" /> : <div className="flex items-center justify-center h-full text-muted-foreground text-[10px] font-bold uppercase">No Image</div>}
                </div>
                <CardContent className="p-4 space-y-3">
                  <Input 
                    placeholder="Image URL" 
                    value={item.url} 
                    onChange={(e) => setDoc(doc(db!, 'gallery', item.id), { ...item, url: e.target.value })}
                    className="rounded-none border-2 text-[9px] h-8"
                  />
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Order" 
                      type="number"
                      value={item.order} 
                      onChange={(e) => setDoc(doc(db!, 'gallery', item.id), { ...item, order: parseInt(e.target.value) || 0 })}
                      className="rounded-none border-2 text-[9px] h-8 w-20"
                    />
                    <Button variant="ghost" className="text-red-600 h-8 px-2 ml-auto" onClick={() => handleDeleteGallery(item.id)}><Trash2 size={14}/></Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
