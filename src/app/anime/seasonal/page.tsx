
import { Suspense } from 'react';
import GridLayout from '@/components/ui/layout/GridLayout';
import SearchSeason from '@/components/ui/SearchSeason'
import { getJapaneseAnimeSeason } from '@/utils/functions';

import { fetchAnimes } from '@/api/anilist_data';

import { RobotoFont } from '@/styles/fonts';
import { AniListResponse, Season, Anime } from '@/utils/definition';

//Pre: -
//Post: Fetch all the seasonal animes in the current year.
async function fetchAllSeasonalAnimes(season?: Season) {

  const perPage = 50
  let currentPage = 1
  let hasNextPage = true
  let allAnimes: Anime[] = []

  const { current_season, current_year } = getJapaneseAnimeSeason();

  while (hasNextPage) {
    const res: AniListResponse<Anime> = await fetchAnimes({season: !season ? current_season : season, seasonYear: current_year, format: 'TV',
      page: currentPage, perPage, fields: `id title { romaji } coverImage { extraLarge }`, sort: ['POPULARITY_DESC']
    })

    allAnimes = [...allAnimes, ...res.data.Page.media]
    hasNextPage = res.data.Page.pageInfo.hasNextPage
    currentPage++

    if (hasNextPage) await new Promise(resolve => setTimeout(resolve, 500))
  }
  return allAnimes
}

//Pre: -
//Post: -
export default async function SeasonalPage({ searchParams }: {
  searchParams: Promise<{season?: Season}>
}) {

  const season= (await searchParams).season
  const seasonalAnimes = await fetchAllSeasonalAnimes(season)
  const max_animes: number = 100

  return (
    <main>
      <section className='p-5 flex flex-col gap-5 bg-slate-950'>
        <h1 className={`${RobotoFont.className} font-semibold text-5xl text-center text-white`}> Seasonal Animes</h1>

        <SearchSeason />
       
        <Suspense fallback='Loading seasonal animes'>
            <GridLayout items={{items: seasonalAnimes, type:'ANIME'}} max_number={max_animes} />
        </Suspense>

      </section>
    </main>
  );
}
