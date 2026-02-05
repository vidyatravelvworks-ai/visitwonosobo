'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection, doc, deleteDoc, query, orderBy } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Plus, Edit, Trash2, LogOut, Map, BookOpen, Loader2, Package, Image as ImageIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { getAuth, signOut } from 'firebase/auth';
import { cn } from '@/lib/utils';

type DashboardView = 'see-and-do' | 'stories' | 'packages' | 'gallery';

const AdminDashboard = () => {
  const { user, isUserLoading } = useUser();
  const db = useFirestore();
  const auth = getAuth();
  const router = useRouter();
  const { toast } = useToast();
  const [currentView, setCurrentView] = useState<DashboardView>('see-and-do');

  useEffect(() => {
    if (!isUserLoading && !user) router.push('/login');
  }, [user, isUserLoading, router]);

  // Queries for different entities
  const articlesQ = useMemoFirebase(() => db ? query(collection(db, 'articles'), orderBy('updatedAt', 'desc')) : null, [db]);
  const packagesQ = useMemoFirebase(() => db ? query(collection(db, 'trip_packages'), orderBy('updatedAt', 'desc')) : null, [db]);
  const galleryQ = useMemoFirebase(() => db ? query(collection(db, 'gallery'), orderBy('order', 'asc')) : null, [db]);

  const { data: allArticles, isLoading: isArticlesLoading } = useCollection(articlesQ);
  const { data: allPackages, isLoading: isPkgsLoading } = useCollection(packagesQ);
  const { data: allGallery, isLoading: isGalleryLoading } = useCollection(galleryQ);

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

  const isLoading = isArticlesLoading || isPkgsLoading || isGalleryLoading;

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
        </nav>
        <Button variant="destructive" onClick={() => signOut(auth)} className="mt-auto w-full rounded-none h-12 gap-3 font-black text-[10px] uppercase">
          <LogOut size={16} /> Sign Out
        </Button>
      </aside>

      <main className="flex-grow ml-64 p-12">
        <header className="flex justify-between items-end mb-12">
          <h1 className="text-4xl font-black uppercase tracking-tighter">{currentView.replace('-', ' ')}</h1>
          {currentView !== 'gallery' && (
            <Button asChild className="bg-primary text-white rounded-none h-14 px-8 font-black uppercase text-[10px] tracking-widest">
              <Link href={currentView === 'packages' ? '/admin/plan-your-trip/editor/new' : `/admin/editor/new?type=${currentView === 'see-and-do' ? 'destination' : 'story'}`}>
                <Plus size={18} className="mr-2" /> New {currentView === 'packages' ? 'Package' : 'Article'}
              </Link>
            </Button>
          )}
        </header>

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
                {/* ARTICLES VIEW */}
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

                {/* PACKAGES VIEW */}
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

                {/* GALLERY VIEW */}
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
      </main>
    </div>
  );
};

export default AdminDashboard;
