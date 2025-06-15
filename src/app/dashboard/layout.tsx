'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const menuItems = [
    {
      title: 'Genel Bakış',
      href: '/dashboard',
      icon: '📊',
    },
    {
      title: 'Hizmetlerim',
      href: '/dashboard/services',
      icon: '🛠️',
    },
    {
      title: 'Faturalar',
      href: '/dashboard/billing',
      icon: '📝',
    },
    {
      title: 'Ayarlar',
      href: '/dashboard/settings',
      icon: '⚙️',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className="fixed top-0 left-0 h-screen w-64 bg-[#1E293B] border-r border-[#334155] p-6"
      >
        <div className="mb-8">
          <Link href="/" className="text-2xl font-bold text-[#00C2CB]">
            AI Hub
          </Link>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                pathname === item.href
                  ? 'bg-[#00C2CB]/10 text-[#00C2CB]'
                  : 'text-[#E0E0E0] hover:bg-[#334155]'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <Link
            href="/"
            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-[#E0E0E0] hover:bg-[#334155] transition-colors"
          >
            <span className="text-xl">🏠</span>
            <span>Ana Sayfa</span>
          </Link>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="ml-64">{children}</div>
    </div>
  );
} 