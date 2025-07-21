
'use client'
import { useState } from 'react'
import Image from 'next/image'

type TrailerPlayerProps = {
  youtubeId: string
  thumbnail?: string
  className?: string
}

export function TrailerPlayer({ youtubeId, thumbnail, className = '' }: TrailerPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className={`relative aspect-video ${className}`}>
      {!isPlaying ? (
        <div 
          className="w-full h-full cursor-pointer relative"
          onClick={() => setIsPlaying(true)}
        >
          {thumbnail && (
            <>
              {/* Miniaturas optimizadas con Next.js Image */}
              <Image
                src={thumbnail}
                alt="Video thumbnail"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <PlayButton />
              </div>
            </>
          )}
        </div>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1`}
          className="w-full h-full"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  )
}

// Componente auxiliar para el botón de play
function PlayButton() {
  return (
    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition">
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
      </svg>
    </div>
  )
}