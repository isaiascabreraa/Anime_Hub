
import SeasonalAnimes from '@/components/SeasonalAnime';
import Carousel from '@/components/ui/Carousel';
import Image from 'next/image'
import { Suspense } from 'react';
import { fetchImage } from '@/api/myanimelist_data';
import { ApiResponse, Anime } from '@/utils/definition';
import { RobotoFont } from '@/styles/fonts';

export default async function Home() {

  const type = 'anime'
  const season = 'spring'
  const banner_path = '/Multimedia/Branding/Banner-Collage4.png'

  const res: ApiResponse<Anime> = await fetchImage(type)
  const images = res.data.map((item) => item.node.main_picture.large)

  return (
    <main>
      <section>
        <div className='relative w-full aspect-[16/6]'>
          <Image src={banner_path} alt='AnimeHub Banner' fill className='brightness-75'/>

          <p className="absolute p-2 z-20 text-lg sm:text-xl md:text-2xl bottom-5 left-5 bg-orange-500">
          ¡Nuevo animes de temporada! </p>

        </div>
        
      </section>

      <section className='bg-black'>
        <h1 className={`${RobotoFont.className} font-semibold pt-10 pb-10 text-2xl sm:text-3xl md:text-4xl text-center text-white`}> Estrenos de Temporada</h1>
        <Suspense>
          <SeasonalAnimes season={season}/>
        </Suspense>
      </section>

         {/* className='absolute inset-x-0 top-1/2 z-30 -translate-y-1/2' */}
        <div className='flex flex-col gap-5 p-10 items-center'> 
          <h2 className={`${RobotoFont.className} font-semibold text-5xl text-center text-white`}>Animes recomendados</h2>
          <div className='rounded bg-white'>
            <Suspense>
             <Carousel images={images}/>
            </Suspense>
          </div>

        
        </div>

    </main>

  );
}
