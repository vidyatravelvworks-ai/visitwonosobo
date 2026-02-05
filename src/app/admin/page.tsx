'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useUser, useFirestore, useCollection, useDoc, useMemoFirebase } from '@/firebase';
import { collection, doc, deleteDoc, query, orderBy, setDoc, serverTimestamp } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Plus, Edit, Trash2, LogOut, Map, BookOpen, MapPin, 
  Layout, Save, Grid, Loader2, Image as ImageIcon
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { getAuth, signOut } from 'firebase/auth';
import { cn } from '@/lib/utils';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

const AdminDashboard = () => {
  const { user, isUserLoading } = useUser();
  const db = useFirestore();
  const auth = getAuth();
  const router = useRouter();
  const { toast } = useToast();

  const [currentView, setCurrentView] = useState<'see-and-do' | 'stories' | 'packages' | 'website-config' | 'gallery'>('see-and-do');
  const [configData, setConfigData] = useState<any>(null);
  const [isSavingConfig, setIsSavingConfig] = useState(false);
  
  const [newGalleryItem, setNewGalleryItem] = useState({ url: '', caption: '' });
  const [isAddingPhoto, setIsAddingPhoto] = useState(false);

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

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

  useEffect(() => {
    if (dbConfig) {
      setConfigData({
        heroImages: dbConfig.heroImages || { home: '', seeAndDo: '', stories: '' },
        categoryImages: dbConfig.categoryImages || {
          'Alam': '', 'Budaya': '', 'Kuliner': '', 
          'Sejarah': '', 'Sosial': '', 'Geografis': '', 'Tips': ''
        }
      });
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

  const handleSaveConfig = () => {
    if (!db || !configData) return;
    setIsSavingConfig(true);
    const docRef = doc(db, 'config', 'website');
    
    const dataToSave = { ...configData };
    delete dataToSave.id;

    setDoc(docRef, dataToSave, { merge: true })
      .then(() => {
        toast({ 
          title: 'Berhasil Disimpan', 
          description: 'Konfigurasi website telah diperbarui.',
        });
        setIsSavingConfig(false);
      })
      .catch((err) => {
        setIsSavingConfig(false);
        errorEmitter.emit('permission-error', new FirestorePermissionError({
          path: docRef.path,
          operation: 'write',
          requestResourceData: dataToSave
        }));
      });
  };

  const handleSaveNewGalleryItem = () => {
    if (!db || !newGalleryItem.url) {
      toast({ variant: 'destructive', title: 'Error', description: 'URL Gambar wajib diisi.' });
      return;
    }
    
    setIsAddingPhoto(true);
    const id = `img-${Date.now()}`;
    const newItem = {
      id,
      url: newGalleryItem.url,
      caption: newGalleryItem.caption || 'Trip Photo',
      order: (galleryItems?.length || 0) + 1,
      createdAt: serverTimestamp()
    };
    
    const docRef = doc(db, 'gallery', id);
    setDoc(docRef, newItem)
      .then(() => {
        setNewGalleryItem({ url: '', caption: '' });
        toast({ title: 'Berhasil', description: 'Foto telah ditambahkan ke galeri.' });
        setIsAddingPhoto(false);
      })
      .catch((err) => {
        setIsAddingPhoto(false);
        errorEmitter.emit('permission-error', new FirestorePermissionError({
          path: docRef.path,
          operation: 'create',
          requestResourceData: newItem
        }));
      });
  };

  const requestDeleteConfirmation = (itemType: string): boolean => {
    const message = `Ketik "hapus" untuk mengonfirmasi penghapusan ${itemType} ini:`;
    const input = window.prompt(message);
    
    if (input === 'hapus') {
      return true;
    } else if (input !== null) {
      toast({ 
        variant: 'destructive', 
        title: 'Konfirmasi Gagal', 
        description: 'Kata kunci yang dimasukkan salah.' 
      });
    }
    return false;
  };

  const handleDeleteGallery = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    const confirmed = requestDeleteConfirmation('gambar galeri');
    if (!confirmed) return;
    
    if (!db) return;

    const docRef = doc(db, 'gallery', id);
    deleteDoc(docRef)
      .then(() => {
        toast({ title: 'Berhasil', description: 'Gambar dihapus dari galeri.' });
      })
      .catch((err) => {
        errorEmitter.emit('permission-error', new FirestorePermissionError({
          path: docRef.path,
          operation: 'delete'
        }));
      });
  };

  const handleDeleteArticle = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!requestDeleteConfirmation('artikel')) return;
    if (!db) return;
    
    const docRef = doc(db, 'articles', id);
    deleteDoc(docRef)
      .then(() => {
        toast({ title: 'Berhasil', description: 'Artikel telah dihapus.' });
      })
      .catch((err) => {
        errorEmitter.emit('permission-error', new FirestorePermissionError({
          path: docRef.path,
          operation: 'delete'
        }));
      });
  };

  const handleDeletePackage = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!requestDeleteConfirmation('paket trip')) return;
    if (!db) return;
    
    const docRef = doc(db, 'trip_packages', id);
    deleteDoc(docRef)
      .then(() => {
        toast({ title: 'Berhasil', description: 'Paket trip telah dihapus.' });
      })
      .catch((err) => {
        errorEmitter.emit('permission-error', new FirestorePermissionError({
          path: docRef.path,
          operation: 'delete'
        }));
      });
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (error) {
      toast({ variant: 'destructive', title: 'Error', description: 'Gagal keluar.' });
    }
  };

  const heroLabels: Record<string, string> = {
    home: 'Banner Beranda (Home Hero)',
    seeAndDo: 'Banner See & Do',
    stories: 'Banner Stories'
  };

  if (isUserLoading || !user) {
    return <div className="h-screen flex items-center justify-center font-black uppercase tracking-widest text-xs">Authenticating...</div>;
  }

  return (
    <div className="min-h-screen bg-secondary/20 flex">
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

        <Button variant="destructive" onClick={handleSignOut} className="mt-auto w-full rounded-none h-12 gap-3 shadow-lg bg-red-600 hover:bg-red-700 text-white border-none">
          <LogOut size={18} /> <span className="text-[10px] font-bold uppercase tracking-widest">Sign Out</span>
        </Button>
      </aside>

      <main className="flex-grow ml-64 p-12">
        <header className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-4xl font-black uppercase tracking-tighter">
              {currentView.replace('-', ' ')}
            </h1>
            <p className="text-sm font-medium text-muted-foreground mt-2">Atur tampilan dan konten website secara real-time.</p>
          </div>
          {(currentView === 'see-and-do' || currentView === 'stories' || currentView === 'packages') && (
            <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-none h-14 px-8 gap-3 font-black uppercase tracking-widest text-[10px]">
              <Link href={currentView === 'packages' ? '/admin/plan-your-trip/editor/new' : `/admin/editor/new?type=${currentView === 'see-and-do' ? 'destination' : 'story'}`}>
                <Plus size={18} /> New {currentView === 'packages' ? 'Package' : 'Article'}
              </Link>
            </Button>
          )}
        </header>

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
                          <Button variant="ghost" size="icon" className="h-7 w-7 text-red-600" onClick={(e) => handleDeletePackage(e, p.id)}><Trash2 size={12}/></Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    filteredArticles.map(a => (
                      <TableRow key={a.id || a.slug} className="hover:bg-secondary/10">
                        <TableCell className="py-1 px-4 flex items-center gap-3">
                          <div className="w-10 h-7 bg-gray-200 border p-0.5">
                            {a.image ? <img src={a.image} className="w-full h-full object-cover" /> : <div className="w-full h-full bg-gray-300" />}
                          </div>
                          <div>
                            <div className="font-bold uppercase text-[11px] truncate max-w-[300px]">{a.title}</div>
                            <div className="text-[8px] text-muted-foreground uppercase">{a.date}</div>
                          </div>
                        </TableCell>
                        <TableCell className="py-1 px-4"><Badge variant="outline" className="rounded-none text-[8px] uppercase">{a.category}</Badge></TableCell>
                        <TableCell className="py-1 px-4 text-right space-x-1">
                          <Button variant="ghost" size="icon" className="h-7 w-7" asChild><Link href={`/admin/editor/${a.id}`}><Edit size={12}/></Link></Button>
                          <Button variant="ghost" size="icon" className="h-7 w-7 text-red-600" onClick={(e) => handleDeleteArticle(e, a.id)}><Trash2 size={12}/></Button>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            )}
          </Card>
        )}

        {currentView === 'website-config' && (
          <div className="space-y-8">
            {isConfigLoading ? (
              <div className="flex justify-center p-20"><Loader2 className="animate-spin text-primary h-10 w-10" /></div>
            ) : configData && (
              <>
                <Card className="rounded-none border-2 border-black/5 shadow-xl">
                  <CardHeader className="border-b bg-white"><CardTitle className="text-xs font-black uppercase tracking-widest">Gambar Banner Utama (Hero)</CardTitle></CardHeader>
                  <CardContent className="p-6 space-y-6 bg-white">
                    {['home', 'seeAndDo', 'stories'].map(page => (
                      <div key={page} className="space-y-1">
                        <Label className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">{heroLabels[page] || page} URL</Label>
                        <div className="flex gap-4 items-center">
                           <div className="w-20 h-12 bg-gray-100 border shrink-0 overflow-hidden flex items-center justify-center">
                              {configData.heroImages?.[page] ? (
                                 <img src={configData.heroImages[page]} className="w-full h-full object-cover" />
                              ) : (
                                 <div className="text-[8px] font-bold text-muted-foreground uppercase text-center leading-tight">No Preview</div>
                              )}
                           </div>
                           <Input 
                             value={configData.heroImages?.[page] || ''} 
                             onChange={(e) => setConfigData({...configData, heroImages: {...configData.heroImages, [page]: e.target.value}})}
                             className="rounded-none border-2 text-[10px] h-10 focus:border-primary flex-grow"
                             placeholder="https://example.com/image.jpg"
                           />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="rounded-none border-2 border-black/5 shadow-xl">
                  <CardHeader className="border-b bg-white"><CardTitle className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-2"><Map size={14}/> Kategori See &amp; Do</CardTitle></CardHeader>
                  <CardContent className="p-6 space-y-6 bg-white">
                    {['Alam', 'Budaya', 'Kuliner'].map(cat => (
                      <div key={cat} className="space-y-1">
                        <Label className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">{cat} URL</Label>
                        <div className="flex gap-4 items-center">
                           <div className="w-20 h-12 bg-gray-100 border shrink-0 overflow-hidden flex items-center justify-center">
                              {configData.categoryImages?.[cat] ? (
                                 <img src={configData.categoryImages[cat]} className="w-full h-full object-cover" />
                              ) : (
                                 <div className="text-[8px] font-bold text-muted-foreground uppercase text-center leading-tight">No Preview</div>
                              )}
                           </div>
                           <Input 
                             value={configData.categoryImages?.[cat] || ''} 
                             onChange={(e) => setConfigData({...configData, categoryImages: {...configData.categoryImages, [cat]: e.target.value}})}
                             className="rounded-none border-2 text-[10px] h-10 focus:border-primary flex-grow"
                             placeholder="https://example.com/image.jpg"
                           />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="rounded-none border-2 border-black/5 shadow-xl">
                  <CardHeader className="border-b bg-white"><CardTitle className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-2"><BookOpen size={14}/> Kategori Stories</CardTitle></CardHeader>
                  <CardContent className="p-6 space-y-6 bg-white">
                    {['Sejarah', 'Sosial', 'Geografis', 'Tips'].map(cat => (
                      <div key={cat} className="space-y-1">
                        <Label className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">{cat} URL</Label>
                        <div className="flex gap-4 items-center">
                           <div className="w-20 h-12 bg-gray-100 border shrink-0 overflow-hidden flex items-center justify-center">
                              {configData.categoryImages?.[cat] ? (
                                 <img src={configData.categoryImages[cat]} className="w-full h-full object-cover" />
                              ) : (
                                 <div className="text-[8px] font-bold text-muted-foreground uppercase text-center leading-tight">No Preview</div>
                              )}
                           </div>
                           <Input 
                             value={configData.categoryImages?.[cat] || ''} 
                             onChange={(e) => setConfigData({...configData, categoryImages: {...configData.categoryImages, [cat]: e.target.value}})}
                             className="rounded-none border-2 text-[10px] h-10 focus:border-primary flex-grow"
                             placeholder="https://example.com/image.jpg"
                           />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <div className="flex flex-col gap-4">
                   <Button onClick={handleSaveConfig} disabled={isSavingConfig} className="bg-black hover:bg-primary text-white rounded-none h-16 w-full gap-3 font-black uppercase tracking-widest text-[11px] shadow-lg transition-all active:scale-[0.98]">
                    {isSavingConfig ? <Loader2 className="animate-spin" /> : <Save size={20} />}
                    {isSavingConfig ? 'Menyimpan Konfigurasi...' : 'Simpan Perubahan Website'}
                  </Button>
                </div>
              </>
            )}
          </div>
        )}

        {currentView === 'gallery' && (
          <div className="space-y-8">
            <Card className="rounded-none border-2 border-black/5 shadow-xl bg-white w-full">
              <CardHeader className="border-b bg-secondary/10 p-2">
                <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                  <ImageIcon size={14} className="text-primary" /> Tambah Foto Galeri Baru
                </CardTitle>
              </CardHeader>
              <CardContent className="p-2">
                <div className="flex gap-3 items-stretch">
                  <div className="w-32 bg-gray-100 border-2 border-dashed border-black/10 shrink-0 overflow-hidden flex items-center justify-center relative min-h-[90px]">
                    {newGalleryItem.url ? (
                      <img src={newGalleryItem.url} className="w-full h-full object-cover" alt="Preview" />
                    ) : (
                      <div className="flex flex-col items-center gap-1 text-muted-foreground p-2 text-center">
                        <ImageIcon size={16} className="opacity-20" />
                        <span className="text-[7px] font-black uppercase tracking-widest">Image Preview</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-grow flex flex-col justify-between space-y-1">
                    <div className="space-y-1">
                      <div className="space-y-0.5">
                        <Label className="text-[8px] font-black uppercase tracking-widest text-muted-foreground">URL Gambar</Label>
                        <Input 
                          placeholder="https://..." 
                          value={newGalleryItem.url} 
                          onChange={(e) => setNewGalleryItem({...newGalleryItem, url: e.target.value})}
                          className="rounded-none border-2 text-[10px] h-8 font-bold focus:border-primary"
                        />
                      </div>
                      <div className="space-y-0.5">
                        <Label className="text-[8px] font-black uppercase tracking-widest text-muted-foreground">Keterangan Foto</Label>
                        <Input 
                          placeholder="Keterangan..." 
                          value={newGalleryItem.caption} 
                          onChange={(e) => setNewGalleryItem({...newGalleryItem, caption: e.target.value})}
                          className="rounded-none border-2 text-[10px] h-8 font-bold focus:border-primary"
                        />
                      </div>
                    </div>
                    <Button 
                      onClick={handleSaveNewGalleryItem} 
                      disabled={isAddingPhoto || !newGalleryItem.url}
                      className="w-full bg-primary hover:bg-black text-white rounded-none h-8 gap-2 font-black uppercase tracking-widest text-[9px] shadow-md"
                    >
                      {isAddingPhoto ? <Loader2 className="animate-spin h-3 w-3" /> : <Plus size={14} />}
                      {isAddingPhoto ? 'Menyimpan...' : 'Add Photo to Gallery'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {isGalleryLoading ? (
                <div className="col-span-full flex justify-center p-20"><Loader2 className="animate-spin h-10 w-10 text-primary" /></div>
              ) : galleryItems?.map(item => (
                <Card key={item.id} className="rounded-none border-2 border-black/5 shadow-xl overflow-hidden group relative">
                  <div className="aspect-video bg-gray-100 relative">
                    {item.url ? (
                      <img src={item.url} className="w-full h-full object-cover" />
                    ) : (
                      <div className="flex items-center justify-center h-full text-muted-foreground text-[10px] font-bold uppercase">
                        No Image
                      </div>
                    )}
                    
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20 group-hover:pointer-events-auto">
                      <button 
                        type="button"
                        className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-none shadow-2xl transition-all active:scale-90 pointer-events-auto relative z-30"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleDeleteGallery(e, item.id);
                        }}
                      >
                        <Trash2 className="h-6 w-6" />
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;