'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Checkout() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    country: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{
    name: string;
    price: number;
    cycle: string;
  } | null>(null);

  useEffect(() => {
    const plan = searchParams.get('plan');
    const cycle = searchParams.get('cycle');
    const price = searchParams.get('price');

    if (plan && cycle && price) {
      setSelectedPlan({
        name: plan.charAt(0).toUpperCase() + plan.slice(1),
        price: Number(price),
        cycle: cycle === 'monthly' ? 'aylık' : 'yıllık'
      });
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simüle edilmiş ödeme işlemi
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Başarılı ödeme sonrası yönlendirme
    window.location.href = '/success';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!selectedPlan) {
    return (
      <div className="min-h-screen bg-[#0A192F] text-[#E0E0E0] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Plan seçilmedi</h2>
          <p className="text-[#8892B0] mb-6">Lütfen önce bir plan seçin</p>
          <a href="/pricing" className="btn-primary">
            Planları Görüntüle
          </a>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0A192F] text-[#E0E0E0] pt-32 pb-20 relative">
      {/* Arka plan efektleri */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] to-[#0A192F]/80" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00C2CB]/10 to-[#6EE7B7]/10 animate-pulse" />
        
        {/* Dönen daireler */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00C2CB]/5 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#6EE7B7]/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#00C2CB]/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        
        {/* Parçacık efekti */}
        <div className="absolute inset-0">
          <div className="particles-container">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  '--x': `${Math.random() * 100}%`,
                  '--y': `${Math.random() * 100}%`,
                  '--duration': `${Math.random() * 20 + 10}s`,
                  '--delay': `${Math.random() * 5}s`,
                } as any}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#6EE7B7] to-[#00C2CB] text-transparent bg-clip-text">
            Ödeme
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sipariş Özeti */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#112240] rounded-xl p-6 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold mb-6">Sipariş Özeti</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#8892B0]">Plan:</span>
                  <span className="font-semibold">{selectedPlan.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#8892B0]">Periyot:</span>
                  <span className="font-semibold">{selectedPlan.cycle}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#8892B0]">Ara Toplam:</span>
                  <span className="font-semibold">₺{selectedPlan.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#8892B0]">KDV (%18):</span>
                  <span className="font-semibold">₺{(selectedPlan.price * 0.18).toFixed(2)}</span>
                </div>
                <div className="border-t border-[#1D2D50] pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">Toplam:</span>
                    <span className="text-lg font-bold text-[#00C2CB]">
                      ₺{(selectedPlan.price * 1.18).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Ödeme Formu */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-[#112240] rounded-xl p-6 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold mb-6">Ödeme Bilgileri</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[#8892B0] mb-2">Ad Soyad</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-[#1D2D50] border border-[#2A3F6E] rounded-lg px-4 py-2 text-[#E0E0E0] focus:outline-none focus:border-[#00C2CB]"
                  />
                </div>
                <div>
                  <label className="block text-[#8892B0] mb-2">E-posta</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-[#1D2D50] border border-[#2A3F6E] rounded-lg px-4 py-2 text-[#E0E0E0] focus:outline-none focus:border-[#00C2CB]"
                  />
                </div>
                <div>
                  <label className="block text-[#8892B0] mb-2">Adres</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-[#1D2D50] border border-[#2A3F6E] rounded-lg px-4 py-2 text-[#E0E0E0] focus:outline-none focus:border-[#00C2CB]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#8892B0] mb-2">Şehir</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-[#1D2D50] border border-[#2A3F6E] rounded-lg px-4 py-2 text-[#E0E0E0] focus:outline-none focus:border-[#00C2CB]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#8892B0] mb-2">Ülke</label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-[#1D2D50] border border-[#2A3F6E] rounded-lg px-4 py-2 text-[#E0E0E0] focus:outline-none focus:border-[#00C2CB]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[#8892B0] mb-2">Kart Numarası</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    required
                    placeholder="1234 5678 9012 3456"
                    className="w-full bg-[#1D2D50] border border-[#2A3F6E] rounded-lg px-4 py-2 text-[#E0E0E0] focus:outline-none focus:border-[#00C2CB]"
                  />
                </div>
                <div>
                  <label className="block text-[#8892B0] mb-2">Kart Üzerindeki İsim</label>
                  <input
                    type="text"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-[#1D2D50] border border-[#2A3F6E] rounded-lg px-4 py-2 text-[#E0E0E0] focus:outline-none focus:border-[#00C2CB]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#8892B0] mb-2">Son Kullanma Tarihi</label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      required
                      placeholder="MM/YY"
                      className="w-full bg-[#1D2D50] border border-[#2A3F6E] rounded-lg px-4 py-2 text-[#E0E0E0] focus:outline-none focus:border-[#00C2CB]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#8892B0] mb-2">CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      required
                      placeholder="123"
                      className="w-full bg-[#1D2D50] border border-[#2A3F6E] rounded-lg px-4 py-2 text-[#E0E0E0] focus:outline-none focus:border-[#00C2CB]"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isProcessing}
                  className={`w-full py-3 px-6 rounded-lg transition-all duration-300 ${
                    isProcessing
                      ? 'bg-[#1D2D50] cursor-not-allowed'
                      : 'bg-gradient-to-r from-[#6EE7B7] to-[#00C2CB] hover:opacity-90'
                  }`}
                >
                  {isProcessing ? 'İşleniyor...' : 'Ödemeyi Tamamla'}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .particles-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }
        
        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: linear-gradient(to right, #00C2CB, #6EE7B7);
          border-radius: 50%;
          left: var(--x);
          top: var(--y);
          animation: float var(--duration) ease-in-out var(--delay) infinite;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0;
          }
          25% {
            transform: translate(100px, -100px);
            opacity: 0.5;
          }
          50% {
            transform: translate(200px, 0);
            opacity: 0;
          }
          75% {
            transform: translate(100px, 100px);
            opacity: 0.5;
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
      `}</style>
    </main>
  );
} 