
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
import { ArrowLeft, Save, MapPin, Clock, DollarSign, ListChecks } from 'lucide-react';
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
    spotsRaw: '', // Textarea input for spots, newline separated
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

      await setDoc(finalDocRef, {
        title: formData.title,
        time: formData.time,
        price: formData.price,
        description: formData.description,
        spots: spots,
        color: formData.color,
        borderColor: formData.borderColor,
        id: packageId,
        updatedAt: serverTimestamp(),
      }, { merge: true });

      toast({ title: 'Berhasil', description: 'Paket trip telah diperbarui.' });
      router.push('/admin'); // Kembali ke dashboard utama
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
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="E.g. Paket Keliling Zona 1"
                    className="pl-10 rounded-none border-2 border-black/10 focus:border-primary h-12 font-bold"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Harga (Tampil)</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    placeholder="E.g. Rp 650.000"
                    className="pl-10 rounded-none border-2 border-black/10 focus:border-primary h-12 font-bold text-primary"
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
                    placeholder="E.g. 05:00 - 15:00"
                    className="pl-10 rounded-none border-2 border-black/10 focus:border-primary h-12 font-bold"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Deskripsi Singkat</Label>
                <Input 
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="E.g. Mobil, BBM, Driver as Guide"
                  className="rounded-none border-2 border-black/10 focus:border-primary h-12 font-bold"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                <ListChecks size={14} />
                Daftar Destinasi (Satu per baris)
              </Label>
              <Textarea 
                value={formData.spotsRaw}
                onChange={(e) => setFormData({...formData, spotsRaw: e.target.value})}
                placeholder="Pintu Langit&#10;Candi Arjuna&#10;Kawah Sikidang"
                className="rounded-none border-2 border-black/10 focus:border-primary min-h-[200px] font-bold text-xs leading-loose"
              />
              <p className="text-[8px] font-bold text-muted-foreground uppercase tracking-tight mt-2">Tekan Enter untuk menambah destinasi baru ke dalam daftar.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Background Color (Tailwind Class)</Label>
                <Input 
                  value={formData.color}
                  onChange={(e) => setFormData({...formData, color: e.target.value})}
                  placeholder="bg-primary/5"
                  className="rounded-none border-2 border-black/10 focus:border-primary h-10 font-mono text-xs"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Border Color (Tailwind Class)</Label>
                <Input 
                  value={formData.borderColor}
                  onChange={(e) => setFormData({...formData, borderColor: e.target.value})}
                  placeholder="border-primary/20"
                  className="rounded-none border-2 border-black/10 focus:border-primary h-10 font-mono text-xs"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TripPackageEditorPage;
