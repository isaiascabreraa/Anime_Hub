
import { Suspense } from 'react';
import Search from '@/components/ui/Search'
import SeasonalAnimes from '@/components/SeasonalAnime';

export default async function SeasonalPage({ searchParams }: {searchParams: {season?: string}}) {

  const season = searchParams?.season || 'spring'
  console.log(season)

  return (
    <main>
      <section className='p-5 flex flex-col gap-5 bg-black'>
        <h1 className='text-5xl text-center text-white'>Temporada Animes</h1>

           <Search placeholder='Season'/>
       

        <Suspense key={season} fallback='Loading seasonal animes'>
            <SeasonalAnimes season={season}/>
        </Suspense>

      </section>
    </main>
  );
}
