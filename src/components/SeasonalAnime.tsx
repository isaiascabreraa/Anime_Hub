
import { ApiResponse, Anime } from '@/utils/definition';
import { fetchSeasonalAnimes } from "@/api/myanimelist_data";
import type { Season } from '@/utils/definition'
import ItemShowcase from './ItemShowcase';

export default async function SeasonalAnimes({ season }: Season ) {

    const fields = `title,main_picture,related_anime,start_date,end_date,
    source,genres,studio,mean,status,rank,num_episodes,studios,media_type,
    average_episode_duration`

    const current_season = 'spring'

    try {
      const res: ApiResponse<Anime> = await fetchSeasonalAnimes(season || current_season, fields);
      const seasonalAnimes = res.data.map((entry) => entry.node);

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