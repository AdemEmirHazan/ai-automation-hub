import Link from 'next/link';

const values = [
  {
    icon: '🎯',
    title: 'Mükemmellik',
    description: 'Her projede en yüksek kalite standartlarını hedefliyoruz.',
  },
  {
    icon: '🤝',
    title: 'İşbirliği',
    description: 'Müşterilerimizle yakın işbirliği içinde çalışıyoruz.',
  },
  {
    icon: '💡',
    title: 'Yenilikçilik',
    description: 'Sürekli öğreniyor ve yeni teknolojileri takip ediyoruz.',
  },
  {
    icon: '📈',
    title: 'Sürdürülebilirlik',
    description: 'Uzun vadeli ve sürdürülebilir çözümler sunuyoruz.',
  },
];

const team = [
  {
    name: 'Ahmet Yılmaz',
    role: 'Kurucu & CEO',
    description: '10+ yıl yapay zeka ve yazılım geliştirme deneyimi',
  },
  {
    name: 'Ayşe Demir',
    role: 'CTO',
    description: '8+ yıl makine öğrenmesi ve veri bilimi deneyimi',
  },
  {
    name: 'Mehmet Kaya',
    role: 'Baş Geliştirici',
    description: '6+ yıl full-stack geliştirme ve sistem mimarisi deneyimi',
  },
];

export default function About() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-[#00C2CB] to-[#6EE7B7] bg-clip-text text-transparent">
                Hakkımızda
              </span>
            </h1>
            <p className="text-xl text-[#E0E0E0] mb-8 animate-fade-in-delay">
              Yapay zeka ve otomasyon alanında uzman ekibimizle işinizi dönüştürüyoruz
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card hover:scale-[1.02] transition-transform duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h2 className="text-2xl font-bold mb-4">Misyonumuz</h2>
              <p className="text-[#E0E0E0]">
                İşletmelerin dijital dönüşüm süreçlerinde yapay zeka ve otomasyon çözümleriyle
                öncü olmak, müşterilerimize sürdürülebilir değer katmak.
              </p>
            </div>
            <div className="card hover:scale-[1.02] transition-transform duration-300">
              <div className="text-4xl mb-4">👁️</div>
              <h2 className="text-2xl font-bold mb-4">Vizyonumuz</h2>
              <p className="text-[#E0E0E0]">
                Yapay zeka ve otomasyon teknolojilerinde lider konumda olmak, yenilikçi
                çözümlerle iş dünyasının geleceğini şekillendirmek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#00C2CB] to-[#6EE7B7] bg-clip-text text-transparent">
              Değerlerimiz
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="card hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-[#E0E0E0]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#00C2CB] to-[#6EE7B7] bg-clip-text text-transparent">
              Ekibimiz
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="card hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-[#00C2CB] mb-4">{member.role}</p>
                <p className="text-[#E0E0E0]">{member.description}</p>
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
              Ekibimize Katılmak İster misiniz?
            </span>
          </h2>
          <p className="text-xl text-[#E0E0E0] mb-8">
            Yapay zeka ve otomasyon alanında kariyer fırsatları için bizimle iletişime geçin
          </p>
          <Link href="/contact" className="btn-primary animate-glow">
            İletişime Geçin
          </Link>
        </div>
      </section>
    </main>
  );
} 