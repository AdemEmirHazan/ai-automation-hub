'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Şifreler eşleşmiyor!');
      return;
    }
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (response.ok) {
      router.push('/auth/login'); // Kayıt başarılı olduğunda giriş sayfasına yönlendir
    } else {
      alert('Kayıt işlemi başarısız oldu.');
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-[#00C2CB]">
          Kayıt Ol
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#E0E0E0] mb-1"
            >
              Ad Soyad
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-[#1E293B] border border-[#334155] text-[#E0E0E0] focus:outline-none focus:border-[#00C2CB]"
              required
            />
          </div>
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
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-[#E0E0E0] mb-1"
            >
              Şifre Tekrar
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-[#1E293B] border border-[#334155] text-[#E0E0E0] focus:outline-none focus:border-[#00C2CB]"
              required
            />
          </div>
          <button type="submit" className="w-full btn-primary">
            Kayıt Ol
          </button>
        </form>
        <p className="text-center text-sm text-[#E0E0E0] mt-4">
          Zaten bir hesabınız var mı?{' '}
          <Link href="/auth/login" className="text-[#00C2CB] hover:underline">
            Giriş Yap
          </Link>
        </p>
      </motion.div>
    </main>
  );
} 