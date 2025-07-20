
import { AniListResponse, Anime } from '@/utils/definition';
import { fetchSeasonalAnimes } from "@/api/anilist_data";
import type { Season } from '@/utils/definition'
import ItemShowcase from './ItemShowcase';

export default async function SeasonalAnimes({ season }: Season ) {

    const current_season: string = 'SPRING'
    const current_year: number = 2025

    try {
      const res: AniListResponse<Anime> = await fetchSeasonalAnimes(season || current_season, current_year);
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