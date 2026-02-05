
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Halaman ini sekarang redundan karena fungsinya telah dipindahkan ke Dashboard Utama.
 * Melakukan redirect otomatis ke /admin untuk menjaga konsistensi UI.
 */
export default function RedirectToAdmin() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/admin');
  }, [router]);

  return (
    <div className="h-screen flex items-center justify-center font-black uppercase tracking-widest text-xs text-muted-foreground animate-pulse">
      Redirecting to Unified Dashboard...
    </div>
  );
}
