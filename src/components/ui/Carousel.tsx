'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { useCallback } from 'react'
import Link from 'next/link'


export default function Carousel({ images }: { images: string[]}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  return (
    <div className="p-5 relative overflow-hidden">
        
      {/* Carrusel */}
      <div className="flex flex-wrap gap-4">
  {images.map((src, index) => (
    <div key={index} className="flex-1 min-w-[150px] max-w-[250px]">
      <Link href="/anime">
        <div className="w-full h-44 relative overflow-hidden shadow-[0_0_10px_#000000]">
          <Image
            src={src}
            alt={`Slide ${index}`}
            fill
            className="object-cover"
          />
        </div>
      </Link>
    </div>
  ))}
</div>



      {/* Botones */}
      <button onClick={scrollPrev} className="absolute left-2 top-1/2 z-10 bg-black/50 text-white p-2 rounded-full">‹</button>
      <button onClick={scrollNext} className="absolute right-2 top-1/2 z-10 bg-black/50 text-white p-2 rounded-full">›</button>
    </div>
  )
}
