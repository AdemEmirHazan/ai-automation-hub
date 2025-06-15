'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
    // Kimlik doğrulama işlemi burada yapılacak
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-[#00C2CB]">
          Giriş Yap
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#E0E0E0] mb-1"
            >
              E-posta
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-[#1E293B] border border-[#334155] text-[#E0E0E0] focus:outline-none focus:border-[#00C2CB]"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#E0E0E0] mb-1"
            >
              Şifre
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-[#1E293B] border border-[#334155] text-[#E0E0E0] focus:outline-none focus:border-[#00C2CB]"
              required
            />
          </div>
          <button type="submit" className="w-full btn-primary">
            Giriş Yap
          </button>
        </form>
        <p className="text-center text-sm text-[#E0E0E0] mt-4">
          Hesabınız yok mu?{' '}
          <Link href="/auth/register" className="text-[#00C2CB] hover:underline">
            Kayıt Ol
          </Link>
        </p>
      </motion.div>
    </main>
  );
} 