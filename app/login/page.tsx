"use client";

import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar lógica de autenticação
    console.log('Login:', { email, password });
    router.push('/home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white flex items-center justify-center px-4">
      <button
        onClick={() => router.push('/')}
        className="absolute top-8 left-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Voltar
      </button>

      <div className="w-full max-w-md">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="flex items-center gap-2">
            <Image src="/LOGO_BJJ_EVIDENCE_sem_fundo_branco.png" alt="Logo" width={170} height={80} />
          </div>
        </div>

        <div className="bg-gray-900/50 border border-blue-900/30 rounded-2xl p-8 backdrop-blur-sm">
          <h1 className="text-3xl mb-2">Bem-vindo de Volta</h1>
          <p className="text-gray-400 mb-8">Entre para continuar seu treino</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm mb-2 text-gray-300">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-black/50 border border-blue-900/30 rounded-lg focus:outline-none focus:border-blue-600 text-white"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm mb-2 text-gray-300">
                Senha
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-black/50 border border-blue-900/30 rounded-lg focus:outline-none focus:border-blue-600 text-white"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-400">
                <input type="checkbox" className="rounded" />
                Lembrar de mim
              </label>
              <button type="button" className="text-blue-400 hover:text-blue-300">
                Esqueceu a senha?
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              Entrar
            </button>
          </form>

          <div className="mt-6 text-center text-gray-400">
            Não tem uma conta?{' '}
            <button
              onClick={() => router.push('/register')}
              className="text-blue-400 hover:text-blue-300"
            >
              Cadastre-se
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
