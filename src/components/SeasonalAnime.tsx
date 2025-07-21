
import { AniListResponse, Anime } from '@/utils/definition';
import { fetchAnimes } from "@/api/anilist_data";
import type { Season } from '@/utils/definition'
import ItemShowcase from './ItemShowcase';

import { getJapaneseAnimeSeason } from '@/utils/functions';

export default async function SeasonalAnimes({ season }: { season: Season } ) {

    const { current_season, current_year } = getJapaneseAnimeSeason();

    const fields: string = `
          id
          title { romaji }
          coverImage { extraLarge }
          startDate { year month day }
          endDate { year month day }
          source
          genres
          meanScore
          episodes`

    try {
      const res: AniListResponse<Anime> = await fetchAnimes({
        season: season || current_season, seasonYear: current_year, fields: fields});

      const seasonalAnimes = res.data.Page.media;


      return (
          <div className=' pb-5 pt-5 flex flex-col items-center gap-10'>
            <ItemShowcase items={seasonalAnimes} type="anime" rank="black"/>
          </div>
        );

    } catch(error) {
      console.error('Failed to fetch seasonal animes:', error);
      return null
    }

}