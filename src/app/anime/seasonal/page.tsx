
import { Suspense } from 'react';
import Search from '@/components/ui/Search'
import SeasonalAnimes from '@/components/SeasonalAnime';

export default async function SeasonalPage({ searchParams }: {
  searchParams: Promise<{season?: string}>
}) {

  const { season = 'spring' } = await searchParams

  return (
    <main>
      <section className='p-5 flex flex-col gap-5 bg-black'>
        <h1 className='text-5xl text-center text-white'>Temporada Animes</h1>

        <Search />
       
        <Suspense fallback='Loading seasonal animes'>
            <SeasonalAnimes season={season}/>
        </Suspense>

      </section>
    </main>
  );
}
