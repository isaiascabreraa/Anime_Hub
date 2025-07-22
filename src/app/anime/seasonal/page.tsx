
import { Suspense } from 'react';
import SearchSeason from '@/components/ui/SearchSeason'
import { RobotoFont } from '@/styles/fonts';
import { AniListResponse, Season, Anime } from '@/utils/definition';
import { fetchAnimes } from '@/api/anilist_data';
import GridLayout from '@/components/ui/GridLayout';

export default async function SeasonalPage({ searchParams }: {
  searchParams: Promise<{season?: Season}>
}) {

  const season= (await searchParams).season


  const res: AniListResponse<Anime> = await fetchAnimes({season, seasonYear: 2025,fields: 'id, coverImage { extraLarge }'})
  const seasonalAnimes: Anime[] = res.data.Page.media


  return (
    <main>
      <section className='p-5 flex flex-col gap-5 bg-black'>
        <h1 className={`${RobotoFont.className} font-semibold text-5xl text-center text-white`}> Temporada Animes</h1>

        <SearchSeason />
       
        <Suspense fallback='Loading seasonal animes'>
            <GridLayout items={{items:seasonalAnimes, type:'ANIME'}}/>
        </Suspense>

      </section>
    </main>
  );
}
