'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Hızlı Entegrasyon',
    description: 'Mevcut sistemlerinize kolayca entegre olan çözümler sunuyoruz'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Güvenli Altyapı',
    description: 'En son güvenlik standartlarıyla verileriniz güvende'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Özelleştirilebilir',
    description: 'İhtiyaçlarınıza özel çözümler geliştiriyoruz'
  }
];

const services = [
  {
    id: 'nlp',
    icon: '🤖',
    title: 'NLP & Metin İşleme',
    description: 'Metin verilerinizi yapay zeka ile analiz edin ve anlamlı içgörüler elde edin.',
    link: '/services/nlp'
  },
  {
    id: 'data',
    icon: '📊',
    title: 'Veri Analizi',
    description: 'Verilerinizi analiz edin ve iş kararlarınızı veriye dayalı alın.',
    link: '/services/data'
  },
  {
    id: 'workflow',
    icon: '⚡',
    title: 'İş Akışı Otomasyonu',
    description: 'İş süreçlerinizi otomatikleştirin ve verimliliğinizi artırın.',
    link: '/services/workflow'
  },
  {
    id: 'marketing',
    icon: '🎯',
    title: 'Marketing Automation',
    description: 'Pazarlama süreçlerinizi yapay zeka ile otomatikleştirin.',
    link: '/services/marketing'
  },
  {
    id: 'customer-service',
    icon: '💬',
    title: 'AI Customer Service',
    description: 'Müşteri hizmetlerinizi yapay zeka ile güçlendirin.',
    link: '/services/customer-service'
  },
  {
    id: 'image-processing',
    icon: '🖼️',
    title: 'Image Processing AI',
    description: 'Görüntü işleme ve analiz çözümleri.',
    link: '/services/image-processing'
  },
  {
    id: 'custom-integration',
    icon: '🔌',
    title: 'Custom Integrations',
    description: 'İhtiyaçlarınıza özel entegrasyon çözümleri.',
    link: '/services/custom-integration'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A192F] text-[#E0E0E0]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] to-[#0A192F]/80" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00C2CB]/20 to-[#6EE7B7]/20 animate-pulse" />
          
          {/* Dönen daireler */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00C2CB]/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#6EE7B7]/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#00C2CB]/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
          
          {/* Parçacık efekti */}
          <div className="absolute inset-0">
            <div className="particles-container">
              {[...Array(50)].map((_, i) => (
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

        <div className="container mx-auto px-4 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#6EE7B7] to-[#00C2CB] text-transparent bg-clip-text drop-shadow-lg">
              AI Automation Hub
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-[#8892B0] drop-shadow-md">
              Yapay zeka destekli otomasyon çözümleri ile işinizi geleceğe taşıyın
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/services" 
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#6EE7B7] to-[#00C2CB] text-[#0A192F] font-semibold hover:opacity-90 transition-opacity text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Hizmetlerimiz
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-4 rounded-lg bg-[#112240] text-[#E0E0E0] font-semibold hover:bg-[#1D2D50] transition-colors text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                İletişime Geç
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#6EE7B7] to-[#00C2CB] text-transparent bg-clip-text drop-shadow-lg">
              Neden Biz?
            </h2>
            <p className="text-[#8892B0] max-w-2xl mx-auto drop-shadow-md">
              Modern teknolojiler ve yapay zeka çözümleriyle işletmenizi geleceğe hazırlıyoruz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-[#112240] p-8 rounded-xl backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="text-[#00C2CB] mb-4 transform hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-[#8892B0]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#00C2CB] to-[#6EE7B7] bg-clip-text text-transparent drop-shadow-lg">
              Hizmetlerimiz
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-[#112240] rounded-xl p-6 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="text-4xl mb-4 text-[#00C2CB]">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#E0E0E0]">{service.title}</h3>
                <p className="text-[#8892B0] mb-4">{service.description}</p>
                <Link
                  href={`/services/${service.id}`}
                  className="inline-block px-6 py-2 rounded-lg bg-gradient-to-r from-[#6EE7B7] to-[#00C2CB] text-[#0A192F] font-semibold hover:opacity-90 transition-opacity text-base shadow-md hover:shadow-lg"
                >
                  Detayları Gör
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto bg-[#112240] rounded-xl p-12 backdrop-blur-sm shadow-xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#6EE7B7] to-[#00C2CB] text-transparent bg-clip-text drop-shadow-lg">
              Hemen Başlayın
            </h2>
            <p className="text-[#8892B0] mb-8 max-w-2xl mx-auto drop-shadow-md">
              İşletmenizi yapay zeka ile güçlendirmek için bizimle iletişime geçin
            </p>
            <Link 
              href="/contact" 
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#6EE7B7] to-[#00C2CB] text-[#0A192F] font-semibold hover:opacity-90 transition-opacity text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-block"
            >
              Ücretsiz Danışmanlık
            </Link>
          </motion.div>
        </div>
      </section>

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
