'use client'

import Link from 'next/link'
import Image from 'next/image'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback } from 'react'

import { ItemImage } from '@/utils/definition'

export default function Carousel({ images } : { images: ItemImage[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    slidesToScroll: 1
  }, [Autoplay({ delay: 2000, stopOnInteraction: true, stopOnMouseEnter: true })])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <div className="relative w-full h-100 group">

      {/* Gradientes para los bordes */}
      <div className="absolute inset-y-0 left-0 w-10 z-10 pointer-events-none bg-gradient-to-r from-black/75 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-10 z-10 pointer-events-none bg-gradient-to-l from-black/75 to-transparent" />

      {/* Viewport del carrusel */}
      <div className="overflow-hidden h-full" ref={emblaRef}>

        {/* Contenedor del carrusel */}
        <div className="flex h-full">

          {images.map((image) => (
            /* Elemento */
            <div key={image.id} className="p-2 flex-[0_0_35%] sm:flex-[0_0_30%] md:flex-[0_0_25%] lg:flex-[0_0_20%] xl:flex-[0_0_15%] 2xl:flex-[0_0_10%] h-full">
              <Link href={`/anime/${image.id}`}>
                <div className="relative w-60 h-full shadow-[0_0_10px_#000000] overflow-hidden">
                  <Image 
                    src={image.image} alt={`Slide ${image.id}`} fill className="object-cover"/>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Botones de navegación (versión simple) */}
      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
      >
        ‹
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
      >
        ›
      </button>
    </div>
  )
}