'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useUser, useFirestore, useCollection } from '@/firebase';
import { collection, doc, deleteDoc, query, orderBy, serverTimestamp, setDoc } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Plus, Edit, Trash2, LogOut, LayoutDashboard, FileText, RefreshCw, Search, PenTool, Image as ImageIcon, Map, BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useMemoFirebase } from '@/firebase';
import { getAuth, signOut } from 'firebase/auth';
import { cn } from '@/lib/utils';

const AdminDashboard = () => {
  const { user, isUserLoading } = useUser();
  const db = useFirestore();
  const auth = getAuth();
  const router = useRouter();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [isSyncing, setIsSyncing] = useState(false);
  const [filterType, setFilterType] = useState<'all' | 'destination' | 'story'>('all');

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  const articlesQuery = useMemoFirebase(() => {
    if (!db) return null;
    return query(collection(db, 'articles'), orderBy('updatedAt', 'desc'));
  }, [db]);

  const { data: articles, isLoading: isArticlesLoading } = useCollection(articlesQuery);

  const handleDelete = async (id: string) => {
    if (!window.confirm('Apakah Anda yakin ingin menghapus artikel ini?')) return;
    try {
      await deleteDoc(doc(db, 'articles', id));
      toast({ title: 'Berhasil', description: 'Artikel telah dihapus.' });
    } catch (error) {
      toast({ variant: 'destructive', title: 'Error', description: 'Gagal menghapus artikel.' });
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

  const handleSyncData = async () => {
    if (!db) return;
    setIsSyncing(true);
    try {
      const { articles: staticArticles } = await import('@/data/articles');
      
      let count = 0;
      for (const article of staticArticles) {
        const docRef = doc(db, 'articles', article.slug);
        await setDoc(docRef, {
          ...article,
          id: article.slug,
          updatedAt: serverTimestamp(),
        }, { merge: true });
        count++;
      }
      
      toast({ 
        title: 'Sinkronisasi Berhasil', 
        description: `${count} artikel telah dipindahkan ke database Firestore.` 
      });
    } catch (error: any) {
      toast({ 
        variant: 'destructive', 
        title: 'Sinkronisasi Gagal', 
        description: 'Pastikan Anda memiliki izin admin di database.' 
      });
    } finally {
      setIsSyncing(false);
    }
  };

  if (isUserLoading || !user) {
    return <div className="h-screen flex items-center justify-center font-black uppercase tracking-widest text-xs">Authenticating Admin...</div>;
  }

  const filteredArticles = articles?.filter(a => {
    const matchesSearch = a.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (a.category && a.category.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = filterType === 'all' ? true : a.type === filterType;
    return matchesSearch && matchesType;
  }) || [];

  return (
    <div className="min-h-screen bg-secondary/20 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white flex flex-col p-8 fixed h-full z-20">
        <div className="mb-12">
          <span className="text-xl font-black uppercase tracking-tighter text-primary">Admin Panel</span>
          <p className="text-[8px] font-bold text-white/50 uppercase tracking-[0.3em] mt-1">visitwonosobo</p>
        </div>
        
        <nav className="flex-grow space-y-2">
          <Button 
            variant="ghost" 
            onClick={() => setFilterType('all')}
            className={cn(
              "w-full justify-start text-white hover:bg-primary rounded-none h-12 gap-3 px-4 transition-all",
              filterType === 'all' && "bg-primary"
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
            onClick={() => setFilterType('destination')}
            className={cn(
              "w-full justify-start text-white hover:bg-primary rounded-none h-12 gap-3 px-4 transition-all",
              filterType === 'destination' && "bg-primary"
            )}
          >
            <Map size={18} />
            <span className="text-[10px] font-bold uppercase tracking-widest text-left leading-tight">See &amp; Do Articles</span>
          </Button>

          <Button 
            variant="ghost" 
            onClick={() => setFilterType('story')}
            className={cn(
              "w-full justify-start text-white hover:bg-primary rounded-none h-12 gap-3 px-4 transition-all",
              filterType === 'story' && "bg-primary"
            )}
          >
            <BookOpen size={18} />
            <span className="text-[10px] font-bold uppercase tracking-widest text-left leading-tight">Stories Articles</span>
          </Button>

          <div className="pt-6 pb-2">
            <p className="text-[8px] font-bold uppercase tracking-widest text-white/30 px-4 mb-2">Actions</p>
          </div>

          <Button variant="ghost" asChild className="w-full justify-start text-white hover:bg-primary rounded-none h-12 gap-3 px-4">
            <Link href="/admin/editor/new">
              <Plus size={18} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Create New Article</span>
            </Link>
          </Button>
        </nav>

        <div className="mt-auto pt-6 space-y-4">
          <div className="bg-white/5 p-4 space-y-2">
            <p className="text-[8px] font-bold uppercase tracking-widest text-white/40">Logged in as:</p>
            <p className="text-[10px] font-black truncate">{user.email}</p>
          </div>
          <Button 
            variant="outline" 
            onClick={handleSignOut} 
            className="w-full border-white/20 text-white hover:bg-primary hover:text-white rounded-none h-12 gap-3"
          >
            <LogOut size={18} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Sign Out</span>
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow ml-64 p-12">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-black uppercase tracking-tighter">
              {filterType === 'all' ? 'All Content' : filterType === 'destination' ? 'See &amp; Do Content' : 'Stories Content'}
            </h1>
            <p className="text-sm font-medium text-muted-foreground mt-2">Manage your articles and destinations in real-time.</p>
          </div>
          <div className="flex gap-4">
            <Button 
              onClick={handleSyncData}
              disabled={isSyncing}
              variant="outline"
              className="border-2 border-black rounded-none h-14 px-8 gap-3 font-black uppercase tracking-widest text-[10px]"
            >
              <RefreshCw size={18} className={isSyncing ? 'animate-spin' : ''} />
              {isSyncing ? 'Syncing...' : 'Sync Static Data'}
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-none h-14 px-8 gap-3 font-black uppercase tracking-widest text-[10px]">
              <Link href="/admin/editor/new">
                <Plus size={18} />
                New Article
              </Link>
            </Button>
          </div>
        </header>

        <Card className="rounded-none border-2 border-black/5 shadow-xl">
          <CardHeader className="p-8 border-b">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <CardTitle className="text-xl font-black uppercase tracking-tight">Content Directory</CardTitle>
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input 
                  placeholder="Search articles..." 
                  className="pl-10 w-full rounded-none border-2 border-black/10 focus:border-primary h-10 font-bold text-xs outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary/50 hover:bg-secondary/50">
                  <TableHead className="text-[10px] font-bold uppercase tracking-widest p-6 w-24">Preview</TableHead>
                  <TableHead className="text-[10px] font-bold uppercase tracking-widest p-6">Judul Artikel</TableHead>
                  <TableHead className="text-[10px] font-bold uppercase tracking-widest p-6">Kategori</TableHead>
                  <TableHead className="text-[10px] font-bold uppercase tracking-widest p-6 text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isArticlesLoading ? (
                  <TableRow>
                    <TableCell colSpan={4} className="p-12 text-center text-[10px] font-bold uppercase text-muted-foreground">Fetching data...</TableCell>
                  </TableRow>
                ) : filteredArticles.length > 0 ? (
                  filteredArticles.map((article) => (
                    <TableRow key={article.id} className="hover:bg-secondary/10 group">
                      <TableCell className="p-6">
                        <div className="w-16 h-12 relative bg-gray-200 border border-black/5 overflow-hidden">
                          {article.image ? (
                            <img 
                              src={article.image} 
                              alt={article.title} 
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="flex items-center justify-center h-full text-muted-foreground">
                              <ImageIcon size={14} />
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="p-6">
                        <div className="font-bold uppercase tracking-tight text-sm">
                          {article.title}
                        </div>
                        <div className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest mt-1">
                          Type: <span className="text-primary">{article.type}</span> | Slug: /{article.id}
                        </div>
                      </TableCell>
                      <TableCell className="p-6">
                        <Badge variant="outline" className="rounded-none border-2 border-black/20 font-black text-[8px] uppercase tracking-widest">
                          {article.category}
                        </Badge>
                      </TableCell>
                      <TableCell className="p-6 text-right space-x-2">
                        <Button variant="ghost" size="icon" className="rounded-none hover:bg-black hover:text-white" asChild title="Edit Artikel">
                          <Link href={`/admin/editor/${article.id}`}>
                            <Edit size={16} />
                          </Link>
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="rounded-none hover:bg-red-50 text-red-600"
                          onClick={() => handleDelete(article.id)}
                          title="Hapus Artikel"
                        >
                          <Trash2 size={16} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} className="p-12 text-center text-[10px] font-bold uppercase text-muted-foreground">
                      No {filterType !== 'all' ? filterType : ''} content found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminDashboard;