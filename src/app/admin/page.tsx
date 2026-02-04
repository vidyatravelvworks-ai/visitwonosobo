'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser, useFirestore, useCollection } from '@/firebase';
import { collection, doc, deleteDoc, setDoc, query, orderBy, serverTimestamp } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Plus, Edit, Trash2, LogOut, LayoutDashboard, FileText, Settings, Search, RefreshCw, AlertCircle, ExternalLink, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useMemoFirebase } from '@/firebase';
import { getAuth, signOut } from 'firebase/auth';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const AdminDashboard = () => {
  const { user, isUserLoading } = useUser();
  const db = useFirestore();
  const auth = getAuth();
  const router = useRouter();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [isSyncing, setIsSyncing] = useState(false);
  const [showPermissionHint, setShowPermissionHint] = useState(false);

  // Master Admin UID
  const MASTER_ADMIN_UID = "AsSq4g4LwpV7ZmUpplRoCCzP5j33";

  // Protect the route
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
      toast({ variant: 'destructive', title: 'Error', description: 'Gagal menghapus artikel. Akses Ditolak.' });
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
      setShowPermissionHint(false);
    } catch (error: any) {
      console.error(error);
      setShowPermissionHint(true);
      toast({ 
        variant: 'destructive', 
        title: 'Sinkronisasi Gagal', 
        description: 'Akses ditolak oleh database (Permission Denied).' 
      });
    } finally {
      setIsSyncing(false);
    }
  };

  if (isUserLoading || !user) {
    return <div className="h-screen flex items-center justify-center font-black uppercase tracking-widest text-xs">Authenticating Admin...</div>;
  }

  const isMasterAdmin = user.uid === MASTER_ADMIN_UID;

  const filteredArticles = articles?.filter(a => 
    a.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (a.category && a.category.toLowerCase().includes(searchTerm.toLowerCase()))
  ) || [];

  return (
    <div className="min-h-screen bg-secondary/20 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white flex flex-col p-8 fixed h-full">
        <div className="mb-12">
          <span className="text-xl font-black uppercase tracking-tighter text-primary">Admin Panel</span>
          <p className="text-[8px] font-bold text-white/50 uppercase tracking-[0.3em] mt-1">visitwonosobo</p>
        </div>
        
        <nav className="flex-grow space-y-4">
          <Button variant="ghost" className="w-full justify-start text-white hover:bg-primary rounded-none h-12 gap-3 px-4">
            <LayoutDashboard size={18} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Dashboard</span>
          </Button>
          <Button variant="ghost" className="w-full justify-start text-white hover:bg-primary rounded-none h-12 gap-3 px-4 bg-primary">
            <FileText size={18} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Articles</span>
          </Button>
        </nav>

        <div className="mt-auto pt-6 space-y-4">
          <div className="bg-white/5 p-4 space-y-2">
            <p className="text-[8px] font-bold uppercase tracking-widest text-white/40">Logged in as:</p>
            <p className="text-[10px] font-black truncate">{user.email}</p>
            {isMasterAdmin && (
              <Badge className="bg-primary text-white text-[8px] h-4 rounded-none">MASTER ADMIN</Badge>
            )}
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
        <header className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-4xl font-black uppercase tracking-tighter">Manage Content</h1>
            <p className="text-sm font-medium text-muted-foreground mt-2">Adjust your website articles, stories, and destinations in real-time.</p>
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
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-none h-14 px-8 gap-3 font-black uppercase tracking-widest text-[10px]">
              <Plus size={18} />
              New Article
            </Button>
          </div>
        </header>

        {isMasterAdmin && !showPermissionHint && (
           <Alert className="mb-8 rounded-none border-2 border-primary bg-primary/5">
            <CheckCircle className="h-4 w-4 text-primary" />
            <AlertTitle className="font-black uppercase text-xs text-primary">Master Admin Mode Active</AlertTitle>
            <AlertDescription className="text-xs font-medium">
              UID Anda telah dikonfigurasi sebagai Master Admin melalui Security Rules. Anda memiliki akses penuh ke database.
            </AlertDescription>
          </Alert>
        )}

        {showPermissionHint && !isMasterAdmin && (
          <Alert variant="destructive" className="mb-8 rounded-none border-2 bg-red-50">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle className="font-black uppercase text-xs">Akses Database Ditolak</AlertTitle>
            <AlertDescription className="text-xs font-medium space-y-4">
              <p>Database menolak sinkronisasi karena UID Anda belum terdaftar sebagai Admin.</p>
              <div className="bg-white p-4 border-2 border-red-200">
                <p className="font-bold mb-2">Langkah Perbaikan:</p>
                <ol className="list-decimal pl-4 space-y-1">
                  <li>Copy UID Anda: <code className="bg-gray-100 px-2 py-1 font-black text-red-600">{user?.uid}</code></li>
                  <li>Buka Firebase Console</li>
                  <li>Buat koleksi <code className="font-black">roles_admin</code></li>
                  <li>Tambah dokumen dengan <strong>ID Dokumen = UID di atas</strong></li>
                </ol>
              </div>
            </AlertDescription>
          </Alert>
        )}

        <Card className="rounded-none border-2 border-black/5 shadow-xl">
          <CardHeader className="p-8 border-b">
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl font-black uppercase tracking-tight">Content Directory</CardTitle>
              <div className="relative w-64">
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
                  <TableHead className="text-[10px] font-bold uppercase tracking-widest p-6">Title</TableHead>
                  <TableHead className="text-[10px] font-bold uppercase tracking-widest p-6">Category</TableHead>
                  <TableHead className="text-[10px] font-bold uppercase tracking-widest p-6">Type</TableHead>
                  <TableHead className="text-[10px] font-bold uppercase tracking-widest p-6 text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isArticlesLoading ? (
                  <TableRow>
                    <TableCell colSpan={4} className="p-12 text-center text-[10px] font-bold uppercase text-muted-foreground">Fetching data from cloud...</TableCell>
                  </TableRow>
                ) : filteredArticles.length > 0 ? (
                  filteredArticles.map((article) => (
                    <TableRow key={article.id} className="hover:bg-secondary/10">
                      <TableCell className="p-6 font-bold uppercase tracking-tight text-sm">
                        {article.title}
                      </TableCell>
                      <TableCell className="p-6">
                        <Badge variant="outline" className="rounded-none border-2 font-black text-[8px] uppercase tracking-widest">
                          {article.category}
                        </Badge>
                      </TableCell>
                      <TableCell className="p-6">
                         <Badge className="rounded-none bg-black text-white font-black text-[8px] uppercase tracking-widest">
                          {article.type}
                        </Badge>
                      </TableCell>
                      <TableCell className="p-6 text-right space-x-2">
                        <Button variant="ghost" size="icon" className="rounded-none hover:bg-blue-50 text-blue-600">
                          <Edit size={16} />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="rounded-none hover:bg-red-50 text-red-600"
                          onClick={() => handleDelete(article.id)}
                        >
                          <Trash2 size={16} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} className="p-12 text-center text-[10px] font-bold uppercase text-muted-foreground">
                      No dynamic content found. Click "Sync Static Data" to start.
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