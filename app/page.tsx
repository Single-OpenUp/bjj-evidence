"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Play, Users, Award, Video, Target, TrendingUp, Shield, CheckCircle, Star, ArrowRight } from 'lucide-react';

export default function Page() {
  const router = useRouter();
  const onNavigateLogin = () => router.push("/login");
  const onNavigateRegister = () => router.push("/register");
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-blue-900/30 bg-black/50 backdrop-blur-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src="/LOGO_BJJ_EVIDENCE_sem_fundo_branco.png" alt="Logo" width={170} height={80} />
          </div>
          <div className="flex gap-4">
            <button
              onClick={onNavigateLogin}
              className="px-6 py-2 text-white hover:text-blue-400 transition-colors"
            >
              Entrar
            </button>
            <button
              onClick={onNavigateRegister}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all shadow-lg shadow-blue-600/30"
            >
              Começar Agora
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-600/30 rounded-full text-blue-400 text-sm mb-6">
                ⚡ Junte-se a Mais de 10.000 Alunos Ativos
              </div>
              <h1 className="text-5xl lg:text-7xl mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
                Domine o Jiu-Jitsu Brasileiro com Orientação Especializada
              </h1>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Transforme suas habilidades de luta com nossa trilha estruturada de cursos, feedback personalizado por vídeo e instrução de classe mundial. Treine no seu ritmo, a qualquer hora, em qualquer lugar.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <button
                  onClick={onNavigateRegister}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2 group"
                >
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Iniciar Teste Grátis
                </button>
                <button className="px-8 py-4 border-2 border-blue-600 text-blue-400 hover:bg-blue-600/10 rounded-lg transition-colors">
                  Ver Demonstração
                </button>
              </div>
              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-400">Sem cartão de crédito</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-400">Cancele quando quiser</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border-2 border-blue-600/30 shadow-2xl shadow-blue-600/20 relative">
                <Image
                  src="https://images.unsplash.com/photo-1699464676210-48cd0449df42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWxpYW4lMjBqaXUlMjBqaXRzdSUyMHRyYWluaW5nfGVufDF8fHx8MTc2NDE5MzY4MHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Treino de BJJ"
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl opacity-30 blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 border-y border-blue-900/30 bg-gradient-to-r from-blue-950/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl mb-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">10K+</div>
              <div className="text-gray-400">Alunos Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl mb-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">500+</div>
              <div className="text-gray-400">Vídeo Aulas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl mb-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">50+</div>
              <div className="text-gray-400">Instrutores Experientes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl mb-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">98%</div>
              <div className="text-gray-400">Taxa de Satisfação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-4">Tudo o Que Você Precisa Para Se Destacar</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Plataforma de treino completa projetada para acelerar sua jornada no BJJ do iniciante ao avançado.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-blue-900/30 rounded-2xl p-8 hover:border-blue-600/50 hover:shadow-xl hover:shadow-blue-600/10 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600/30 to-blue-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl mb-4">Currículo Estruturado</h3>
              <p className="text-gray-400 leading-relaxed">
                Caminhos de aprendizado progressivos da faixa branca à preta. Cada curso é cuidadosamente projetado para construir sobre técnicas anteriores.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-blue-900/30 rounded-2xl p-8 hover:border-blue-600/50 hover:shadow-xl hover:shadow-blue-600/10 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600/30 to-blue-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Video className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl mb-4">Feedback Personalizado</h3>
              <p className="text-gray-400 leading-relaxed">
                Envie seus vídeos de treino e receba análises detalhadas de instrutores faixa-preta certificados em até 48 horas.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-blue-900/30 rounded-2xl p-8 hover:border-blue-600/50 hover:shadow-xl hover:shadow-blue-600/10 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600/30 to-blue-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl mb-4">Instrutores de Classe Mundial</h3>
              <p className="text-gray-400 leading-relaxed">
                Aprenda com campeões do IBJJF e praticantes renomados com décadas de experiência combinada em ensino.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-blue-900/30 rounded-2xl p-8 hover:border-blue-600/50 hover:shadow-xl hover:shadow-blue-600/10 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600/30 to-blue-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl mb-4">Acompanhe seu Progresso</h3>
              <p className="text-gray-400 leading-relaxed">
                Monitore seu avanço através de análises detalhadas, taxas de conclusão e avaliações de habilidades.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-blue-900/30 rounded-2xl p-8 hover:border-blue-600/50 hover:shadow-xl hover:shadow-blue-600/10 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600/30 to-blue-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl mb-4">Biblioteca de Vídeos HD</h3>
              <p className="text-gray-400 leading-relaxed">
                Acesse mais de 500 vídeos de técnicas em alta definição com múltiplos ângulos de câmera e análises em câmera lenta.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-blue-900/30 rounded-2xl p-8 hover:border-blue-600/50 hover:shadow-xl hover:shadow-blue-600/10 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600/30 to-blue-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl mb-4">Acesso Vitalício</h3>
              <p className="text-gray-400 leading-relaxed">
                Uma vez inscrito, acesse seus cursos para sempre. Novo conteúdo adicionado mensalmente sem custo adicional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-4">Seu Caminho Para a Maestria</h2>
            <p className="text-xl text-gray-400">Metodologia de aprendizado simples, eficaz e comprovada</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600/20 to-blue-600/5 border border-blue-600/30 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl shadow-lg shadow-blue-600/50">
                  1
                </div>
                <h3 className="text-2xl mb-4">Assista & Aprenda</h3>
                <p className="text-gray-400">
                  Siga aulas em vídeo estruturadas com explicações detalhadas e demonstrações de instrutores especialistas.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-600 to-transparent"></div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600/20 to-blue-600/5 border border-blue-600/30 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl shadow-lg shadow-blue-600/50">
                  2
                </div>
                <h3 className="text-2xl mb-4">Pratique & Grave</h3>
                <p className="text-gray-400">
                  Aplique técnicas no treino e grave suas sessões. Faça upload dos vídeos diretamente pela plataforma.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-600 to-transparent"></div>
            </div>
            <div className="bg-gradient-to-br from-blue-600/20 to-blue-600/5 border border-blue-600/30 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl shadow-lg shadow-blue-600/50">
                3
              </div>
              <h3 className="text-2xl mb-4">Receba Feedback & Melhore</h3>
              <p className="text-gray-400">
                Receba críticas e correções personalizadas dos instrutores para aperfeiçoar sua técnica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-950/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-4">Confiado por Lutadores em Todo o Mundo</h2>
            <p className="text-xl text-gray-400">Veja o que nossos alunos têm a dizer</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 border border-blue-900/30 rounded-2xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-blue-400 text-blue-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                &ldquo;O recurso de feedback por vídeo é revolucionário. Meu instrutor apontou detalhes que eu nunca teria notado sozinho. Melhorei mais em 3 meses do que no ano anterior.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                  MS
                </div>
                <div>
                  <div>Marcus Silva</div>
                  <div className="text-sm text-gray-400">Faixa Azul</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900/50 border border-blue-900/30 rounded-2xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-blue-400 text-blue-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                &ldquo;Finalmente, uma plataforma que entende como ensinar BJJ online. O currículo estruturado facilita o acompanhamento e os instrutores são de primeira linha.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                  AR
                </div>
                <div>
                  <div>Ana Rodriguez</div>
                  <div className="text-sm text-gray-400">Faixa Roxa</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900/50 border border-blue-900/30 rounded-2xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-blue-400 text-blue-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                &ldquo;Como alguém que viaja com frequência, esta plataforma tem sido inestimável. Posso treinar consistentemente não importa onde eu esteja, e a qualidade da instrução é excepcional.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                  JC
                </div>
                <div>
                  <div>James Chen</div>
                  <div className="text-sm text-gray-400">Faixa Marrom</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-blue-600/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl mb-6">Pronto Para Transformar Seu Jogo?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Junte-se a milhares de alunos dominando o Jiu-Jitsu Brasileiro. Comece seu teste grátis hoje—sem necessidade de cartão de crédito.
          </p>
          <button
            onClick={onNavigateRegister}
            className="px-12 py-5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all text-lg shadow-xl shadow-blue-600/30 inline-flex items-center gap-2 group"
          >
            Iniciar Seu Teste Grátis
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="mt-6 text-gray-500 text-sm">14 dias grátis • Cancele quando quiser • Sem compromisso</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-900/30 py-12 px-4 bg-gray-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2">
                <Image src="/LOGO_BJJ_EVIDENCE_sem_fundo_branco.png" alt="Logo" width={170} height={80} />
              </div>
              <p className="text-gray-400 text-sm">
                Domine o Jiu-Jitsu Brasileiro com instrução de classe mundial e feedback personalizado.
              </p>
            </div>
            <div>
              <h4 className="mb-4">Plataforma</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Cursos</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Instrutores</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Avaliações</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Termos</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Segurança</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-900/30 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 BJJ Evidence. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
