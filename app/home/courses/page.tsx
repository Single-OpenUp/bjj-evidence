"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Check, Lock, Play, ChevronRight, X } from 'lucide-react';

interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  locked: boolean;
}

interface Module {
  id: string;
  title: string;
  description: string;
  belt: string;
  lessons: Lesson[];
}

const mockModules: Module[] = [
  {
    id: '1',
    title: 'Fundamentos',
    description: 'Técnicas e posições essenciais para iniciantes',
    belt: 'Faixa Branca',
    lessons: [
      { id: '1-1', title: 'Introdução ao BJJ', duration: '15 min', completed: true, locked: false },
      { id: '1-2', title: 'Posições Básicas', duration: '25 min', completed: true, locked: false },
      { id: '1-3', title: 'Shrimping & Movimentos de Quadril', duration: '20 min', completed: false, locked: false },
      { id: '1-4', title: 'Fundamentos da Guarda Fechada', duration: '30 min', completed: false, locked: false },
    ],
  },
  {
    id: '2',
    title: 'Técnicas de Guarda',
    description: 'Domine a posição de guarda e raspagens',
    belt: 'Faixa Azul',
    lessons: [
      { id: '2-1', title: 'Conceitos de Guarda Aberta', duration: '28 min', completed: false, locked: false },
      { id: '2-2', title: 'Guarda Aranha', duration: '35 min', completed: false, locked: false },
      { id: '2-3', title: 'Guarda De La Riva', duration: '32 min', completed: false, locked: true },
      { id: '2-4', title: 'Retenção de Guarda', duration: '30 min', completed: false, locked: true },
    ],
  },
  {
    id: '3',
    title: 'Finalizações',
    description: 'Aprenda técnicas eficazes de finalização',
    belt: 'Faixa Azul',
    lessons: [
      { id: '3-1', title: 'Armbar da Guarda', duration: '22 min', completed: false, locked: true },
      { id: '3-2', title: 'Triângulo', duration: '25 min', completed: false, locked: true },
      { id: '3-3', title: 'Kimura', duration: '20 min', completed: false, locked: true },
      { id: '3-4', title: 'Mata Leão', duration: '18 min', completed: false, locked: true },
    ],
  },
];

export default function CoursesPage() {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [showPlayerModal, setShowPlayerModal] = useState(false);
  const router = useRouter();

  const handleStartLesson = () => {
    if (!selectedLesson || selectedLesson.locked) return;
    setShowPlayerModal(true);
  };

  const goToPlayer = () => {
    setShowPlayerModal(false);
    router.push('/home/player');
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl mb-2">Sua Trilha de Cursos</h1>
        <p className="text-gray-400">Siga seu caminho personalizado de aprendizado rumo à maestria</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {mockModules.map((module) => (
            <div
              key={module.id}
              className="bg-gray-900/50 border border-blue-900/30 rounded-2xl p-6 hover:border-blue-600/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-xs text-blue-400 mb-1">{module.belt}</div>
                  <h2 className="text-2xl mb-2">{module.title}</h2>
                  <p className="text-gray-400">{module.description}</p>
                </div>
              </div>

              <div className="space-y-2">
                {module.lessons.map((lesson) => (
                  <button
                    key={lesson.id}
                    onClick={() => !lesson.locked && setSelectedLesson(lesson)}
                    disabled={lesson.locked}
                    className={`w-full flex items-center gap-4 p-4 rounded-lg transition-colors ${lesson.locked
                      ? 'bg-gray-800/30 cursor-not-allowed'
                      : 'bg-black/30 hover:bg-blue-900/20 cursor-pointer'
                      } ${selectedLesson?.id === lesson.id ? 'ring-2 ring-blue-600' : ''}`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${lesson.completed
                        ? 'bg-blue-600'
                        : lesson.locked
                          ? 'bg-gray-700'
                          : 'bg-gray-800'
                        }`}
                    >
                      {lesson.completed ? (
                        <Check className="w-5 h-5" />
                      ) : lesson.locked ? (
                        <Lock className="w-5 h-5" />
                      ) : (
                        <Play className="w-5 h-5" />
                      )}
                    </div>
                    <div className="flex-1 text-left">
                      <div className={lesson.locked ? 'text-gray-500' : ''}>{lesson.title}</div>
                      <div className="text-sm text-gray-500">{lesson.duration}</div>
                    </div>
                    {!lesson.locked && <ChevronRight className="w-5 h-5 text-gray-500" />}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-gray-900/50 border border-blue-900/30 rounded-2xl p-6 sticky top-8">
            {selectedLesson ? (
              <div>
                <h3 className="text-xl mb-4">{selectedLesson.title}</h3>
                <div className="aspect-video bg-black rounded-lg mb-4 flex items-center justify-center border border-blue-900/30">
                  <Play className="w-16 h-16 text-blue-400" />
                </div>
                <div className="text-gray-400 mb-4">Duração: {selectedLesson.duration}</div>
                <button
                  onClick={handleStartLesson}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  {selectedLesson.completed ? 'Reassistir Aula' : 'Iniciar Aula'}
                </button>
                {selectedLesson.completed && (
                  <div className="mt-4 p-4 bg-blue-600/10 border border-blue-600/30 rounded-lg text-sm text-blue-400">
                    ✓ Concluído
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center text-gray-400 py-8">
                <Play className="w-16 h-16 mx-auto mb-4 opacity-30" />
                <p>Selecione uma aula para começar a aprender</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {showPlayerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="w-full max-w-md rounded-2xl bg-gray-900 border border-blue-900/40 shadow-2xl p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
              onClick={() => setShowPlayerModal(false)}
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="mb-4 text-blue-400 text-sm font-medium">Assistir aula</div>
            <h3 className="text-xl mb-2">Abrir Player</h3>
            <p className="text-gray-400 mb-6">
              Vamos levar você para o player dedicado com múltiplas câmeras para esta aula.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                className="px-4 py-2 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-800"
                onClick={() => setShowPlayerModal(false)}
              >
                Cancelar
              </button>
              <button
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
                onClick={goToPlayer}
              >
                Assistir aula
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
