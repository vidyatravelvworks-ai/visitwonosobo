
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useUser, useFirestore, useDoc } from '@/firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ArrowLeft, Save, MapPin, Clock, DollarSign, ListChecks, CheckCircle2, XCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useMemoFirebase } from '@/firebase';
import Link from 'next/link';

const TripPackageEditorPage = () => {
  const params = useParams();
  const id = params.id as string;
  const isNew = id === 'new';
  const { user, isUserLoading } = useUser();
  const db = useFirestore();
  const router = useRouter();
  const { toast } = useToast();
  const [isSaving, setIsSaving] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    time: '',
    price: '',
    description: '',
    spotsRaw: '',
    includesRaw: '',
    excludesRaw: '',
    color: 'bg-primary/5',
    borderColor: 'border-primary/20'
  });

  const docRef = useMemoFirebase(() => {
    if (!db || isNew) return null;
    return doc(db, 'trip_packages', id);
  }, [db, id, isNew]);

  const { data: pkg, isLoading } = useDoc(docRef);

  useEffect(() => {
    if (pkg) {
      setFormData({
        title: pkg.title || '',
        time: pkg.time || '',
        price: pkg.price || '',
        description: pkg.description || '',
        spotsRaw: (pkg.spots || []).join('\n'),
        includesRaw: (pkg.includes || []).join('\n'),
        excludesRaw: (pkg.excludes || []).join('\n'),
        color: pkg.color || 'bg-primary/5',
        borderColor: pkg.borderColor || 'border-primary/20'
      });
    }
  }, [pkg]);

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!db) return;

    if (!formData.title || !formData.price || !formData.time) {
      toast({ variant: 'destructive', title: 'Error', description: 'Judul, Harga, dan Waktu wajib diisi.' });
      return;
    }

    setIsSaving(true);
    try {
      const packageId = isNew ? formData.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') : id;
      const finalDocRef = doc(db, 'trip_packages', packageId);
      
      const spots = formData.spotsRaw.split('\n').map(s => s.trim()).filter(s => s !== '');
      const includes = formData.includesRaw.split('\n').map(s => s.trim()).filter(s => s !== '');
      const excludes = formData.excludesRaw.split('\n').map(s => s.trim()).filter(s => s !== '');

      await setDoc(finalDocRef, {
        title: formData.title,
        time: formData.time,
        price: formData.price,
        description: formData.description,
        spots,
        includes,
        excludes,
        color: formData.color,
        borderColor: formData.borderColor,
        id: packageId,
        updatedAt: serverTimestamp(),
      }, { merge: true });

      toast({ title: 'Berhasil', description: 'Paket trip telah diperbarui.' });
      router.push('/admin');
    } catch (error) {
      console.error(error);
      toast({ variant: 'destructive', title: 'Error', description: 'Gagal menyimpan paket.' });
    } finally {
      setIsSaving(false);
    }
  };

  if (isUserLoading || (isLoading && !isNew)) {
    return <div className="h-screen flex items-center justify-center font-black uppercase tracking-widest text-xs">Loading Editor...</div>;
  }

  return (
    <div className="min-h-screen bg-secondary/20 p-8 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <Button variant="ghost" asChild className="rounded-none hover:bg-transparent pl-0 h-auto group">
            <Link href="/admin" className="flex items-center gap-2 font-black uppercase tracking-widest text-[10px]">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Kembali ke Dashboard
            </Link>
          </Button>
          <Button 
            onClick={handleSave} 
            disabled={isSaving}
            className="bg-primary hover:bg-primary/90 text-white rounded-none h-14 px-10 gap-3 font-black uppercase tracking-widest text-[10px]"
          >
            <Save size={18} />
            {isSaving ? 'Menyimpan...' : 'Simpan Perubahan'}
          </Button>
        </div>

        <Card className="rounded-none border-2 border-black/5 shadow-xl bg-white">
          <CardHeader className="border-b p-8">
            <CardTitle className="text-xl font-black uppercase tracking-tight flex items-center gap-3">
              <MapPin className="text-primary" size={20} />
              Konfigurasi Paket Trip
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Judul Paket</Label>
                <Input 
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="rounded-none border-2 border-black/10 h-12 font-bold"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Harga</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    className="pl-10 rounded-none border-2 border-black/10 h-12 font-bold text-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Waktu & Durasi</Label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    className="pl-10 rounded-none border-2 border-black/10 h-12 font-bold"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Deskripsi</Label>
                <Input 
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="rounded-none border-2 border-black/10 h-12 font-bold"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                  <ListChecks size={14} /> Destinasi (Newline)
                </Label>
                <Textarea 
                  value={formData.spotsRaw}
                  onChange={(e) => setFormData({...formData, spotsRaw: e.target.value})}
                  className="rounded-none border-2 min-h-[150px] font-bold text-xs"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-bold uppercase tracking-widest text-green-600 flex items-center gap-2">
                  <CheckCircle2 size={14} /> Include (Newline)
                </Label>
                <Textarea 
                  value={formData.includesRaw}
                  onChange={(e) => setFormData({...formData, includesRaw: e.target.value})}
                  className="rounded-none border-2 min-h-[150px] font-bold text-xs"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-bold uppercase tracking-widest text-red-600 flex items-center gap-2">
                  <XCircle size={14} /> Exclude (Newline)
                </Label>
                <Textarea 
                  value={formData.excludesRaw}
                  onChange={(e) => setFormData({...formData, excludesRaw: e.target.value})}
                  className="rounded-none border-2 min-h-[150px] font-bold text-xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">BG Color Class</Label>
                <Input value={formData.color} onChange={(e) => setFormData({...formData, color: e.target.value})} className="rounded-none border-2 h-10 font-mono text-xs" />
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Border Color Class</Label>
                <Input value={formData.borderColor} onChange={(e) => setFormData({...formData, borderColor: e.target.value})} className="rounded-none border-2 h-10 font-mono text-xs" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TripPackageEditorPage;
