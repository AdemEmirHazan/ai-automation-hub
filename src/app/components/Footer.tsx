import Link from 'next/link';

const footerLinks = {
  company: [
    { label: 'Hakkımızda', href: '/about' },
    { label: 'Hizmetlerimiz', href: '/services' },
    { label: 'Kariyer', href: '/careers' },
    { label: 'Blog', href: '/blog' },
  ],
  services: [
    { label: 'NLP Automations', href: '/services#nlp' },
    { label: 'Data Analysis', href: '/services#data' },
    { label: 'Workflow Automation', href: '/services#workflow' },
    { label: 'Marketing Automation', href: '/services#marketing' },
    { label: 'AI Customer Service', href: '/services#customer-service' },
    { label: 'Image Processing AI', href: '/services#image-processing' },
    { label: 'Custom Integrations', href: '/services#custom-integration' },
  ],
  legal: [
    { label: 'Gizlilik Politikası', href: '/privacy' },
    { label: 'Kullanım Koşulları', href: '/terms' },
    { label: 'KVKK', href: '/kvkk' },
    { label: 'Çerez Politikası', href: '/cookies' },
  ],
  social: [
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: '🔗' },
    { label: 'Twitter', href: 'https://twitter.com', icon: '🐦' },
    { label: 'GitHub', href: 'https://github.com', icon: '💻' },
    { label: 'Instagram', href: 'https://instagram.com', icon: '📸' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0A192F] border-t border-[#1E293B]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#E0E0E0]">Şirket</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#E0E0E0]/70 hover:text-[#00C2CB] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#E0E0E0]">Hizmetler</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#E0E0E0]/70 hover:text-[#00C2CB] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#E0E0E0]">Yasal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#E0E0E0]/70 hover:text-[#00C2CB] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#E0E0E0]">Sosyal Medya</h3>
            <ul className="space-y-2">
              {footerLinks.social.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-[#E0E0E0]/70 hover:text-[#00C2CB] transition-colors"
                  >
                    <span>{link.icon}</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#1E293B] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-[#00C2CB] to-[#6EE7B7] bg-clip-text text-transparent">
                AI Hub
              </Link>
            </div>
            <div className="text-[#E0E0E0]/70 text-sm">
              © {new Date().getFullYear()} AI Hub. Tüm hakları saklıdır.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 