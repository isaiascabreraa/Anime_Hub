
import { Suspense } from 'react';
import GridLayout from '@/components/ui/layout/GridLayout';

import { getAnimes, getMangas } from '@/utils/functions'

import { RobotoFont } from '@/styles/fonts';
import { Anime, Manga } from '@/utils/definition';


export default async function AnimePage() {


  const topAnimes: Anime[] = await getAnimes('id, coverImage { extraLarge }', ['SCORE_DESC'])
  const topMangas: Manga[] =  await getMangas('id, coverImage { extraLarge }', ['SCORE_DESC'])

  return (
    <main>
      <section className='p-5 flex flex-col w-full gap-5 bg-slate-900'>
              <h1 className={`${RobotoFont.className} font-semibold text-2xl sm:text-3xl md:text-4xl text-center text-white`}> TOP 20 ANIMES </h1>
      
              <Suspense>
                <GridLayout items={{items: topAnimes, type: 'ANIME'}}/>
              </Suspense>
              
            </section>

            <section className='p-5 flex flex-col w-full gap-5 bg-slate-900'>
                    <h1 className={`${RobotoFont.className} font-semibold text-2xl sm:text-3xl md:text-4xl text-center text-white`}> TOP 20 MANGAS </h1>
            
                    <Suspense>
                      <GridLayout items={{items: topMangas, type: 'MANGA'}}/>
                    </Suspense>
                    
                  </section>
    </main>
  );
}
