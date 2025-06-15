export default function TermsOfService() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-[#00C2CB] to-[#6EE7B7] bg-clip-text text-transparent">
              Kullanım Koşulları
            </span>
          </h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-[#E0E0E0] mb-8">
              Son güncelleme tarihi: {new Date().toLocaleDateString('tr-TR')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#E0E0E0]">
                1. Kabul Edilme
              </h2>
              <p className="text-[#E0E0E0] mb-4">
                AI Hub web sitesini kullanarak, bu kullanım koşullarını kabul etmiş
                sayılırsınız. Bu koşulları kabul etmiyorsanız, lütfen web sitemizi
                kullanmayınız.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#E0E0E0]">
                2. Hizmet Kullanımı
              </h2>
              <p className="text-[#E0E0E0] mb-4">
                Hizmetlerimizi kullanırken aşağıdaki kurallara uymanız gerekmektedir:
              </p>
              <ul className="list-disc pl-6 text-[#E0E0E0] space-y-2">
                <li>Yasalara ve etik kurallara uygun davranma</li>
                <li>Başkalarının haklarına saygı gösterme</li>
                <li>Hizmetlerimizi kötüye kullanmama</li>
                <li>Güvenlik önlemlerini ihlal etmeme</li>
                <li>Doğru ve güncel bilgi sağlama</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#E0E0E0]">
                3. Fikri Mülkiyet
              </h2>
              <p className="text-[#E0E0E0] mb-4">
                Web sitemizdeki tüm içerikler AI Hub'ın fikri mülkiyetidir:
              </p>
              <ul className="list-disc pl-6 text-[#E0E0E0] space-y-2">
                <li>Metin, görsel ve tasarımlar</li>
                <li>Yazılım ve kodlar</li>
                <li>Logolar ve markalar</li>
                <li>Diğer tüm materyaller</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#E0E0E0]">
                4. Sorumluluk Reddi
              </h2>
              <p className="text-[#E0E0E0] mb-4">
                Hizmetlerimizle ilgili aşağıdaki durumlar için sorumluluk kabul etmiyoruz:
              </p>
              <ul className="list-disc pl-6 text-[#E0E0E0] space-y-2">
                <li>Hizmet kesintileri ve teknik sorunlar</li>
                <li>Üçüncü taraf içerikleri</li>
                <li>Kullanıcı hataları</li>
                <li>Veri kayıpları</li>
                <li>Dolaylı zararlar</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#E0E0E0]">
                5. Hizmet Değişiklikleri
              </h2>
              <p className="text-[#E0E0E0] mb-4">
                Hizmetlerimizde aşağıdaki değişiklikleri yapma hakkını saklı tutarız:
              </p>
              <ul className="list-disc pl-6 text-[#E0E0E0] space-y-2">
                <li>Hizmet içeriğinde değişiklik</li>
                <li>Fiyatlandırma güncellemeleri</li>
                <li>Özellik ekleme veya kaldırma</li>
                <li>Hizmeti geçici veya kalıcı olarak durdurma</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#E0E0E0]">
                6. Fiyatlandırma ve Ödemeler
              </h2>
              <p className="text-[#E0E0E0] mb-4">
                Hizmetlerimizin fiyatlandırması ve ödemeleri ile ilgili kurallar:
              </p>
              <ul className="list-disc pl-6 text-[#E0E0E0] space-y-2">
                <li>Fiyatlarımız KDV hariçtir</li>
                <li>Ödemeler belirtilen para biriminde yapılır</li>
                <li>İade politikaları hizmet türüne göre değişir</li>
                <li>Fiyat değişiklikleri önceden bildirilir</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#E0E0E0]">
                7. Gizlilik
              </h2>
              <p className="text-[#E0E0E0] mb-4">
                Kişisel verilerinizin işlenmesi hakkında detaylı bilgi için{' '}
                <a
                  href="/privacy"
                  className="text-[#00C2CB] hover:text-[#6EE7B7] transition-colors"
                >
                  Gizlilik Politikamızı
                </a>{' '}
                inceleyebilirsiniz.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#E0E0E0]">
                8. Uygulanacak Hukuk
              </h2>
              <p className="text-[#E0E0E0] mb-4">
                Bu kullanım koşulları Türkiye Cumhuriyeti kanunlarına tabidir.
                Herhangi bir uyuşmazlık durumunda İstanbul Mahkemeleri ve İcra
                Daireleri yetkilidir.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#E0E0E0]">
                9. İletişim
              </h2>
              <p className="text-[#E0E0E0] mb-4">
                Kullanım koşullarımız hakkında sorularınız için{' '}
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