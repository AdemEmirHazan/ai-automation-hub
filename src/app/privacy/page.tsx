export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-[#00C2CB] to-[#6EE7B7] bg-clip-text text-transparent">
              Gizlilik Politikası
            </span>
          </h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-[#E0E0E0] mb-8">
              Son güncelleme tarihi: {new Date().toLocaleDateString('tr-TR')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#E0E0E0]">
                1. Giriş
              </h2>
              <p className="text-[#E0E0E0] mb-4">
                AI Hub olarak, gizliliğinize saygı duyuyor ve kişisel verilerinizin korunmasına
                önem veriyoruz. Bu gizlilik politikası, web sitemizi kullanırken verilerinizin
                nasıl toplandığını, kullanıldığını ve korunduğunu açıklar.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#E0E0E0]">
                2. Toplanan Bilgiler
              </h2>
              <p className="text-[#E0E0E0] mb-4">
                Web sitemizi kullanırken aşağıdaki bilgileri toplayabiliriz:
              </p>
              <ul className="list-disc pl-6 text-[#E0E0E0] space-y-2">
                <li>İletişim bilgileri (ad, e-posta, telefon)</li>
                <li>Şirket bilgileri</li>
                <li>Kullanım verileri (IP adresi, tarayıcı bilgileri)</li>
                <li>Çerezler ve benzer teknolojiler aracılığıyla toplanan veriler</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#E0E0E0]">
                3. Bilgilerin Kullanımı
              </h2>
              <p className="text-[#E0E0E0] mb-4">
                Topladığımız bilgileri aşağıdaki amaçlar için kullanıyoruz:
              </p>
              <ul className="list-disc pl-6 text-[#E0E0E0] space-y-2">
                <li>Hizmetlerimizi sunmak ve geliştirmek</li>
                <li>Müşteri desteği sağlamak</li>
                <li>İletişim ve bilgilendirme</li>
                <li>Güvenlik ve dolandırıcılık önleme</li>
                <li>Yasal yükümlülükleri yerine getirme</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#E0E0E0]">
                4. Bilgi Paylaşımı
              </h2>
              <p className="text-[#E0E0E0] mb-4">
                Bilgileriniz aşağıdaki durumlarda üçüncü taraflarla paylaşılabilir:
              </p>
              <ul className="list-disc pl-6 text-[#E0E0E0] space-y-2">
                <li>Yasal zorunluluklar gerektiğinde</li>
                <li>Hizmet sağlayıcılarımızla (veri işleme, hosting vb.)</li>
                <li>İş ortaklarımızla (izin verdiğiniz durumlarda)</li>
                <li>Şirket birleşme, satın alma veya yeniden yapılandırma durumlarında</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#E0E0E0]">
                5. Veri Güvenliği
              </h2>
              <p className="text-[#E0E0E0] mb-4">
                Verilerinizin güvenliği için aşağıdaki önlemleri alıyoruz:
              </p>
              <ul className="list-disc pl-6 text-[#E0E0E0] space-y-2">
                <li>SSL şifreleme</li>
                <li>Güvenli veri depolama sistemleri</li>
                <li>Düzenli güvenlik güncellemeleri</li>
                <li>Erişim kontrolü ve yetkilendirme</li>
                <li>Düzenli güvenlik denetimleri</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#E0E0E0]">
                6. Çerezler
              </h2>
              <p className="text-[#E0E0E0] mb-4">
                Web sitemizde çerezler kullanıyoruz. Çerezler hakkında daha detaylı bilgi için{' '}
                <a
                  href="/cookies"
                  className="text-[#00C2CB] hover:text-[#6EE7B7] transition-colors"
                >
                  Çerez Politikamızı
                </a>{' '}
                inceleyebilirsiniz.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#E0E0E0]">
                7. Haklarınız
              </h2>
              <p className="text-[#E0E0E0] mb-4">
                KVKK kapsamında aşağıdaki haklara sahipsiniz:
              </p>
              <ul className="list-disc pl-6 text-[#E0E0E0] space-y-2">
                <li>Verilerinize erişim hakkı</li>
                <li>Verilerinizin düzeltilmesini isteme hakkı</li>
                <li>Verilerinizin silinmesini isteme hakkı</li>
                <li>Veri işlemeye itiraz etme hakkı</li>
                <li>Verilerinizin aktarılmasını isteme hakkı</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#E0E0E0]">
                8. Değişiklikler
              </h2>
              <p className="text-[#E0E0E0] mb-4">
                Bu gizlilik politikasını zaman zaman güncelleyebiliriz. Önemli değişiklikler
                olduğunda sizi bilgilendireceğiz. Güncel politikayı her zaman web sitemizde
                bulabilirsiniz.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#E0E0E0]">
                9. İletişim
              </h2>
              <p className="text-[#E0E0E0] mb-4">
                Gizlilik politikamız hakkında sorularınız için{' '}
                <a
                  href="/contact"
                  className="text-[#00C2CB] hover:text-[#6EE7B7] transition-colors"
                >
                  iletişim sayfamızdan
                </a>{' '}
                bize ulaşabilirsiniz.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
} 