
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth, useFirestore, useDoc, useMemoFirebase } from '@/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { ShieldCheck, AlertCircle, Eye, EyeOff, ExternalLink, ArrowLeft } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const LoginPage = () => {
  const [email, setEmail] = useState('admin@visitwonosobo.tour-travel.id');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const auth = useAuth();
  const router = useRouter();
  
  const db = useFirestore();
  const configRef = useMemoFirebase(() => db ? doc(db, 'config', 'website') : null, [db]);
  const { data: config } = useDoc(configRef);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/admin');
    } catch (err: any) {
      console.error(err.code);
      if (err.code === 'auth/user-not-found' || err.code === 'auth/invalid-credential') {
        setError('Akun tidak ditemukan atau password salah. Pastikan Anda sudah membuat User ini di Firebase Console dan mendaftarkan UID-nya di koleksi roles_admin.');
      } else {
        setError('Terjadi kesalahan akses. Silakan periksa koneksi atau kredensial Anda.');
      }
      setIsLoading(false);
    }
  };

  const dynamicBg = config?.loginBackground;
  const placeholderBg = PlaceHolderImages.find(img => img.id === 'mountain-prau')?.imageUrl;
  const bgUrl = (dynamicBg && dynamicBg.trim() !== '') ? dynamicBg : placeholderBg;

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {bgUrl && (
          <Image
            src={bgUrl}
            alt="Wonosobo Mountains"
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 w-full max-w-md space-y-6">
        <div className="flex justify-start">
          <Button variant="ghost" asChild className="text-white hover:text-primary hover:bg-white/10 rounded-none gap-2 font-black uppercase tracking-widest text-[10px] pl-0">
            <Link href="/">
              <ArrowLeft size={16} />
              Kembali ke Beranda
            </Link>
          </Button>
        </div>

        <Card className="border-2 border-white/10 rounded-none shadow-2xl bg-white/95 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-8 duration-700">
          <CardHeader className="space-y-2 text-center pb-8 border-b">
            <div className="mx-auto bg-primary w-12 h-12 flex items-center justify-center mb-2">
              <ShieldCheck className="text-white h-6 w-6" />
            </div>
            <CardTitle className="text-3xl font-black uppercase tracking-tighter">Admin Access</CardTitle>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Wonosobo Explorer Management</p>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-6 pt-8">
              {error && (
                <Alert variant="destructive" className="rounded-none border-2 bg-red-50 text-red-900">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription className="text-[10px] font-bold uppercase tracking-wide leading-relaxed">
                    {error}
                  </AlertDescription>
                  <a 
                    href="https://console.firebase.google.com/" 
                    target="_blank" 
                    className="mt-2 flex items-center gap-1 text-[8px] underline font-black"
                  >
                    Buka Firebase Console <ExternalLink size={8} />
                  </a>
                </Alert>
              )}
              <div className="space-y-2">
                <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Email Address</Label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-none border-2 border-black/10 focus:border-primary h-12 font-bold"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Password</Label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="rounded-none border-2 border-black/10 focus:border-primary h-12 font-bold pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pb-8">
              <Button 
                type="submit" 
                className="w-full bg-black hover:bg-primary text-white h-14 font-black uppercase tracking-[0.2em] rounded-none transition-all shadow-lg"
                disabled={isLoading}
              >
                {isLoading ? 'Authenticating...' : 'Enter Dashboard'}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
