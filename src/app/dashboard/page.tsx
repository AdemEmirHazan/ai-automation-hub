'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Dashboard() {
  // Örnek veri - gerçek uygulamada API'den gelecek
  const userData = {
    name: 'John Doe',
    email: 'john@example.com',
    plan: 'Pro',
    subscriptionStatus: 'active',
    nextBillingDate: '2024-04-01',
  };

  const activeServices = [
    {
      id: 1,
      name: 'NLP Automations',
      status: 'active',
      usage: '75%',
      lastUsed: '2024-03-15',
    },
    {
      id: 2,
      name: 'Data Analysis',
      status: 'active',
      usage: '45%',
      lastUsed: '2024-03-14',
    },
  ];

  const recentTransactions = [
    {
      id: 1,
      date: '2024-03-15',
      amount: '₺1999',
      status: 'completed',
      description: 'Pro Plan - Mart 2024',
    },
    {
      id: 2,
      date: '2024-02-15',
      amount: '₺1999',
      status: 'completed',
      description: 'Pro Plan - Şubat 2024',
    },
  ];

  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Kullanıcı Bilgileri */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card mb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-2xl font-bold mb-2">Hoş Geldiniz, {userData.name}</h1>
              <p className="text-[#E0E0E0]">{userData.email}</p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="px-4 py-2 rounded-full bg-[#00C2CB]/10 text-[#00C2CB]">
                {userData.plan} Plan
              </span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Aktif Hizmetler */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card"
          >
            <h2 className="text-xl font-bold mb-6">Aktif Hizmetler</h2>
            <div className="space-y-4">
              {activeServices.map((service) => (
                <div
                  key={service.id}
                  className="flex items-center justify-between p-4 bg-[#1E293B] rounded-lg"
                >
                  <div>
                    <h3 className="font-semibold">{service.name}</h3>
                    <p className="text-sm text-[#E0E0E0]">
                      Son kullanım: {service.lastUsed}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-[#00C2CB] font-semibold">{service.usage}</div>
                    <div className="text-sm text-[#E0E0E0]">{service.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Son İşlemler */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="card"
          >
            <h2 className="text-xl font-bold mb-6">Son İşlemler</h2>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-4 bg-[#1E293B] rounded-lg"
                >
                  <div>
                    <h3 className="font-semibold">{transaction.description}</h3>
                    <p className="text-sm text-[#E0E0E0]">{transaction.date}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-[#00C2CB] font-semibold">{transaction.amount}</div>
                    <div className="text-sm text-[#E0E0E0]">{transaction.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Hızlı Erişim */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <Link
            href="/dashboard/services"
            className="card hover:scale-[1.02] transition-transform duration-300"
          >
            <h3 className="text-lg font-semibold mb-2">Hizmetlerim</h3>
            <p className="text-[#E0E0E0]">Tüm hizmetlerinizi yönetin</p>
          </Link>
          <Link
            href="/dashboard/billing"
            className="card hover:scale-[1.02] transition-transform duration-300"
          >
            <h3 className="text-lg font-semibold mb-2">Faturalar</h3>
            <p className="text-[#E0E0E0]">Fatura geçmişi ve ödemeler</p>
          </Link>
          <Link
            href="/dashboard/settings"
            className="card hover:scale-[1.02] transition-transform duration-300"
          >
            <h3 className="text-lg font-semibold mb-2">Ayarlar</h3>
            <p className="text-[#E0E0E0]">Hesap ayarlarınızı yönetin</p>
          </Link>
        </motion.div>
      </div>
    </main>
  );
} 