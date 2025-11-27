"use client";

import { useRouter, usePathname } from 'next/navigation';
import { BookOpen, Video } from 'lucide-react';
import { Header } from './Header';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  // TODO: Buscar dados do usuário de um context/session
  const user = { name: 'Usuário', email: 'usuario@email.com' };

  const handleLogout = () => {
    // TODO: Implementar lógica de logout
    console.log('Logout');
    router.push('/');
  };

  const isCoursesActive = pathname === '/home/courses';
  const isVideosActive = pathname === '/home/videos';

  return (
    <div className="min-h-screen bg-black text-white">
      <Header userName={user.name} onLogout={handleLogout} />

      {/* Navigation Tabs */}
      <nav className="border-b border-blue-900/30 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            <button
              onClick={() => router.push('/home/courses')}
              className={`flex items-center gap-2 py-4 border-b-2 transition-colors ${isCoursesActive
                ? 'border-blue-600 text-blue-400'
                : 'border-transparent text-gray-400 hover:text-white'
                }`}
            >
              <BookOpen className="w-5 h-5" />
              Trilha de Cursos
            </button>
            <button
              onClick={() => router.push('/home/videos')}
              className={`flex items-center gap-2 py-4 border-b-2 transition-colors ${isVideosActive
                ? 'border-blue-600 text-blue-400'
                : 'border-transparent text-gray-400 hover:text-white'
                }`}
            >
              <Video className="w-5 h-5" />
              Análise de Vídeos
            </button>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
