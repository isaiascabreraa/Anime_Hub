
import { Suspense } from 'react';
import Search from '@/components/ui/Search'
import SeasonalAnimes from '@/components/SeasonalAnime';

export default function SeasonalPage({ searchParams }: { searchParams?: { season?: string } } ) {

  return (
    <main>
      <section className='p-5 flex flex-col gap-5 bg-gray-200'>
        <h1 className='text-5xl text-center text-black'>Seasonal Animes</h1>

        <Suspense>
            <Search  placeholder='Season'/>
        </Suspense>

        <Suspense fallback='Loading seasonal animes'>
            { <SeasonalAnimes searchParams={searchParams}/> }
        </Suspense>

      </section>
    </main>
  );
}

