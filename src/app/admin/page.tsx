'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { useUser, useFirestore, useCollection } from '@/firebase';
import { collection, doc, deleteDoc, query, orderBy, setDoc, serverTimestamp } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Plus, Edit, Trash2, LogOut, LayoutDashboard, Search, Map, BookOpen, MapPin, Globe, Clock, RefreshCw } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useMemoFirebase } from '@/firebase';
import { getAuth, signOut } from 'firebase/auth';
import { cn } from '@/lib/utils';
import { staticPackages } from '@/data/packages';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AdminDashboard = () => {
  const { user, isUserLoading } = useUser();
  const db = useFirestore();
  const auth = getAuth();
  const router = useRouter();
  const pathname = usePathname();
  const { toast } = useToast();

  const [currentView, setCurrentView] = useState<'articles' | 'packages'>('articles');
  const [filterType, setFilterType] = useState<'all' | 'destination' | 'story'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [isSyncing, setIsSyncing] = useState(false);

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

  const { data: articles, isLoading: isArticlesLoading } = useCollection(articlesQuery);
  const { data: packages, isLoading: isPackagesLoading } = useCollection(packagesQuery);

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
      toast({ title: 'Berhasil', description: 'Paket telah dihapus.' });
    } catch (error) {
      toast({ variant: 'destructive', title: 'Error', description: 'Gagal menghapus.' });
    }
  };

  const handleSyncPackages = async () => {
    if (!db || isSyncing) return;
    setIsSyncing(true);
    try {
      for (const pkg of staticPackages) {
        await setDoc(doc(db, 'trip_packages', pkg.id), {
          ...pkg,
          updatedAt: serverTimestamp()
        });
      }
      toast({ title: 'Success', description: 'Static packages synced to cloud.' });
    } catch (error) {
      toast({ variant: 'destructive', title: 'Error', description: 'Sync failed.' });
    } finally {
      setIsSyncing(false);
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
    return <div className="h-screen flex items-center justify-center font-black uppercase tracking-widest text-xs text-muted-foreground animate-pulse">Authenticating Admin...</div>;
  }

  const filteredArticles = articles?.filter(a => {
    const matchesSearch = a.title?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' ? true : a.type === filterType;
    const matchesCategory = filterCategory === 'all' ? true : a.category === filterCategory;
    return matchesSearch && matchesType && matchesCategory;
  }) || [];

  const filteredPackages = packages?.filter(p => 
    p.title?.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const getNewLink = () => {
    if (currentView === 'packages') return '/admin/plan-your-trip/editor/new';
    return `/admin/editor/new?type=${filterType === 'all' ? 'destination' : filterType}`;
  };

  return (
    <div className="min-h-screen bg-secondary/20 flex">
      <aside className="w-64 bg-black text-white flex flex-col p-8 fixed h-full z-20">
        <div className="mb-12">
          <span className="text-xl font-black uppercase tracking-tighter text-primary">Admin Panel</span>
          <p className="text-[8px] font-bold text-white/50 uppercase tracking-[0.3em] mt-1">visitwonosobo</p>
        </div>
        
        <nav className="flex-grow space-y-2">
          <Button 
            variant="ghost" 
            onClick={() => {
              setCurrentView('articles');
              setFilterType('all');
            }}
            className={cn(
              "w-full justify-start text-white hover:bg-primary rounded-none h-12 gap-3 px-4 transition-all",
              currentView === 'articles' && filterType === 'all' && "bg-primary"
            )}
          >
            <LayoutDashboard size={18} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Dashboard</span>
          </Button>
          
          <div className="pt-6 pb-2">
            <p className="text-[8px] font-bold uppercase tracking-widest text-white/30 px-4 mb-2">Manage Content</p>
          </div>

          <Button 
            variant="ghost" 
            onClick={() => {
              setCurrentView('articles');
              setFilterType('destination');
              setFilterCategory('all');
            }}
            className={cn(
              "w-full justify-start text-white hover:bg-primary rounded-none h-12 gap-3 px-4 transition-all",
              currentView === 'articles' && filterType === 'destination' && "bg-primary"
            )}
          >
            <Map size={18} />
            <span className="text-[10px] font-bold uppercase tracking-widest text-left leading-tight">See & Do Articles</span>
          </Button>

          <Button 
            variant="ghost" 
            onClick={() => {
              setCurrentView('articles');
              setFilterType('story');
              setFilterCategory('all');
            }}
            className={cn(
              "w-full justify-start text-white hover:bg-primary rounded-none h-12 gap-3 px-4 transition-all",
              currentView === 'articles' && filterType === 'story' && "bg-primary"
            )}
          >
            <BookOpen size={18} />
            <span className="text-[10px] font-bold uppercase tracking-widest text-left leading-tight">Stories Articles</span>
          </Button>

          <div className="pt-6 pb-2">
            <p className="text-[8px] font-bold uppercase tracking-widest text-white/30 px-4 mb-2">Adjust Experience</p>
          </div>

          <Button 
            variant="ghost" 
            onClick={() => setCurrentView('packages')}
            className={cn(
              "w-full justify-start text-white hover:bg-primary rounded-none h-12 gap-3 px-4 transition-all",
              currentView === 'packages' && "bg-primary"
            )}
          >
            <MapPin size={18} />
            <span className="text-[10px] font-bold uppercase tracking-widest text-left leading-tight">Adjust Paket Trip</span>
          </Button>

          <Button 
            variant="ghost" 
            asChild
            className="w-full justify-start text-white hover:bg-primary rounded-none h-12 gap-3 px-4 transition-all"
          >
            <Link href="/" target="_blank">
              <Globe size={18} />
              <span className="text-[10px] font-bold uppercase tracking-widest text-left leading-tight">View Website</span>
            </Link>
          </Button>
        </nav>

        <div className="mt-auto pt-6 space-y-4">
          <div className="bg-white/5 p-4 space-y-2">
            <p className="text-[8px] font-bold uppercase tracking-widest text-white/40">Logged in as:</p>
            <p className="text-[10px] font-black truncate">{user.email}</p>
          </div>
          <Button 
            variant="destructive" 
            onClick={handleSignOut} 
            className="w-full rounded-none h-12 gap-3 shadow-lg bg-red-600 hover:bg-red-700 text-white"
          >
            <LogOut size={18} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Sign Out</span>
          </Button>
        </div>
      </aside>

      <main className="flex-grow ml-64 p-12">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-black uppercase tracking-tighter">
              {currentView === 'packages' ? 'Paket Wisata' : 
               filterType === 'all' ? 'All Articles' : 
               filterType === 'destination' ? 'See & Do Content' : 'Stories Content'}
            </h1>
            <p className="text-sm font-medium text-muted-foreground mt-2">
              Manage your {currentView === 'packages' ? 'trip packages' : 'articles'} in real-time.
            </p>
          </div>
          <div className="flex gap-4">
            {currentView === 'packages' && packages && packages.length === 0 && (
              <Button 
                onClick={handleSyncPackages} 
                disabled={isSyncing}
                variant="outline"
                className="border-2 border-primary text-primary rounded-none h-14 px-8 gap-3 font-black uppercase tracking-widest text-[10px]"
              >
                <RefreshCw className={cn("h-4 w-4", isSyncing && "animate-spin")} />
                Sync Static Packages
              </Button>
            )}
            <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-none h-14 px-8 gap-3 font-black uppercase tracking-widest text-[10px]">
              <Link href={getNewLink()}>
                <Plus size={18} />
                New {currentView === 'packages' ? 'Package' : 'Article'}
              </Link>
            </Button>
          </div>
        </header>

        <Card className="rounded-none border-2 border-black/5 shadow-xl">
          <CardHeader className="p-8 border-b">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div className="flex items-center gap-4">
                <CardTitle className="text-xl font-black uppercase tracking-tight">Directory</CardTitle>
                <Badge variant="secondary" className="rounded-none border-2 border-black/10 font-black text-[10px] uppercase tracking-widest px-3 py-1">
                  {currentView === 'packages' ? 'TRIP PACKAGES' : filterType.toUpperCase()}
                </Badge>
              </div>

              <div className="flex flex-col md:flex-row w-full lg:w-auto gap-4">
                {currentView === 'articles' && (
                  <div className="w-full md:w-56">
                    <Select value={filterCategory} onValueChange={setFilterCategory}>
                      <SelectTrigger className="rounded-none border-2 border-black/10 h-10 font-bold text-[10px] uppercase tracking-widest bg-white">
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent className="rounded-none border-2">
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="Alam">Nature & Adventure</SelectItem>
                        <SelectItem value="Budaya">Heritage & Culture</SelectItem>
                        <SelectItem value="Kuliner">Food & Drink</SelectItem>
                        <SelectItem value="Sejarah">Sejarah & Warisan</SelectItem>
                        <SelectItem value="Sosial">Masyarakat & Budaya</SelectItem>
                        <SelectItem value="Geografis">Bentang Alam & Geografis</SelectItem>
                        <SelectItem value="Tips">Tips & Panduan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <div className="relative w-full md:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input 
                    placeholder="Search..." 
                    className="pl-10 w-full rounded-none border-2 border-black/10 focus:border-primary h-10 font-bold text-[10px] uppercase tracking-widest outline-none bg-white"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              {currentView === 'articles' ? (
                <>
                  <TableHeader>
                    <TableRow className="bg-secondary/50">
                      <TableHead className="text-[10px] font-bold uppercase tracking-widest p-4 w-24">Preview</TableHead>
                      <TableHead className="text-[10px] font-bold uppercase tracking-widest p-4">Judul Artikel</TableHead>
                      <TableHead className="text-[10px] font-bold uppercase tracking-widest p-4">Kategori</TableHead>
                      <TableHead className="text-[10px] font-bold uppercase tracking-widest p-4 text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {isArticlesLoading ? (
                      <TableRow><TableCell colSpan={4} className="p-12 text-center text-xs font-bold uppercase text-muted-foreground animate-pulse">Loading Articles...</TableCell></TableRow>
                    ) : filteredArticles.map(a => (
                      <TableRow key={a.id} className="hover:bg-secondary/10">
                        <TableCell className="p-4">
                          <div className="w-16 h-12 bg-gray-200 border overflow-hidden">
                            {a.image && <img src={a.image} alt="" className="w-full h-full object-cover" />}
                          </div>
                        </TableCell>
                        <TableCell className="p-4">
                          <div className="font-bold uppercase text-sm">{a.title}</div>
                          <div className="text-[9px] font-bold text-muted-foreground mt-1 uppercase">Type: {a.type} | Slug: /{a.id}</div>
                        </TableCell>
                        <TableCell className="p-4">
                          <Badge variant="outline" className="rounded-none border-2 font-black text-[8px] uppercase tracking-widest">{a.category}</Badge>
                        </TableCell>
                        <TableCell className="p-4 text-right space-x-2">
                          <Button variant="ghost" size="icon" asChild><Link href={`/admin/editor/${a.id}`}><Edit size={16}/></Link></Button>
                          <Button variant="ghost" size="icon" className="text-red-600" onClick={() => handleDeleteArticle(a.id)}><Trash2 size={16}/></Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </>
              ) : (
                <>
                  <TableHeader>
                    <TableRow className="bg-secondary/50">
                      <TableHead className="text-[10px] font-bold uppercase tracking-widest p-4">Nama Paket</TableHead>
                      <TableHead className="text-[10px] font-bold uppercase tracking-widest p-4">Harga</TableHead>
                      <TableHead className="text-[10px] font-bold uppercase tracking-widest p-4">Durasi</TableHead>
                      <TableHead className="text-[10px] font-bold uppercase tracking-widest p-4 text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {isPackagesLoading ? (
                      <TableRow><TableCell colSpan={4} className="p-12 text-center text-xs font-bold uppercase text-muted-foreground animate-pulse">Loading Packages...</TableCell></TableRow>
                    ) : filteredPackages.map(p => (
                      <TableRow key={p.id} className="hover:bg-secondary/10">
                        <TableCell className="p-4">
                          <div className="font-bold uppercase text-sm">{p.title}</div>
                          <div className="text-[9px] font-bold text-muted-foreground mt-1 uppercase">{p.description}</div>
                        </TableCell>
                        <TableCell className="p-4">
                          <Badge className="bg-primary text-white font-black text-[10px] uppercase rounded-none">{p.price}</Badge>
                        </TableCell>
                        <TableCell className="p-4">
                          <div className="flex items-center gap-2 text-xs font-bold">
                            <Clock size={14} className="text-primary" /> {p.time}
                          </div>
                        </TableCell>
                        <TableCell className="p-4 text-right space-x-2">
                          <Button variant="ghost" size="icon" asChild><Link href={`/admin/plan-your-trip/editor/${p.id}`}><Edit size={16}/></Link></Button>
                          <Button variant="ghost" size="icon" className="text-red-600" onClick={() => handleDeletePackage(p.id)}><Trash2 size={16}/></Button>
                        </TableCell>
                      </TableRow>
                    ))}
                    {!isPackagesLoading && filteredPackages.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={4} className="p-12 text-center text-[10px] font-bold uppercase text-muted-foreground">
                          Belum ada paket trip di database. Klik "Sync Static Packages" untuk memulai.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </>
              )}
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminDashboard;