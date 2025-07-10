
import SeasonalAnimes from '@/components/SeasonalAnime';
import Image from 'next/image'
import { Suspense } from 'react';

export default function Home() {

  const season = 'spring'
  const banner_path = '/Multimedia/Branding/Banner-Collage4.png'

  return (
    <main>
      <section className='relative flex flex-col gap-5'>
        <div className='relative w-full h-120 '>
          <Image
            src={banner_path}
            alt='AnimeHub Banner'
            fill
          />
          <div className="absolute inset-0 z-10 backdrop-blur-[0.5px] brightness-60" />
        </div>
        <p className="absolute p-5 z-20 text-white text-xl bottom-5 left-5 bg-black">
          ¡Nuevo animes de temporada! 
        </p>
        </section>

        <section>
          <h1 className='p-10 text-5xl text-center text-white'>Nuevos Animes</h1>
          <Suspense>
            <SeasonalAnimes season={season}/>
          </Suspense>
        </section>

    </main>

  );
}
