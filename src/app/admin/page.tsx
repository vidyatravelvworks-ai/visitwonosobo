
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser, useFirestore, useCollection } from '@/firebase';
import { collection, doc, deleteDoc, updateDoc, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Plus, Edit, Trash2, LogOut, LayoutDashboard, FileText, Settings, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useMemoFirebase } from '@/firebase';

const AdminDashboard = () => {
  const { user, isUserLoading } = useUser();
  const db = useFirestore();
  const router = useRouter();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');

  // Protect the route
  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  const articlesQuery = useMemoFirebase(() => {
    if (!db) return null;
    return query(collection(db, 'articles'), orderBy('publicationDate', 'desc'));
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

  if (isUserLoading || !user) {
    return <div className="h-screen flex items-center justify-center font-black uppercase tracking-widest text-xs">Authenticating Admin...</div>;
  }

  const filteredArticles = articles?.filter(a => 
    a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.category.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div className="min-h-screen bg-secondary/20 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white flex flex-col p-8 fixed h-full">
        <div className="mb-12">
          <span className="text-xl font-black uppercase tracking-tighter text-primary">Admin Panel</span>
          <p className="text-[8px] font-bold text-white/50 uppercase tracking-[0.3em] mt-1">Visit Wonosobo</p>
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
          <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10 rounded-none h-12 gap-3 px-4 opacity-50">
            <Settings size={18} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Settings</span>
          </Button>
        </nav>

        <Button 
          variant="outline" 
          onClick={() => {}} 
          className="mt-auto border-white/20 text-white hover:bg-primary hover:text-white rounded-none h-12 gap-3"
        >
          <LogOut size={18} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Sign Out</span>
        </Button>
      </aside>

      {/* Main Content */}
      <main className="flex-grow ml-64 p-12">
        <header className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-4xl font-black uppercase tracking-tighter">Manage Articles</h1>
            <p className="text-sm font-medium text-muted-foreground mt-2">Update, delete, or create new stories for your website.</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-none h-14 px-8 gap-3 font-black uppercase tracking-widest text-[10px]">
            <Plus size={18} />
            New Article
          </Button>
        </header>

        <Card className="rounded-none border-2 border-black/5 shadow-xl">
          <CardHeader className="p-8 border-b">
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl font-black uppercase tracking-tight">Article Directory</CardTitle>
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search articles..." 
                  className="pl-10 rounded-none border-2 focus:border-primary h-10 font-bold text-xs"
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
                  <TableHead className="text-[10px] font-bold uppercase tracking-widest p-6">Article Title</TableHead>
                  <TableHead className="text-[10px] font-bold uppercase tracking-widest p-6">Category</TableHead>
                  <TableHead className="text-[10px] font-bold uppercase tracking-widest p-6">Status</TableHead>
                  <TableHead className="text-[10px] font-bold uppercase tracking-widest p-6 text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isArticlesLoading ? (
                  <TableRow>
                    <TableCell colSpan={4} className="p-12 text-center text-[10px] font-bold uppercase text-muted-foreground">Loading articles from cloud...</TableCell>
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
                        <span className="flex items-center gap-2 text-[10px] font-bold uppercase text-green-600">
                          <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                          Published
                        </span>
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
                    <TableCell colSpan={4} className="p-12 text-center text-[10px] font-bold uppercase text-muted-foreground">No articles found. Sync static data to start.</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Sync Tool Placeholder */}
        <div className="mt-8 p-6 bg-white border-2 border-dashed border-black/10 flex items-center justify-between">
          <div className="space-y-1">
            <h4 className="text-[10px] font-black uppercase tracking-widest">Data Synchronization</h4>
            <p className="text-xs text-muted-foreground">Click sync to migrate your static articles into Firestore for dynamic editing.</p>
          </div>
          <Button variant="outline" className="rounded-none font-bold uppercase text-[10px] tracking-widest h-10 border-black hover:bg-black hover:text-white transition-all">
            Sync Data
          </Button>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
