'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection, doc, deleteDoc, query, orderBy } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Plus, Edit, Trash2, LogOut, Map, BookOpen, Loader2 } from 'lucide-react';
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
  const [currentView, setCurrentView] = useState<'see-and-do' | 'stories'>('see-and-do');

  useEffect(() => {
    if (!isUserLoading && !user) router.push('/login');
  }, [user, isUserLoading, router]);

  const articlesQ = useMemoFirebase(() => db ? query(collection(db, 'articles'), orderBy('updatedAt', 'desc')) : null, [db]);
  const { data: allArticles, isLoading: isArticlesLoading } = useCollection(articlesQ);

  const handleDelete = async (e: React.MouseEvent, id: string) => {
    // Stop propagation and prevent default to ensure the click is handled exclusively by this handler
    e.preventDefault();
    e.stopPropagation();
    
    if (!db) return;
    
    // Memberikan prioritas tertinggi pada interaksi konfirmasi
    const confirmed = window.prompt(`Ketik "hapus" untuk mengonfirmasi penghapusan:`);
    if (confirmed === 'hapus') {
      try {
        await deleteDoc(doc(db, 'articles', id));
        toast({ title: 'Berhasil Dihapus', description: 'Artikel telah dihapus secara permanen.' });
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
        </nav>
        <Button variant="destructive" onClick={() => signOut(auth)} className="mt-auto w-full rounded-none h-12 gap-3 font-black text-[10px] uppercase">
          <LogOut size={16} /> Sign Out
        </Button>
      </aside>

      <main className="flex-grow ml-64 p-12">
        <header className="flex justify-between items-end mb-12">
          <h1 className="text-4xl font-black uppercase tracking-tighter">{currentView.replace('-', ' ')}</h1>
          <Button asChild className="bg-primary text-white rounded-none h-14 px-8 font-black uppercase text-[10px] tracking-widest">
            <Link href={`/admin/editor/new?type=${currentView === 'see-and-do' ? 'destination' : 'story'}`}>
              <Plus size={18} className="mr-2" /> New Article
            </Link>
          </Button>
        </header>

        <Card className="rounded-none border-2 shadow-xl overflow-hidden bg-white">
          {isArticlesLoading ? <div className="p-20 flex justify-center"><Loader2 className="animate-spin text-primary h-10 w-10" /></div> : (
            <Table>
              <TableHeader className="bg-secondary/50">
                <TableRow>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest py-4">Article Preview</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest">Category</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredArticles.length === 0 ? (
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
                          onClick={(e) => handleDelete(e, a.id)}
                        >
                          <Trash2 size={14}/>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </Card>
      </main>
    </div>
  );
};

export default AdminDashboard;
