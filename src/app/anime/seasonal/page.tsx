
import { Suspense } from 'react';
import SearchSeason from '@/components/ui/SearchSeason'
import SeasonalAnimes from '@/components/SeasonalAnime';
import { RobotoFont } from '@/styles/fonts';
import { Season } from '@/utils/definition';

export default async function SeasonalPage({ searchParams }: {
  searchParams: Promise<{season?: Season}>
}) {

  const season= (await searchParams).season

  return (
    <main>
      <section className='p-5 flex flex-col gap-5 bg-black'>
        <h1 className={`${RobotoFont.className} font-semibold text-5xl text-center text-white`}> Temporada Animes</h1>

        <SearchSeason />
       
        <Suspense fallback='Loading seasonal animes'>
            <SeasonalAnimes season={season}/>
        </Suspense>

      </section>
    </main>
  );
}
