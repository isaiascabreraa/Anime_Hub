'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback } from 'react'

export default function Carousel({ images }: { images: string[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    slidesToScroll: 'auto'
  })

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <div className="relative w-full h-80">

      {/* Viewport del carrusel */}
      <div className="overflow-hidden h-full" ref={emblaRef}>

        {/* Contenedor del carrusel */}
        <div className="flex h-full">

          {images.map((src, index) => (
            /* Elemento */
            <div key={index} className="pr-2 pl-2 flex-[0_0_35%] sm:flex-[0_0_30%] md:flex-[0_0_25%] lg:flex-[0_0_20%] xl:flex-[0_0_15%] 2xl:flex-[0_0_10%] h-full">
              <Link href="/anime">
                <div className="relative w-50 h-full shadow-[0_0_10px_#000000] overflow-hidden">
                  <Image 
                    src={src} alt={`Slide ${index}`} fill className="object-cover"/>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Botones de navegación (versión simple) */}
      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
      >
        ‹
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
      >
        ›
      </button>
    </div>
  )
}