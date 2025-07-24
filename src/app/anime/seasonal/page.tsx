
import { Suspense } from 'react';
import SearchSeason from '@/components/ui/SearchSeason'
import { RobotoFont } from '@/styles/fonts';
import { AniListResponse, Season, Anime } from '@/utils/definition';
import { fetchAnimes } from '@/api/anilist_data';
import GridLayout from '@/components/ui/GridLayout';


async function fetchAllSeasonalAnimes(season?: Season) {
  let allAnimes: Anime[] = []
  let currentPage = 1
  let hasNextPage = true
  const perPage = 50 // Máximo permitido por la API

  while (hasNextPage) {
    const res: AniListResponse<Anime> = await fetchAnimes({season,seasonYear: 2025,
      page: currentPage, perPage, fields: `id title { romaji } coverImage { extraLarge }`, sort: ['POPULARITY_DESC']
    })

    allAnimes = [...allAnimes, ...res.data.Page.media]
    hasNextPage = res.data.Page.pageInfo.hasNextPage
    currentPage++

    if (hasNextPage) await new Promise(resolve => setTimeout(resolve, 500))
  }

  return allAnimes
}


export default async function SeasonalPage({ searchParams }: {
  searchParams: Promise<{season?: Season}>
}) {

  // const season= (await searchParams).season
  // const res: AniListResponse<Anime> = await fetchAnimes({season, seasonYear: 2025, page:1, perPage: 30, fields: 'id, coverImage { extraLarge }'})
  // const seasonalAnimes: Anime[] = res.data.Page.media

  const season= (await searchParams).season
  const seasonalAnimes = await fetchAllSeasonalAnimes(season)

  const max: number = 80

  return (
    <main>
      <section className='p-5 flex flex-col gap-5 bg-black'>
        <h1 className={`${RobotoFont.className} font-semibold text-5xl text-center text-white`}> Temporada Animes</h1>

        <SearchSeason />
       
        <Suspense fallback='Loading seasonal animes'>
            <GridLayout items={{items: seasonalAnimes, type:'ANIME'}} max_number={max} />
        </Suspense>

      </section>
    </main>
  );
}
