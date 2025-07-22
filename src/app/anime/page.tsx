
import { Suspense } from 'react';
import { fetchAnimes, fetchMangas } from '@/api/anilist_data';
import GridLayout from '@/components/ui/GridLayout';

import { RobotoFont } from '@/styles/fonts';
import { AniListResponse, Anime, Manga } from '@/utils/definition';


export default async function AnimePage() {

  const res_anime: AniListResponse<Anime> = await fetchAnimes({fields: 'id, coverImage { extraLarge }', sort: ['SCORE_DESC']});
  const topAnimes: Anime[] = res_anime.data.Page.media

  const res_manga: AniListResponse<Manga> = await fetchMangas({fields: 'id, coverImage { extraLarge }', sort: ['SCORE_DESC']});
  const topMangas: Manga[] = res_manga.data.Page.media

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
