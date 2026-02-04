
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { ShieldCheck, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const LoginPage = () => {
  const [email, setEmail] = useState('admin@visitwonosobo.tour-travel.id');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const auth = useAuth();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/admin');
    } catch (err: any) {
      setError('Kredensial tidak valid. Silakan hubungi pengembang jika masalah berlanjut.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/30 px-6">
      <Card className="w-full max-w-md border-2 border-black/5 rounded-none shadow-2xl">
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
              <Alert variant="destructive" className="rounded-none border-2">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription className="text-xs font-bold uppercase tracking-wide">
                  {error}
                </AlertDescription>
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
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-none border-2 border-black/10 focus:border-primary h-12 font-bold"
                required
              />
            </div>
          </CardContent>
          <CardFooter className="pb-8">
            <Button 
              type="submit" 
              className="w-full bg-black hover:bg-primary text-white h-14 font-black uppercase tracking-[0.2em] rounded-none transition-all"
              disabled={isLoading}
            >
              {isLoading ? 'Authenticating...' : 'Enter Dashboard'}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default LoginPage;
