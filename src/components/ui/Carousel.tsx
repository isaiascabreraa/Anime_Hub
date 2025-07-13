'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { useCallback } from 'react'


export default function Carousel({ images }: { images: string[]}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  return (
    <div className="relative overflow-hidden">
        
      {/* Carrusel */}
      <div ref={emblaRef} className="p-10 overflow-hidden">
        <div className="pl-10 pr-10 flex gap-10">
          {images.map((src, index) => (
            <div key={index} 
            className=" flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%]">
              <Image src={src} alt={`Slide ${index}`} width={400} height={400}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Botones */}
      <button onClick={scrollPrev} className="absolute left-2 top-1/2 z-10 bg-black/50 text-white p-2 rounded-full">‹</button>
      <button onClick={scrollNext} className="absolute right-2 top-1/2 z-10 bg-black/50 text-white p-2 rounded-full">›</button>
    </div>
  )
}
