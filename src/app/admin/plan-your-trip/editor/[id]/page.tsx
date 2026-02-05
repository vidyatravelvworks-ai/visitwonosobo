'use client';

import React, { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { useUser, useFirestore, useDoc, useMemoFirebase } from '@/firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ArrowLeft, Save, MapPin, Clock, DollarSign, ListChecks, CheckCircle2, XCircle, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ id: string }>;
}

const TripPackageEditorPage = ({ params }: PageProps) => {
  const { id } = use(params);
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

  const docRef = useMemoFirebase(() => db && !isNew ? doc(db, 'trip_packages', id) : null, [db, id, isNew]);
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
    if (!isUserLoading && !user) router.push('/login');
  }, [user, isUserLoading, router]);

  const handleSave = async () => {
    if (!db) return;
    setIsSaving(true);
    try {
      const packageId = isNew ? formData.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') : id;
      const spots = formData.spotsRaw.split('\n').map(s => s.trim()).filter(s => s !== '');
      const includes = formData.includesRaw.split('\n').map(s => s.trim()).filter(s => s !== '');
      const excludes = formData.excludesRaw.split('\n').map(s => s.trim()).filter(s => s !== '');

      await setDoc(doc(db, 'trip_packages', packageId), {
        ...formData,
        spots, includes, excludes,
        id: packageId,
        updatedAt: serverTimestamp(),
      }, { merge: true });

      toast({ title: 'Saved Successfully' });
      router.push('/admin');
    } catch (error) {
      toast({ variant: 'destructive', title: 'Save Failed' });
    } finally {
      setIsSaving(false);
    }
  };

  if (isUserLoading || (isLoading && !isNew)) return <div className="h-screen flex items-center justify-center font-black uppercase text-xs">Loading...</div>;

  return (
    <div className="min-h-screen bg-secondary/10 flex flex-col pb-20">
      <div className="sticky top-0 z-50 bg-white border-b px-8 py-3 flex justify-between items-center shadow-sm">
        <Button variant="ghost" asChild className="text-[10px] font-black uppercase tracking-widest px-0">
          <Link href="/admin"><ArrowLeft size={14} className="mr-2" /> Dashboard</Link>
        </Button>
        <Button onClick={handleSave} disabled={isSaving} className="bg-primary text-white rounded-none font-black uppercase text-[10px] h-10 px-8 hover:bg-black transition-colors">
          {isSaving ? 'Saving...' : 'Publish Package'}
        </Button>
      </div>

      <div className="max-w-5xl mx-auto w-full p-6 space-y-6">
        <Card className="rounded-none border-2 shadow-sm bg-white">
          <CardHeader className="p-6 border-b"><CardTitle className="text-[10px] font-black uppercase tracking-widest">General Information</CardTitle></CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-1">
              <Label className="text-[10px] font-black uppercase">Package Title</Label>
              <Input value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="rounded-none h-12 text-lg font-black uppercase border-2" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label className="text-[10px] font-black uppercase">Price Tag</Label>
                <Input value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} className="rounded-none h-10 text-xs" />
              </div>
              <div className="space-y-1">
                <Label className="text-[10px] font-black uppercase">Duration/Time</Label>
                <Input value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})} className="rounded-none h-10 text-xs" />
              </div>
            </div>
            <div className="space-y-1">
              <Label className="text-[10px] font-black uppercase">Short Description</Label>
              <Input value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="rounded-none h-10 text-xs" />
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="rounded-none border-2 shadow-sm bg-white">
            <CardHeader className="p-4 border-b bg-secondary/10"><CardTitle className="text-[10px] font-black uppercase">Destinations</CardTitle></CardHeader>
            <CardContent className="p-4"><Textarea value={formData.spotsRaw} onChange={e => setFormData({...formData, spotsRaw: e.target.value})} className="min-h-[200px] text-xs rounded-none border-2" placeholder="One per line..." /></CardContent>
          </Card>
          <Card className="rounded-none border-2 shadow-sm bg-white">
            <CardHeader className="p-4 border-b bg-green-50"><CardTitle className="text-[10px] font-black uppercase text-green-700">Included</CardTitle></CardHeader>
            <CardContent className="p-4"><Textarea value={formData.includesRaw} onChange={e => setFormData({...formData, includesRaw: e.target.value})} className="min-h-[200px] text-xs rounded-none border-2" placeholder="One per line..." /></CardContent>
          </Card>
          <Card className="rounded-none border-2 shadow-sm bg-white">
            <CardHeader className="p-4 border-b bg-red-50"><CardTitle className="text-[10px] font-black uppercase text-red-700">Excluded</CardTitle></CardHeader>
            <CardContent className="p-4"><Textarea value={formData.excludesRaw} onChange={e => setFormData({...formData, excludesRaw: e.target.value})} className="min-h-[200px] text-xs rounded-none border-2" placeholder="One per line..." /></CardContent>
          </Card>
        </div>

        <Card className="rounded-none border-2 shadow-sm bg-white">
          <CardHeader className="p-4 border-b"><CardTitle className="text-[10px] font-black uppercase">Design Overrides</CardTitle></CardHeader>
          <CardContent className="p-4 grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label className="text-[10px] font-black uppercase">Background Class</Label>
              <Input value={formData.color} onChange={e => setFormData({...formData, color: e.target.value})} className="h-8 text-xs font-mono rounded-none" />
            </div>
            <div className="space-y-1">
              <Label className="text-[10px] font-black uppercase">Border Class</Label>
              <Input value={formData.borderColor} onChange={e => setFormData({...formData, borderColor: e.target.value})} className="h-8 text-xs font-mono rounded-none" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TripPackageEditorPage;
