'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const sections = [
  { id: 'veri-sorumlusu', title: '1. Veri Sorumlusu' },
  { id: 'islenme-amaci', title: '2. Kişisel Verilerin İşlenme Amacı' },
  { id: 'islenen-veriler', title: '3. İşlenen Kişisel Veriler' },
  { id: 'veri-aktarimi', title: '4. Kişisel Verilerin Aktarılması' },
  { id: 'kullanici-haklari', title: '5. Kişisel Veri Sahibinin Hakları' },
  { id: 'veri-guvenligi', title: '6. Veri Güvenliği' },
  { id: 'iletisim', title: '7. İletişim' },
];

export default function KVKK() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-[#00C2CB] to-[#6EE7B7] bg-clip-text text-transparent">
              Kişisel Verilerin Korunması
            </span>
          </h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-[#E0E0E0] mb-8">
              Son güncelleme tarihi: {new Date().toLocaleDateString('tr-TR')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#E0E0E0]">
                1. Veri Sorumlusu
              </h2>
              <p className="text-[#E0E0E0] mb-4">
                AI Hub olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK")
                kapsamında veri sorumlusu sıfatıyla, kişisel verilerinizi aşağıda açıklanan
                kapsamda işleyebileceğiz.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#E0E0E0]">
                2. Kişisel Verilerin İşlenme Amacı
              </h2>
              <p className="text-[#E0E0E0] mb-4">
                Kişisel verileriniz aşağıdaki amaçlar doğrultusunda işlenmektedir:
              </p>
              <ul className="list-disc pl-6 text-[#E0E0E0] space-y-2">
                <li>Hizmetlerimizin sunulması ve geliştirilmesi</li>
                <li>Müşteri ilişkileri yönetimi</li>
                <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                <li>Güvenlik ve dolandırıcılık önleme</li>
                <li>İletişim ve bilgilendirme</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#E0E0E0]">
                3. İşlenen Kişisel Veriler
              </h2>
              <p className="text-[#E0E0E0] mb-4">
                Aşağıdaki kişisel verileriniz işlenmektedir:
              </p>
              <ul className="list-disc pl-6 text-[#E0E0E0] space-y-2">
                <li>Kimlik bilgileri (ad, soyad, TC kimlik no)</li>
                <li>İletişim bilgileri (e-posta, telefon, adres)</li>
                <li>Şirket bilgileri</li>
                <li>Kullanım verileri (IP adresi, tarayıcı bilgileri)</li>
                <li>Çerez verileri</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#E0E0E0]">
                4. Kişisel Verilerin Aktarılması
              </h2>
              <p className="text-[#E0E0E0] mb-4">
                Kişisel verileriniz, yasal zorunluluklar ve hizmet sunumu amacıyla
                aşağıdaki taraflarla paylaşılabilir:
              </p>
              <ul className="list-disc pl-6 text-[#E0E0E0] space-y-2">
                <li>Yasal merciler</li>
                <li>Hizmet sağlayıcılarımız</li>
                <li>İş ortaklarımız</li>
                <li>Denetim ve danışmanlık firmaları</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#E0E0E0]">
                5. Kişisel Veri Sahibinin Hakları
              </h2>
              <p className="text-[#E0E0E0] mb-4">
                KVKK'nın 11. maddesi kapsamında aşağıdaki haklara sahipsiniz:
              </p>
              <ul className="list-disc pl-6 text-[#E0E0E0] space-y-2">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
                <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
                <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
                <li>KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
                <li>Kişisel verilerinizin aktarıldığı üçüncü kişilere yukarıda belirtilen düzeltme, silme veya yok etme işlemlerinin bildirilmesini isteme</li>
                <li>İşlenen verilerinizin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
                <li>Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#E0E0E0]">
                6. Veri Güvenliği
              </h2>
              <p className="text-[#E0E0E0] mb-4">
                Kişisel verilerinizin güvenliği için aşağıdaki önlemleri alıyoruz:
              </p>
              <ul className="list-disc pl-6 text-[#E0E0E0] space-y-2">
                <li>SSL şifreleme</li>
                <li>Güvenli veri depolama</li>
                <li>Düzenli güvenlik güncellemeleri</li>
                <li>Erişim kontrolü ve yetkilendirme</li>
                <li>Veri işleme politikaları ve prosedürleri</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#E0E0E0]">
                7. İletişim
              </h2>
              <p className="text-[#E0E0E0] mb-4">
                KVKK kapsamındaki haklarınızı kullanmak için{' '}
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