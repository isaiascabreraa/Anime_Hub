
import { ApiResponse, Anime } from '@/utils/definition';
import { fetchSeasonalAnimes } from "@/api/myanimelist_data";
import type { Season } from '@/utils/definition'
import ItemShowcase from './ItemShowcase';

export default async function SeasonalAnimes({ season }: Season ) {

    const fields = `title,main_picture,related_anime,start_date,end_date,
    source,genres,studio,mean,status,rank,num_episodes,studios,media_type,
    average_episode_duration`

    const current_season = 'spring'

    const res: ApiResponse<Anime> = await fetchSeasonalAnimes(season || current_season, fields);
    const seasonalAnimes = res.data.map((entry) => entry.node);

    return (
        <section className='flex flex-col items-center gap-5'>
          <ItemShowcase items={seasonalAnimes} type="anime"/>
        </section>
      );
}