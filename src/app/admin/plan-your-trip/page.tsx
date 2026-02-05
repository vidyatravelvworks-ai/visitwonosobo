'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useUser, useFirestore, useCollection } from '@/firebase';
import { collection, deleteDoc, doc, query, orderBy } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Plus, Edit, Trash2, ArrowLeft, MapPin, Clock, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useMemoFirebase } from '@/firebase';

const ManageTripPackagesPage = () => {
  const { user, isUserLoading } = useUser();
  const db = useFirestore();
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  const packagesQuery = useMemoFirebase(() => {
    if (!db) return null;
    return query(collection(db, 'trip_packages'), orderBy('title', 'asc'));
  }, [db]);

  const { data: packages, isLoading } = useCollection(packagesQuery);

  const handleDelete = async (id: string) => {
    if (!db || !window.confirm('Apakah Anda yakin ingin menghapus paket ini?')) return;
    try {
      await deleteDoc(doc(db, 'trip_packages', id));
      toast({ title: 'Berhasil', description: 'Paket trip telah dihapus.' });
    } catch (error) {
      toast({ variant: 'destructive', title: 'Error', description: 'Gagal menghapus paket.' });
    }
  };

  if (isUserLoading || !user) {
    return <div className="h-screen flex items-center justify-center font-black uppercase tracking-widest text-xs">Authenticating...</div>;
  }

  return (
    <div className="min-h-screen bg-secondary/20 p-8 md:p-12">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-4">
            <Button variant="ghost" asChild className="rounded-none hover:bg-transparent pl-0 h-auto group">
              <Link href="/admin" className="flex items-center gap-2 font-black uppercase tracking-widest text-[10px]">
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Kembali ke Dashboard
              </Link>
            </Button>
            <h1 className="text-4xl font-black uppercase tracking-tighter">Adjust Paket Trip</h1>
            <p className="text-sm font-medium text-muted-foreground">Sesuaikan penawaran paket wisata yang tampil di halaman Plan Your Trip.</p>
          </div>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-none h-14 px-10 gap-3 font-black uppercase tracking-widest text-[10px]">
            <Link href="/admin/plan-your-trip/editor/new">
              <Plus size={18} />
              Tambah Paket Baru
            </Link>
          </Button>
        </div>

        <Card className="rounded-none border-2 border-black/5 shadow-xl bg-white">
          <CardHeader className="p-8 border-b">
            <CardTitle className="text-xl font-black uppercase tracking-tight flex items-center gap-3">
              <MapPin className="text-primary" size={24} />
              Daftar Paket Aktif
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary/50">
                  <TableHead className="text-[10px] font-bold uppercase tracking-widest p-6">Nama Paket</TableHead>
                  <TableHead className="text-[10px] font-bold uppercase tracking-widest p-6">Waktu & Durasi</TableHead>
                  <TableHead className="text-[10px] font-bold uppercase tracking-widest p-6">Harga</TableHead>
                  <TableHead className="text-[10px] font-bold uppercase tracking-widest p-6">Destinasi</TableHead>
                  <TableHead className="text-[10px] font-bold uppercase tracking-widest p-6 text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  <TableRow>
                    <TableCell colSpan={5} className="p-12 text-center text-[10px] font-bold uppercase text-muted-foreground">Memuat paket...</TableCell>
                  </TableRow>
                ) : packages && packages.length > 0 ? (
                  packages.map((pkg) => (
                    <TableRow key={pkg.id} className="hover:bg-secondary/10 group">
                      <TableCell className="p-6">
                        <div className="font-bold uppercase tracking-tight text-sm">{pkg.title}</div>
                        <div className="text-[9px] font-bold text-muted-foreground mt-1 uppercase">{pkg.description}</div>
                      </TableCell>
                      <TableCell className="p-6">
                        <div className="flex items-center gap-2 text-xs font-bold">
                          <Clock size={14} className="text-primary" />
                          {pkg.time}
                        </div>
                      </TableCell>
                      <TableCell className="p-6">
                        <Badge className="rounded-none bg-primary text-white font-black px-3 py-1 text-[10px]">
                          {pkg.price}
                        </Badge>
                      </TableCell>
                      <TableCell className="p-6">
                        <div className="text-[9px] font-bold text-muted-foreground uppercase leading-tight">
                          {pkg.spots?.slice(0, 3).join(', ')}
                          {pkg.spots?.length > 3 && ' ...'}
                        </div>
                      </TableCell>
                      <TableCell className="p-6 text-right space-x-2">
                        <Button variant="ghost" size="icon" className="rounded-none hover:bg-black hover:text-white" asChild>
                          <Link href={`/admin/plan-your-trip/editor/${pkg.id}`}>
                            <Edit size={16} />
                          </Link>
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="rounded-none hover:bg-red-50 text-red-600"
                          onClick={() => handleDelete(pkg.id)}
                        >
                          <Trash2 size={16} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="p-12 text-center text-[10px] font-bold uppercase text-muted-foreground">
                      Belum ada paket trip di database cloud. Gunakan data statis atau tambah baru.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ManageTripPackagesPage;