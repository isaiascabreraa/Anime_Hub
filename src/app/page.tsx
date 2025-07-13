
import SeasonalAnimes from '@/components/SeasonalAnime';
import Carousel from '@/components/ui/Carousel';
import Image from 'next/image'
import { Suspense } from 'react';
import { fetchImage } from '@/api/myanimelist_data';
import { ApiResponse, Anime } from '@/utils/definition';

export default async function Home() {

  const type = 'anime'
  const season = 'spring'
  const banner_path = '/Multimedia/Branding/Banner-Collage4.png'

  const res: ApiResponse<Anime> = await fetchImage(type)
  const images = res.data.map((item) => item.node.main_picture.large)

  return (
    <main>
      <section>
        <div className='relative w-full h-100 md:h-200'>
          <Image src={banner_path} alt='AnimeHub Banner' fill className='brightness-75'/>

          <p className="absolute p-5 z-20 text-white text-xl bottom-5 left-5 bg-orange-500">
          ¡Nuevo animes de temporada! </p>

        </div>
        
      </section>

      <section className='bg-black'>
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
