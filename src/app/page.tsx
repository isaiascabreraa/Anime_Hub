
import SeasonalAnimes from '@/components/SeasonalAnime';
import Carousel from '@/components/ui/Carousel';
import Image from 'next/image'
import { Suspense } from 'react';
import { fetchImage } from '@/api/anime_data';

export default async function Home() {

  const season = 'spring'
  const banner_path = '/Multimedia/Branding/Banner-Collage4.png'

  const images = await fetchImage()

  return (
    <main className='p-0 m-0 border-none'>
      <section className='flex flex-col'>
        <div className='relative w-full h-100 md:h-200 '>
          <Image
            src={banner_path}
            alt='AnimeHub Banner'
            fill
          />
          {/* <div className="absolute inset-0 z-10 backdrop-blur-[0.5px] brightness-20" /> */}
        </div>
        <p className="absolute p-5 z-20 text-white text-xl bottom-5 left-5 bg-black">
          ¡Nuevo animes de temporada! 
        </p>
        </section>


        <section>
          <h1 className='p-10 text-5xl text-center text-white'>Estrenos de Temporada</h1>
          <Suspense>
            <SeasonalAnimes season={season}/>
          </Suspense>
        </section>

         {/* className='absolute inset-x-0 top-1/2 z-30 -translate-y-1/2' */}
        <div className='p-5 items-center bg-black'> 
          <h2 className='p-10 text-5xl text-center text-white'>Animes recomendados</h2>
          <Suspense>
             <Carousel images={images}/>
          </Suspense>
          
        </div>

    </main>

  );
}
