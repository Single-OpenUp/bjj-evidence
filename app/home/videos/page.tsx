"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Upload, Video, Clock, CheckCircle, AlertCircle, MessageSquare, X } from 'lucide-react';

interface UploadedVideo {
  id: string;
  title: string;
  uploadDate: string;
  status: 'pending' | 'reviewed' | 'in-review';
  thumbnail: string;
  feedback?: string;
  trainerName?: string;
}

const mockVideos: UploadedVideo[] = [
  {
    id: '1',
    title: 'Armbar da Guarda - Sessão de Treino',
    uploadDate: '2025-11-25',
    status: 'reviewed',
    thumbnail: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=400&h=300&fit=crop',
    feedback: 'Ótima execução! Seu posicionamento de quadril está excelente. Concentre-se em controlar o braço com mais firmeza antes de estender. Além disso, tente quebrar a postura deles mais cedo na sequência.',
    trainerName: 'Marcus Silva',
  },
  {
    id: '2',
    title: 'Prática de Triângulo',
    uploadDate: '2025-11-23',
    status: 'in-review',
    thumbnail: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&h=300&fit=crop',
  },
  {
    id: '3',
    title: 'Treinos de Guarda Aranha',
    uploadDate: '2025-11-20',
    status: 'reviewed',
    thumbnail: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?w=400&h=300&fit=crop',
    feedback: 'Bom controle com os pés nos bíceps. Trabalhe em manter mais tensão nas pegadas. Lembre-se de inclinar seu corpo mais para criar melhores oportunidades de desequilíbrio.',
    trainerName: 'Ana Rodriguez',
  },
];

export default function VideosPage() {
  const [videos, setVideos] = useState<UploadedVideo[]>(mockVideos);
  const [selectedVideo, setSelectedVideo] = useState<UploadedVideo | null>(null);
  const [uploadTitle, setUploadTitle] = useState('');
  const [uploadDescription, setUploadDescription] = useState('');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && uploadTitle) {
      const newVideo: UploadedVideo = {
        id: Date.now().toString(),
        title: uploadTitle,
        uploadDate: new Date().toISOString().split('T')[0],
        status: 'pending',
        thumbnail: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=300&fit=crop',
      };
      setVideos([newVideo, ...videos]);
      setUploadTitle('');
      setUploadDescription('');
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl mb-2">Análise de Vídeos</h1>
        <p className="text-gray-400">Envie seus vídeos de treino e receba feedback especializado</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Upload Section */}
          <div className="bg-gray-900/50 border border-blue-900/30 rounded-2xl p-6">
            <h2 className="text-xl mb-4">Enviar Novo Vídeo</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="videoTitle" className="block text-sm mb-2 text-gray-300">
                  Título do Vídeo
                </label>
                <input
                  type="text"
                  id="videoTitle"
                  value={uploadTitle}
                  onChange={(e) => setUploadTitle(e.target.value)}
                  placeholder="ex: Prática de Triângulo"
                  className="w-full px-4 py-3 bg-black/50 border border-blue-900/30 rounded-lg focus:outline-none focus:border-blue-600 text-white"
                />
              </div>
              <div>
                <label htmlFor="videoDescription" className="block text-sm mb-2 text-gray-300">
                  Descrição (Opcional)
                </label>
                <textarea
                  id="videoDescription"
                  value={uploadDescription}
                  onChange={(e) => setUploadDescription(e.target.value)}
                  placeholder="Adicione perguntas específicas ou áreas sobre as quais gostaria de feedback..."
                  rows={3}
                  className="w-full px-4 py-3 bg-black/50 border border-blue-900/30 rounded-lg focus:outline-none focus:border-blue-600 text-white resize-none"
                />
              </div>
              <div>
                <label className="block">
                  <div className="border-2 border-dashed border-blue-900/30 rounded-lg p-8 text-center cursor-pointer hover:border-blue-600/50 transition-colors">
                    <Upload className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                    <p className="text-gray-300 mb-2">Clique para fazer upload ou arraste e solte</p>
                    <p className="text-sm text-gray-500">MP4, MOV ou AVI (Máx. 500MB)</p>
                  </div>
                  <input
                    type="file"
                    accept="video/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    disabled={!uploadTitle}
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Video List */}
          <div>
            <h2 className="text-xl mb-4">Seus Envios</h2>
            <div className="space-y-4">
              {videos.map((video) => (
                <div
                  key={video.id}
                  onClick={() => setSelectedVideo(video)}
                  className="bg-gray-900/50 border border-blue-900/30 rounded-xl p-4 hover:border-blue-600/50 transition-colors cursor-pointer flex gap-4"
                >
                  <div className="w-32 h-24 bg-black rounded-lg flex-shrink-0 overflow-hidden relative">
                    <Image src={video.thumbnail} alt={video.title} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="mb-2 truncate">{video.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {video.uploadDate}
                      </div>
                      <div className="flex items-center gap-1">
                        {video.status === 'reviewed' && (
                          <>
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span className="text-green-400">Revisado</span>
                          </>
                        )}
                        {video.status === 'in-review' && (
                          <>
                            <AlertCircle className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-400">Em Revisão</span>
                          </>
                        )}
                        {video.status === 'pending' && (
                          <>
                            <Clock className="w-4 h-4 text-gray-400" />
                            <span>Pendente</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-gray-900/50 border border-blue-900/30 rounded-2xl p-6 sticky top-8">
            {selectedVideo ? (
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl">{selectedVideo.title}</h3>
                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="aspect-video bg-black rounded-lg mb-4 flex items-center justify-center border border-blue-900/30 overflow-hidden relative">
                  <Image src={selectedVideo.thumbnail} alt={selectedVideo.title} fill className="object-cover" />
                </div>

                <div className="mb-4 flex items-center gap-2">
                  {selectedVideo.status === 'reviewed' && (
                    <div className="flex items-center gap-1 text-green-400">
                      <CheckCircle className="w-5 h-5" />
                      Revisado
                    </div>
                  )}
                  {selectedVideo.status === 'in-review' && (
                    <div className="flex items-center gap-1 text-yellow-400">
                      <AlertCircle className="w-5 h-5" />
                      Em Revisão
                    </div>
                  )}
                  {selectedVideo.status === 'pending' && (
                    <div className="flex items-center gap-1 text-gray-400">
                      <Clock className="w-5 h-5" />
                      Aguardando Revisão
                    </div>
                  )}
                </div>

                {selectedVideo.feedback && (
                  <div className="bg-blue-600/10 border border-blue-600/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <MessageSquare className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-400">Feedback do Instrutor</span>
                    </div>
                    {selectedVideo.trainerName && (
                      <div className="text-sm text-gray-400 mb-2">por {selectedVideo.trainerName}</div>
                    )}
                    <p className="text-gray-300 text-sm leading-relaxed">{selectedVideo.feedback}</p>
                  </div>
                )}

                {!selectedVideo.feedback && selectedVideo.status !== 'pending' && (
                  <div className="text-gray-400 text-center py-4">
                    Aguardando feedback do instrutor...
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center text-gray-400 py-8">
                <Video className="w-16 h-16 mx-auto mb-4 opacity-30" />
                <p>Selecione um vídeo para ver detalhes</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
