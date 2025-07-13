
import { ApiResponse, Anime } from '@/utils/definition';
import ItemShowcase from './ItemShowcase';
import { fetchTopRanking } from '@/api/myanimelist_data';

export default async function TopAnimeList() {

  const fields = `title,main_picture,related_anime,start_date,end_date,
  source,genres,studio, mean,status,rank,num_episodes,studios,media_type,
  average_episode_duration`

  const type = 'anime'

  const res: ApiResponse<Anime> = await fetchTopRanking(type, fields);
  const topAnimes = res.data.map((entry) => entry.node);

  return (
    <section className="p-5 flex flex-col items-center gap-5 bg-white">
      <ItemShowcase items={topAnimes} type="anime" />
    </section>
  );
}
