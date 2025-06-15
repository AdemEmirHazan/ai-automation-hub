'use client';

import { motion } from 'framer-motion';

export default function Services() {
  // Örnek veri - gerçek uygulamada API'den gelecek
  const services = [
    {
      id: 1,
      name: 'NLP Automations',
      status: 'active',
      usage: '75%',
      lastUsed: '2024-03-15',
      description: 'Doğal dil işleme otomasyonları',
      features: ['Metin analizi', 'Duygu analizi', 'Anahtar kelime çıkarma'],
    },
    {
      id: 2,
      name: 'Data Analysis',
      status: 'active',
      usage: '45%',
      lastUsed: '2024-03-14',
      description: 'Veri analizi ve raporlama',
      features: ['Veri görselleştirme', 'İstatistiksel analiz', 'Özel raporlar'],
    },
    {
      id: 3,
      name: 'Workflow Automation',
      status: 'inactive',
      usage: '0%',
      lastUsed: '2024-02-28',
      description: 'İş akışı otomasyonları',
      features: ['Görev otomasyonu', 'Zamanlanmış işler', 'Entegrasyonlar'],
    },
  ];

  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-4">Hizmetlerim</h1>
          <p className="text-[#E0E0E0]">
            Aktif ve pasif hizmetlerinizi buradan yönetebilirsiniz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-bold mb-2">{service.name}</h2>
                  <p className="text-[#E0E0E0]">{service.description}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    service.status === 'active'
                      ? 'bg-green-500/10 text-green-500'
                      : 'bg-gray-500/10 text-gray-500'
                  }`}
                >
                  {service.status === 'active' ? 'Aktif' : 'Pasif'}
                </span>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[#E0E0E0]">Kullanım</span>
                  <span className="text-[#00C2CB]">{service.usage}</span>
                </div>
                <div className="w-full bg-[#1E293B] rounded-full h-2">
                  <div
                    className="bg-[#00C2CB] h-2 rounded-full"
                    style={{ width: service.usage }}
                  ></div>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-2">Özellikler</h3>
                <ul className="space-y-1">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-sm text-[#E0E0E0] flex items-center">
                      <span className="text-[#00C2CB] mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-sm text-[#E0E0E0]">
                Son kullanım: {service.lastUsed}
              </div>

              <div className="mt-4 flex space-x-3">
                <button className="flex-1 btn-primary">Yönet</button>
                {service.status === 'active' ? (
                  <button className="flex-1 btn-secondary">Durdur</button>
                ) : (
                  <button className="flex-1 btn-primary">Aktifleştir</button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
} 