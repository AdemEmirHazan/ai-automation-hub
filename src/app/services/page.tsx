'use client';

import Link from 'next/link';
// import { useRouter } from 'next/navigation';

const services = [
  {
    
    id: 'nlp',
    icon: '💬',
    title: 'NLP Automations',
    description: 'Doğal dil işleme teknolojileri ile metin analizi ve otomasyon çözümleri.',
    features: [
      'Metin sınıflandırma ve kategorilendirme',
      'Duygu analizi ve müşteri geri bildirimi',
      'Otomatik içerik özetleme',
      'Çoklu dil desteği',
    ],
    useCases: [
      'Müşteri hizmetleri otomasyonu',
      'İçerik moderasyonu',
      'Belge analizi ve işleme',
    ],
  },
  {
    id: 'data',
    icon: '📊',
    title: 'Data Analysis',
    description: 'Büyük veri analizi ve görselleştirme ile iş zekası çözümleri.',
    features: [
      'Gerçek zamanlı veri analizi',
      'Öngörücü analitik',
      'Özelleştirilebilir raporlama',
      'Veri görselleştirme araçları',
    ],
    useCases: [
      'Satış tahminleme',
      'Müşteri davranış analizi',
      'Performans optimizasyonu',
    ],
  },
  {
    id: 'workflow',
    icon: '⚙️',
    title: 'Workflow Automation',
    description: 'İş süreçlerinizi otomatikleştirerek verimliliği artırın.',
    features: [
      'Süreç otomasyonu',
      'Görev yönetimi',
      'Entegrasyon araçları',
      'İş akışı analizi',
    ],
    useCases: [
      'Belge onay süreçleri',
      'Müşteri kayıt işlemleri',
      'Stok yönetimi',
    ],
  },
  {
    id: 'marketing',
    icon: '🎯',
    title: 'Marketing Automation',
    description: 'Pazarlama süreçlerinizi yapay zeka ile otomatikleştirin.',
    features: [
      'Kişiselleştirilmiş pazarlama',
      'Otomatik kampanya yönetimi',
      'Müşteri segmentasyonu',
      'Performans analizi',
    ],
    useCases: [
      'E-posta pazarlama otomasyonu',
      'Sosyal medya yönetimi',
      'Reklam optimizasyonu',
    ],
  },
  {
    id: 'customer-service',
    icon: '🤖',
    title: 'AI Customer Service',
    description: 'Yapay zeka destekli müşteri hizmetleri çözümleri.',
    features: [
      '7/24 chatbot desteği',
      'Otomatik ticket yönetimi',
      'Müşteri memnuniyet analizi',
      'Çoklu kanal desteği',
    ],
    useCases: [
      'Müşteri destek otomasyonu',
      'Sık sorulan sorular yanıtlama',
      'Müşteri geri bildirim analizi',
    ],
  },
  {
    id: 'image-processing',
    icon: '🖼️',
    title: 'Image Processing AI',
    description: 'Görüntü işleme ve analiz çözümleri.',
    features: [
      'Nesne tanıma ve sınıflandırma',
      'Görüntü optimizasyonu',
      'Otomatik etiketleme',
      'Görsel içerik analizi',
    ],
    useCases: [
      'Ürün görsel optimizasyonu',
      'Güvenlik kamera analizi',
      'Kalite kontrol otomasyonu',
    ],
  },
  {
    id: 'custom-integration',
    icon: '🔌',
    title: 'Custom Integrations',
    description: 'İhtiyaçlarınıza özel entegrasyon çözümleri.',
    features: [
      'Özel API entegrasyonları',
      'Üçüncü parti sistem entegrasyonları',
      'Veri senkronizasyonu',
      'Özel otomasyon akışları',
    ],
    useCases: [
      'CRM entegrasyonları',
      'ERP sistem entegrasyonları',
      'Özel iş akışı otomasyonları',
    ],
  },
];

export default function Services() {
  // const router = useRouter(); // useRouter artık kullanılmadığı için kaldırıldı

  return (
    <main className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-[#00C2CB] to-[#6EE7B7] bg-clip-text text-transparent">
                Hizmetlerimiz
              </span>
            </h1>
            <p className="text-xl text-[#E0E0E0] mb-8 animate-fade-in-delay">
              İşletmenizi geleceğe taşıyacak yapay zeka ve otomasyon çözümleri
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section>
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="card hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="text-6xl mb-4">{service.icon}</div>
                    <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                    <p className="text-[#E0E0E0]">{service.description}</p>
                    <Link
                      href={`/services/${service.id}`}
                      className="mt-4 inline-block px-6 py-2 rounded-lg bg-gradient-to-r from-[#6EE7B7] to-[#00C2CB] text-[#0A192F] font-semibold hover:opacity-90 transition-opacity text-base shadow-md hover:shadow-lg relative z-10"
                      onClick={() => console.log(`'Detayları Gör' clicked for: /services/${service.id}`)}
                    >
                      Detayları Gör
                    </Link>
                  </div>
                  <div className="md:w-2/3">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Özellikler</h3>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center space-x-2">
                              <span className="text-[#00C2CB]">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Kullanım Alanları</h3>
                        <ul className="space-y-2">
                          {service.useCases.map((useCase, i) => (
                            <li key={i} className="flex items-center space-x-2">
                              <span className="text-[#00C2CB]">•</span>
                              <span>{useCase}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00C2CB] to-[#6EE7B7] bg-clip-text text-transparent">
              Özel Çözümler mi Arıyorsunuz?
            </span>
          </h2>
          <p className="text-xl text-[#E0E0E0] mb-8">
            İhtiyaçlarınıza özel çözümler için hemen iletişime geçin
          </p>
          <Link href="/contact" className="btn-primary animate-glow">
            Ücretsiz Danışmanlık
          </Link>
        </div>
      </section>
    </main>
  );
} 