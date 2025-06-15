'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Success() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');

  useEffect(() => {
    if (sessionId) {
      // Burada sessionId'yi kullanarak ödeme durumunu kontrol edebilirsiniz
      // Örneğin, bir API endpoint'i ile ödeme durumunu doğrulayabilirsiniz
      setStatus('success');
    } else {
      setStatus('error');
    }
  }, [sessionId]);

  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          {status === 'loading' && (
            <div className="text-2xl text-[#E0E0E0]">Ödeme durumu kontrol ediliyor...</div>
          )}

          {status === 'success' && (
            <>
              <div className="text-6xl mb-6">🎉</div>
              <h1 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#00C2CB] to-[#6EE7B7] bg-clip-text text-transparent">
                  Ödeme Başarılı!
                </span>
              </h1>
              <p className="text-xl text-[#E0E0E0] mb-8">
                Satın alma işleminiz başarıyla tamamlandı. En kısa sürede sizinle iletişime geçeceğiz.
              </p>
              <div className="space-x-4">
                <Link href="/dashboard" className="btn-primary">
                  Dashboard'a Git
                </Link>
                <Link href="/contact" className="btn-secondary">
                  İletişime Geç
                </Link>
              </div>
            </>
          )}

          {status === 'error' && (
            <>
              <div className="text-6xl mb-6">❌</div>
              <h1 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#00C2CB] to-[#6EE7B7] bg-clip-text text-transparent">
                  Bir Hata Oluştu
                </span>
              </h1>
              <p className="text-xl text-[#E0E0E0] mb-8">
                Ödeme işlemi sırasında bir hata oluştu. Lütfen tekrar deneyin veya bizimle iletişime geçin.
              </p>
              <div className="space-x-4">
                <Link href="/pricing" className="btn-primary">
                  Tekrar Dene
                </Link>
                <Link href="/contact" className="btn-secondary">
                  İletişime Geç
                </Link>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </main>
  );
} 