
import { Suspense } from 'react';

import { RobotoFont } from '@/styles/fonts';
import { Manga } from '@/utils/definition';
import { getMangas } from '@/utils/functions';

import GridLayout from '@/components/ui/layout/GridLayout';

//Pre: -
//Post: -
export default async function MangaPage() {

  const topMangas: Manga[] = await getMangas('id, coverImage { extraLarge }', ['SCORE_DESC'])

  return (
    <main>
      <section className='p-5 flex flex-col w-full gap-5 bg-slate-900'>
          <h1 className={`${RobotoFont.className} font-semibold text-2xl sm:text-3xl md:text-4xl text-center text-white`}> TOP 20 MANGAS </h1>
  
          <Suspense>
            <GridLayout items={{items: topMangas, type: 'MANGA'}}/>
          </Suspense>
          
        </section>
    </main>
  );
}