import Link from 'next/link';
import { notFound } from 'next/navigation';

// Hizmet detayları
const serviceDetails = {
  'nlp': {
    title: 'NLP Automations',
    icon: '💬',
    description: 'Doğal dil işleme teknolojileri ile metin analizi ve otomasyon çözümleri.',
    longDescription: `Doğal Dil İşleme (NLP) teknolojilerimiz, metin tabanlı verilerinizi anlamlandırmanıza ve otomatikleştirmenize yardımcı olur. 
    Modern yapay zeka modelleri kullanarak, metinlerinizi analiz eder, kategorize eder ve anlamlı içgörüler çıkarır.`,
    features: [
      {
        title: 'Metin Sınıflandırma',
        description: 'Metinleri otomatik olarak kategorilere ayırır ve etiketler.',
        example: 'Müşteri e-postalarını öncelik, konu ve duygu durumuna göre sınıflandırma',
      },
      {
        title: 'Duygu Analizi',
        description: 'Metinlerdeki duygu durumunu analiz eder ve raporlar.',
        example: 'Müşteri yorumlarında olumlu/olumsuz geri bildirimleri tespit etme',
      },
      {
        title: 'İçerik Özetleme',
        description: 'Uzun metinleri otomatik olarak özetler.',
        example: 'Uzun raporları ve dokümanları kısa özetlere dönüştürme',
      },
      {
        title: 'Çoklu Dil Desteği',
        description: 'Birden fazla dilde metin analizi yapabilir.',
        example: 'Uluslararası müşteri geri bildirimlerini analiz etme',
      },
    ],
    useCases: [
      {
        title: 'Müşteri Hizmetleri Otomasyonu',
        description: 'Müşteri e-postalarını ve mesajlarını otomatik olarak analiz edip yönlendirme',
        benefits: [
          'Hızlı yanıt süreleri',
          '7/24 destek imkanı',
          'Tutarlı hizmet kalitesi',
        ],
      },
      {
        title: 'İçerik Moderasyonu',
        description: 'Kullanıcı yorumlarını ve içerikleri otomatik olarak denetleme',
        benefits: [
          'Zararlı içerikleri tespit etme',
          'Topluluk kurallarına uygunluğu kontrol etme',
          'Manuel moderasyon yükünü azaltma',
        ],
      },
      {
        title: 'Belge Analizi',
        description: 'Büyük miktarda dokümanı hızlıca analiz etme',
        benefits: [
          'Belge kategorilendirme',
          'Önemli bilgileri çıkarma',
          'Veri girişi otomasyonu',
        ],
      },
    ],
    technologies: [
      'OpenAI GPT',
      'BERT',
      'Transformer Modelleri',
      'Custom NLP Modelleri',
    ],
    pricing: {
      starter: {
        price: '499',
        features: [
          'Günlük 1000 metin analizi',
          'Temel duygu analizi',
          'E-posta desteği',
        ],
      },
      professional: {
        price: '999',
        features: [
          'Günlük 5000 metin analizi',
          'Gelişmiş duygu analizi',
          'Özel model eğitimi',
          '7/24 destek',
        ],
      },
      enterprise: {
        price: 'Özel',
        features: [
          'Sınırsız metin analizi',
          'Özel model geliştirme',
          'API entegrasyonu',
          'Dedicated destek',
        ],
      },
    },
  },
  'data': {
    title: 'Data Analysis',
    icon: '📊',
    description: 'Büyük veri analizi ve görselleştirme ile iş zekası çözümleri.',
    longDescription: `Veri analizi hizmetlerimiz, işletmenizin verilerini anlamlı içgörülere dönüştürür. 
    Modern analitik araçlar ve yapay zeka teknolojileri kullanarak, verilerinizden değerli bilgiler çıkarır ve 
    iş kararlarınızı destekler.`,
    features: [
      {
        title: 'Gerçek Zamanlı Analiz',
        description: 'Verilerinizi anlık olarak analiz eder ve raporlar.',
        example: 'E-ticaret sitenizdeki kullanıcı davranışlarını gerçek zamanlı takip etme',
      },
      {
        title: 'Öngörücü Analitik',
        description: 'Gelecekteki trendleri ve olasılıkları tahmin eder.',
        example: 'Satış tahminleri ve stok optimizasyonu',
      },
      {
        title: 'Özelleştirilebilir Raporlama',
        description: 'İhtiyaçlarınıza özel raporlar ve dashboardlar oluşturur.',
        example: 'Yönetim ekibi için özel KPI dashboardları',
      },
      {
        title: 'Veri Görselleştirme',
        description: 'Karmaşık verileri anlaşılır grafiklere dönüştürür.',
        example: 'Müşteri segmentasyonu ve davranış analizi grafikleri',
      },
    ],
    useCases: [
      {
        title: 'Satış Tahminleme',
        description: 'Geçmiş verilere dayanarak gelecek satışları tahmin etme',
        benefits: [
          'Daha doğru stok yönetimi',
          'Gelir tahminleme',
          'Kaynak planlaması',
        ],
      },
      {
        title: 'Müşteri Davranış Analizi',
        description: 'Müşteri verilerini analiz ederek davranış kalıplarını tespit etme',
        benefits: [
          'Kişiselleştirilmiş pazarlama',
          'Müşteri segmentasyonu',
          'Churn tahminleme',
        ],
      },
      {
        title: 'Performans Optimizasyonu',
        description: 'İş süreçlerinin performansını analiz edip iyileştirme',
        benefits: [
          'Verimlilik artışı',
          'Maliyet optimizasyonu',
          'Süreç iyileştirme',
        ],
      },
    ],
    technologies: [
      'Python Data Stack',
      'TensorFlow',
      'Power BI',
      'Tableau',
      'Custom ML Models',
    ],
    pricing: {
      starter: {
        price: '799',
        features: [
          'Günlük 10,000 veri noktası',
          'Temel raporlama',
          'E-posta desteği',
        ],
      },
      professional: {
        price: '1499',
        features: [
          'Günlük 50,000 veri noktası',
          'Gelişmiş analitik',
          'Özel dashboardlar',
          '7/24 destek',
        ],
      },
      enterprise: {
        price: 'Özel',
        features: [
          'Sınırsız veri analizi',
          'Özel model geliştirme',
          'API entegrasyonu',
          'Dedicated destek',
        ],
      },
    },
  },
  'workflow': {
    title: 'Workflow Automation',
    icon: '⚙️',
    description: 'İş süreçlerinizi otomatikleştirerek verimliliği artırın.',
    longDescription: `İş akışı otomasyonu hizmetlerimiz, tekrarlayan iş süreçlerinizi otomatikleştirerek 
    verimliliğinizi artırır. Yapay zeka destekli çözümlerimiz, iş süreçlerinizi optimize eder ve 
    hata oranlarını minimize eder.`,
    features: [
      {
        title: 'Süreç Otomasyonu',
        description: 'Manuel iş süreçlerini otomatik hale getirir.',
        example: 'Fatura onay süreçlerinin otomatikleştirilmesi',
      },
      {
        title: 'Görev Yönetimi',
        description: 'İş akışlarını ve görevleri otomatik olarak yönetir.',
        example: 'Proje görevlerinin otomatik atanması ve takibi',
      },
      {
        title: 'Entegrasyon Araçları',
        description: 'Farklı sistemler arasında veri akışını sağlar.',
        example: 'CRM ve ERP sistemleri arasında veri senkronizasyonu',
      },
      {
        title: 'İş Akışı Analizi',
        description: 'Süreçleri analiz ederek iyileştirme önerileri sunar.',
        example: 'Süreç darboğazlarının tespiti ve optimizasyonu',
      },
    ],
    useCases: [
      {
        title: 'Belge Onay Süreçleri',
        description: 'Belge onay süreçlerini otomatikleştirme',
        benefits: [
          'Hızlı onay süreçleri',
          'Şeffaf takip',
          'Azaltılmış hata oranı',
        ],
      },
      {
        title: 'Müşteri Kayıt İşlemleri',
        description: 'Müşteri kayıt ve doğrulama süreçlerini otomatikleştirme',
        benefits: [
          'Hızlı müşteri onboarding',
          'Veri doğrulama',
          'Müşteri memnuniyeti',
        ],
      },
      {
        title: 'Stok Yönetimi',
        description: 'Stok takip ve yönetim süreçlerini otomatikleştirme',
        benefits: [
          'Gerçek zamanlı stok takibi',
          'Otomatik sipariş yönetimi',
          'Stok optimizasyonu',
        ],
      },
    ],
    technologies: [
      'n8n',
      'Zapier',
      'Make (Integromat)',
      'Custom Workflow Engine',
      'RPA Tools',
    ],
    pricing: {
      starter: {
        price: '599',
        features: [
          '5 otomatik iş akışı',
          'Temel entegrasyonlar',
          'E-posta desteği',
        ],
      },
      professional: {
        price: '1299',
        features: [
          '20 otomatik iş akışı',
          'Gelişmiş entegrasyonlar',
          'Özel otomasyonlar',
          '7/24 destek',
        ],
      },
      enterprise: {
        price: 'Özel',
        features: [
          'Sınırsız iş akışı',
          'Özel entegrasyonlar',
          'API erişimi',
          'Dedicated destek',
        ],
      },
    },
  },
  'marketing': {
    title: 'Marketing Automation',
    icon: '🎯',
    description: 'Pazarlama süreçlerinizi yapay zeka ile otomatikleştirin.',
    longDescription: `Pazarlama otomasyonu hizmetlerimiz, pazarlama süreçlerinizi yapay zeka ile 
    güçlendirir. Müşteri davranışlarını analiz ederek kişiselleştirilmiş pazarlama stratejileri 
    oluşturmanıza yardımcı olur.`,
    features: [
      {
        title: 'Kişiselleştirilmiş Pazarlama',
        description: 'Müşteri segmentlerine özel pazarlama kampanyaları oluşturur.',
        example: 'Müşteri davranışlarına göre özelleştirilmiş e-posta kampanyaları',
      },
      {
        title: 'Otomatik Kampanya Yönetimi',
        description: 'Pazarlama kampanyalarını otomatik olarak yönetir ve optimize eder.',
        example: 'A/B testleri ve otomatik optimizasyon',
      },
      {
        title: 'Müşteri Segmentasyonu',
        description: 'Müşterileri davranış ve özelliklerine göre gruplar.',
        example: 'RFM analizi ile müşteri segmentasyonu',
      },
      {
        title: 'Performans Analizi',
        description: 'Kampanya performansını detaylı olarak analiz eder.',
        example: 'ROI ve dönüşüm oranı takibi',
      },
    ],
    useCases: [
      {
        title: 'E-posta Pazarlama',
        description: 'Otomatik e-posta pazarlama kampanyaları yönetimi',
        benefits: [
          'Kişiselleştirilmiş içerik',
          'Otomatik tetikleyiciler',
          'Yüksek açılma oranları',
        ],
      },
      {
        title: 'Sosyal Medya Yönetimi',
        description: 'Sosyal medya içeriklerinin otomatik yönetimi',
        benefits: [
          'İçerik planlaması',
          'Otomatik paylaşım',
          'Etkileşim analizi',
        ],
      },
      {
        title: 'Reklam Optimizasyonu',
        description: 'Dijital reklam kampanyalarının otomatik optimizasyonu',
        benefits: [
          'Hedef kitle optimizasyonu',
          'Bütçe yönetimi',
          'ROI artışı',
        ],
      },
    ],
    technologies: [
      'HubSpot',
      'Mailchimp',
      'Custom AI Models',
      'Google Analytics',
      'Facebook Ads API',
    ],
    pricing: {
      starter: {
        price: '699',
        features: [
          '5 e-posta kampanyası',
          'Temel segmentasyon',
          'E-posta desteği',
        ],
      },
      professional: {
        price: '1399',
        features: [
          'Sınırsız kampanya',
          'Gelişmiş segmentasyon',
          'A/B testleri',
          '7/24 destek',
        ],
      },
      enterprise: {
        price: 'Özel',
        features: [
          'Özel entegrasyonlar',
          'API erişimi',
          'Özel raporlama',
          'Dedicated destek',
        ],
      },
    },
  },
  'customer-service': {
    title: 'AI Customer Service',
    icon: '🤖',
    description: 'Yapay zeka destekli müşteri hizmetleri çözümleri.',
    longDescription: `Yapay zeka destekli müşteri hizmetleri çözümlerimiz, müşterilerinize 7/24 
    kesintisiz destek sağlar. Gelişmiş doğal dil işleme teknolojileri ile müşteri sorularını 
    anında yanıtlar ve çözüm sunar.`,
    features: [
      {
        title: '7/24 Chatbot Desteği',
        description: 'Yapay zeka destekli chatbot ile kesintisiz müşteri desteği.',
        example: 'Müşteri sorularına anında yanıt ve yönlendirme',
      },
      {
        title: 'Otomatik Ticket Yönetimi',
        description: 'Müşteri taleplerini otomatik olarak kategorize eder ve yönlendirir.',
        example: 'Destek taleplerinin önceliklendirilmesi ve atanması',
      },
      {
        title: 'Müşteri Memnuniyet Analizi',
        description: 'Müşteri geri bildirimlerini analiz eder ve raporlar.',
        example: 'Müşteri memnuniyet skorlarının takibi ve iyileştirme',
      },
      {
        title: 'Çoklu Kanal Desteği',
        description: 'Farklı iletişim kanallarında tutarlı destek sağlar.',
        example: 'E-posta, web sitesi, sosyal medya ve mesajlaşma uygulamaları desteği',
      },
    ],
    useCases: [
      {
        title: 'Müşteri Destek Otomasyonu',
        description: 'Sık sorulan sorulara otomatik yanıt ve yönlendirme',
        benefits: [
          'Hızlı yanıt süreleri',
          '7/24 destek',
          'Tutarlı hizmet kalitesi',
        ],
      },
      {
        title: 'Sık Sorulan Sorular',
        description: 'Otomatik FAQ yanıtlama sistemi',
        benefits: [
          'Anında yanıt',
          'Doğru bilgi aktarımı',
          'Destek yükünü azaltma',
        ],
      },
      {
        title: 'Müşteri Geri Bildirim Analizi',
        description: 'Müşteri geri bildirimlerinin analizi ve raporlanması',
        benefits: [
          'Müşteri memnuniyeti takibi',
          'Hizmet kalitesi iyileştirme',
          'Proaktif sorun çözümü',
        ],
      },
    ],
    technologies: [
      'OpenAI GPT',
      'Custom NLP Models',
      'Zendesk',
      'Intercom',
      'Custom Chatbot Engine',
    ],
    pricing: {
      starter: {
        price: '799',
        features: [
          'Temel chatbot',
          'E-posta desteği',
          'Temel analitik',
        ],
      },
      professional: {
        price: '1599',
        features: [
          'Gelişmiş chatbot',
          'Çoklu kanal desteği',
          'Detaylı analitik',
          '7/24 destek',
        ],
      },
      enterprise: {
        price: 'Özel',
        features: [
          'Özel chatbot geliştirme',
          'API entegrasyonu',
          'Özel raporlama',
          'Dedicated destek',
        ],
      },
    },
  },
  'image-processing': {
    title: 'Image Processing AI',
    icon: '🖼️',
    description: 'Görüntü işleme ve analiz çözümleri.',
    longDescription: `Görüntü işleme yapay zeka çözümlerimiz, görsel verilerinizi analiz eder ve 
    anlamlı içgörüler çıkarır. Nesne tanıma, sınıflandırma ve görüntü optimizasyonu gibi 
    gelişmiş özellikler sunar.`,
    features: [
      {
        title: 'Nesne Tanıma',
        description: 'Görüntülerdeki nesneleri otomatik olarak tanımlar ve sınıflandırır.',
        example: 'Ürün görsellerinde otomatik etiketleme ve kategorilendirme',
      },
      {
        title: 'Görüntü Optimizasyonu',
        description: 'Görüntüleri otomatik olarak optimize eder ve iyileştirir.',
        example: 'Ürün fotoğraflarının otomatik düzenlenmesi ve iyileştirilmesi',
      },
      {
        title: 'Otomatik Etiketleme',
        description: 'Görüntülere otomatik olarak etiketler ve metadata ekler.',
        example: 'Medya arşivlerinin otomatik etiketlenmesi ve organize edilmesi',
      },
      {
        title: 'Görsel İçerik Analizi',
        description: 'Görsel içerikleri analiz eder ve içgörüler çıkarır.',
        example: 'Sosyal medya görsellerinin analizi ve içerik moderasyonu',
      },
    ],
    useCases: [
      {
        title: 'Ürün Görsel Optimizasyonu',
        description: 'E-ticaret ürün görsellerinin otomatik optimizasyonu',
        benefits: [
          'Tutarlı görsel kalitesi',
          'Hızlı içerik üretimi',
          'SEO optimizasyonu',
        ],
      },
      {
        title: 'Güvenlik Kamera Analizi',
        description: 'Güvenlik kameralarından gelen görüntülerin analizi',
        benefits: [
          'Otomatik nesne tespiti',
          'Anomali tespiti',
          'Gerçek zamanlı uyarılar',
        ],
      },
      {
        title: 'Kalite Kontrol',
        description: 'Üretim süreçlerinde görsel kalite kontrolü',
        benefits: [
          'Hata tespiti',
          'Kalite standartları kontrolü',
          'Üretim verimliliği',
        ],
      },
    ],
    technologies: [
      'TensorFlow',
      'OpenCV',
      'Custom CNN Models',
      'Cloud Vision API',
      'Custom Image Processing Pipeline',
    ],
    pricing: {
      starter: {
        price: '899',
        features: [
          'Günlük 1000 görüntü işleme',
          'Temel nesne tanıma',
          'E-posta desteği',
        ],
      },
      professional: {
        price: '1799',
        features: [
          'Günlük 5000 görüntü işleme',
          'Gelişmiş analiz',
          'Özel model eğitimi',
          '7/24 destek',
        ],
      },
      enterprise: {
        price: 'Özel',
        features: [
          'Sınırsız görüntü işleme',
          'Özel model geliştirme',
          'API entegrasyonu',
          'Dedicated destek',
        ],
      },
    },
  },
  'custom-integration': {
    title: 'Custom Integrations',
    icon: '🔌',
    description: 'İhtiyaçlarınıza özel entegrasyon çözümleri.',
    longDescription: `Özel entegrasyon çözümlerimiz, işletmenizin ihtiyaçlarına özel olarak 
    geliştirilir. Mevcut sistemlerinizi birbirine bağlar ve veri akışını otomatikleştirir.`,
    features: [
      {
        title: 'Özel API Entegrasyonları',
        description: 'İhtiyaçlarınıza özel API entegrasyonları geliştirir.',
        example: 'Özel CRM ve ERP sistemleri entegrasyonu',
      },
      {
        title: 'Üçüncü Parti Sistem Entegrasyonları',
        description: 'Popüler iş uygulamaları ile entegrasyon sağlar.',
        example: 'Salesforce, SAP, Oracle gibi sistemlerle entegrasyon',
      },
      {
        title: 'Veri Senkronizasyonu',
        description: 'Farklı sistemler arasında veri senkronizasyonu sağlar.',
        example: 'Müşteri verilerinin farklı sistemler arasında senkronizasyonu',
      },
      {
        title: 'Özel Otomasyon Akışları',
        description: 'İş süreçlerinize özel otomasyon akışları oluşturur.',
        example: 'Özel iş akışı ve süreç otomasyonları',
      },
    ],
    useCases: [
      {
        title: 'CRM Entegrasyonları',
        description: 'Müşteri ilişkileri yönetimi sistemleri entegrasyonu',
        benefits: [
          'Merkezi veri yönetimi',
          'Otomatik veri güncelleme',
          'Süreç verimliliği',
        ],
      },
      {
        title: 'ERP Sistem Entegrasyonları',
        description: 'Kurumsal kaynak planlama sistemleri entegrasyonu',
        benefits: [
          'Entegre iş süreçleri',
          'Gerçek zamanlı veri akışı',
          'Operasyonel verimlilik',
        ],
      },
      {
        title: 'Özel İş Akışı',
        description: 'İşletmenize özel otomasyon ve entegrasyon çözümleri',
        benefits: [
          'Özelleştirilmiş çözümler',
          'Esnek yapı',
          'Ölçeklenebilirlik',
        ],
      },
    ],
    technologies: [
      'REST APIs',
      'GraphQL',
      'Webhooks',
      'Custom Middleware',
      'Cloud Services',
    ],
    pricing: {
      starter: {
        price: '999',
        features: [
          '2 sistem entegrasyonu',
          'Temel API desteği',
          'E-posta desteği',
        ],
      },
      professional: {
        price: '1999',
        features: [
          '5 sistem entegrasyonu',
          'Gelişmiş API desteği',
          'Özel geliştirmeler',
          '7/24 destek',
        ],
      },
      enterprise: {
        price: 'Özel',
        features: [
          'Sınırsız entegrasyon',
          'Özel geliştirme',
          'API erişimi',
          'Dedicated destek',
        ],
      },
    },
  },
};

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = serviceDetails[params.slug as keyof typeof serviceDetails];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">{service.icon}</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-[#00C2CB] to-[#6EE7B7] bg-clip-text text-transparent">
                {service.title}
              </span>
            </h1>
            <p className="text-xl text-[#E0E0E0] mb-8 animate-fade-in-delay">
              {service.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#00C2CB] to-[#6EE7B7] bg-clip-text text-transparent">
              Özellikler
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {service.features.map((feature, index) => (
              <div key={index} className="card hover:scale-[1.02] transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-[#E0E0E0] mb-4">{feature.description}</p>
                <div className="bg-[#0A192F] p-4 rounded-lg">
                  <p className="text-[#00C2CB] font-medium">Örnek Kullanım:</p>
                  <p className="text-[#E0E0E0]">{feature.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="mb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#00C2CB] to-[#6EE7B7] bg-clip-text text-transparent">
              Kullanım Senaryoları
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {service.useCases.map((useCase, index) => (
              <div key={index} className="card hover:scale-[1.02] transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-4">{useCase.title}</h3>
                <p className="text-[#E0E0E0] mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  <p className="text-[#00C2CB] font-medium">Faydalar:</p>
                  <ul className="list-disc pl-6 text-[#E0E0E0]">
                    {useCase.benefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="mb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#00C2CB] to-[#6EE7B7] bg-clip-text text-transparent">
              Kullandığımız Teknolojiler
            </span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {service.technologies.map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-[#112240] rounded-full text-[#E0E0E0] hover:bg-[#1D2D50] transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="mb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#00C2CB] to-[#6EE7B7] bg-clip-text text-transparent">
              Fiyatlandırma
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(service.pricing).map(([plan, details]) => (
              <div key={plan} className="card hover:scale-[1.02] transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-4 capitalize">{plan}</h3>
                <div className="text-3xl font-bold mb-6">
                  {details.price === 'Özel' ? (
                    'Özel Fiyat'
                  ) : (
                    <>
                      {details.price}₺<span className="text-lg">/ay</span>
                    </>
                  )}
                </div>
                <ul className="space-y-3">
                  {details.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="text-[#00C2CB]">✓</span>
                      <span className="text-[#E0E0E0]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-6 btn-primary block text-center"
                >
                  İletişime Geç
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00C2CB] to-[#6EE7B7] bg-clip-text text-transparent">
              Hemen Başlayın
            </span>
          </h2>
          <p className="text-xl text-[#E0E0E0] mb-8">
            {service.title} hizmetimiz hakkında daha detaylı bilgi almak için bizimle iletişime geçin
          </p>
          <Link href="/contact" className="btn-primary animate-glow relative z-10">
            Ücretsiz Danışmanlık
          </Link>
        </div>
      </section>
    </main>
  );
} 