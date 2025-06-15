'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { createCheckoutSession } from '../lib/stripe';

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Küçük işletmeler için ideal başlangıç paketi',
      monthlyPrice: 499,
      yearlyPrice: 4990,
      features: [
        'Temel AI Otomasyon',
        '5 API Çağrısı/Dakika',
        'E-posta Desteği',
        'Temel Raporlama',
        '1 Kullanıcı'
      ],
      color: 'from-[#00C2CB] to-[#6EE7B7]'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Büyüyen işletmeler için gelişmiş çözümler',
      monthlyPrice: 999,
      yearlyPrice: 9990,
      features: [
        'Gelişmiş AI Otomasyon',
        '20 API Çağrısı/Dakika',
        '7/24 Öncelikli Destek',
        'Detaylı Raporlama',
        '5 Kullanıcı',
        'Özel Entegrasyonlar'
      ],
      color: 'from-[#6EE7B7] to-[#00C2CB]',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Kurumsal ihtiyaçlar için özel çözümler',
      monthlyPrice: 2499,
      yearlyPrice: 24990,
      features: [
        'Özel AI Otomasyon',
        'Sınırsız API Çağrısı',
        '7/24 VIP Destek',
        'Özel Raporlama',
        'Sınırsız Kullanıcı',
        'Özel Entegrasyonlar',
        'Dedicated Sunucu'
      ],
      color: 'from-[#00C2CB] to-[#6EE7B7]'
    }
  ];

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
  };

  const handlePurchase = async (price: number, planName: string) => {
    try {
      console.log('Starting checkout process...', { price, planName });
      await createCheckoutSession(price, planName);
    } catch (error) {
      console.error('Detailed error:', error);
      if (error instanceof Error) {
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);
      }
      // Kullanıcıya hata mesajı göster
      alert('Ödeme işlemi başlatılırken bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
    }
  };

  return (
    <main className="min-h-screen bg-[#0A192F] text-[#E0E0E0] pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#6EE7B7] to-[#00C2CB] text-transparent bg-clip-text">
            Fiyatlandırma Planları
          </h1>
          <p className="text-xl text-[#8892B0] max-w-2xl mx-auto">
            İşletmenizin ihtiyaçlarına uygun paketi seçin ve yapay zeka destekli otomasyon çözümlerimizden faydalanmaya başlayın
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#112240] p-1 rounded-lg inline-flex">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-[#6EE7B7] to-[#00C2CB] text-[#0A192F]'
                  : 'text-[#8892B0] hover:text-[#E0E0E0]'
              }`}
            >
              Aylık
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-md transition-all duration-300 ${
                billingCycle === 'yearly'
                  ? 'bg-gradient-to-r from-[#6EE7B7] to-[#00C2CB] text-[#0A192F]'
                  : 'text-[#8892B0] hover:text-[#E0E0E0]'
              }`}
            >
              Yıllık
              <span className="ml-2 text-sm bg-[#00C2CB]/20 text-[#00C2CB] px-2 py-0.5 rounded-full">
                %20 İndirim
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative bg-[#112240] rounded-xl p-8 ${
                plan.popular ? 'ring-2 ring-[#00C2CB]' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#6EE7B7] to-[#00C2CB] text-[#0A192F] px-4 py-1 rounded-full text-sm font-semibold">
                    En Popüler
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-[#8892B0] mb-4">{plan.description}</p>
                <div className="text-4xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-[#6EE7B7] to-[#00C2CB] text-transparent bg-clip-text">
                    ₺{billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                  <span className="text-[#8892B0] text-lg">/{billingCycle === 'monthly' ? 'ay' : 'yıl'}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-[#8892B0]">
                    <svg className="w-5 h-5 text-[#00C2CB] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handlePlanSelect(plan.id)}
                className={`w-full py-3 px-6 rounded-lg transition-all duration-300 ${
                  selectedPlan === plan.id
                    ? 'bg-gradient-to-r from-[#6EE7B7] to-[#00C2CB] text-[#0A192F]'
                    : 'bg-[#1D2D50] text-[#E0E0E0] hover:bg-[#2A3F6E]'
                }`}
              >
                {selectedPlan === plan.id ? 'Seçildi' : 'Planı Seç'}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Checkout Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => handlePurchase(selectedPlan ? (billingCycle === 'monthly' ? plans.find(p => p.id === selectedPlan)?.monthlyPrice : plans.find(p => p.id === selectedPlan)?.yearlyPrice) : 0, selectedPlan ? plans.find(p => p.id === selectedPlan)?.name : '')}
            disabled={!selectedPlan}
            className={`btn-primary text-lg px-8 py-4 ${
              !selectedPlan ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {selectedPlan ? 'Ödemeye Geç' : 'Lütfen bir plan seçin'}
          </button>
        </motion.div>
      </div>
    </main>
  );
} 