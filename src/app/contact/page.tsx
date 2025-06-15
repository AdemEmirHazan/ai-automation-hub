'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Burada form verilerini işleyecek API çağrısı yapılacak
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simüle edilmiş API çağrısı
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#00C2CB] to-[#6EE7B7] bg-clip-text text-transparent">
                İletişime Geçin
              </span>
            </h1>
            <p className="text-[#E0E0E0] text-lg">
              AI ve otomasyon çözümlerimiz hakkında bilgi almak için bizimle iletişime geçin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* İletişim Formu */}
            <div className="bg-[#1E293B]/30 backdrop-blur-sm rounded-2xl p-8 border border-[#2C3E50] shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#E0E0E0] mb-2 font-medium">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1E293B] border border-[#2C3E50] rounded-lg text-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#00C2CB] transition-all"
                    placeholder="Adınız Soyadınız"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#E0E0E0] mb-2 font-medium">
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1E293B] border border-[#2C3E50] rounded-lg text-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#00C2CB] transition-all"
                    placeholder="ornek@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-[#E0E0E0] mb-2 font-medium">
                    Şirket
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#1E293B] border border-[#2C3E50] rounded-lg text-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#00C2CB] transition-all"
                    placeholder="Şirket Adı (Opsiyonel)"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[#E0E0E0] mb-2 font-medium">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#1E293B] border border-[#2C3E50] rounded-lg text-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#00C2CB] transition-all resize-none"
                    placeholder="Mesajınızı buraya yazın..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-[#2C3E50] cursor-not-allowed'
                      : 'bg-gradient-to-r from-[#00C2CB] to-[#6EE7B7] hover:from-[#6EE7B7] hover:to-[#00C2CB] transform hover:scale-[1.02]'
                  }`}
                >
                  {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-green-400 text-center mt-4">
                    Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
                  </p>
                )}

                {submitStatus === 'error' && (
                  <p className="text-red-400 text-center mt-4">
                    Bir hata oluştu. Lütfen daha sonra tekrar deneyin.
                  </p>
                )}
              </form>
            </div>

            {/* İletişim Bilgileri */}
            <div className="space-y-8">
              <div className="bg-[#1E293B]/30 backdrop-blur-sm rounded-2xl p-8 border border-[#2C3E50] shadow-xl">
                <h2 className="text-2xl font-semibold mb-6 text-[#E0E0E0]">İletişim Bilgileri</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-[#00C2CB]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[#E0E0E0] font-medium mb-1">Adres</h3>
                      <p className="text-[#94A3B8]">
                        Levent, Büyükdere Cad. No:123<br />
                        34330 Beşiktaş/İstanbul
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-[#00C2CB]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[#E0E0E0] font-medium mb-1">Telefon</h3>
                      <p className="text-[#94A3B8]">+90 (212) 123 45 67</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-[#00C2CB]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[#E0E0E0] font-medium mb-1">Çalışma Saatleri</h3>
                      <p className="text-[#94A3B8]">
                        Pazartesi - Cuma: 09:00 - 18:00<br />
                        Cumartesi - Pazar: Kapalı
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1E293B]/30 backdrop-blur-sm rounded-2xl p-8 border border-[#2C3E50] shadow-xl">
                <h2 className="text-2xl font-semibold mb-6 text-[#E0E0E0]">Sosyal Medya</h2>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00C2CB] hover:text-[#6EE7B7] transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00C2CB] hover:text-[#6EE7B7] transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00C2CB] hover:text-[#6EE7B7] transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 