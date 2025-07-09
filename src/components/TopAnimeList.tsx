
import { ApiResponse, Anime } from '@/utils/definition';
import ItemShowcase from './ItemShowcase';
import { fetchTopAnimes } from '@/api/anime_data';

export default async function TopAnimeList() {
  
const res = await fetchTopAnimes();
const topAnimes = (res as ApiResponse<Anime>).data.map((entry) => entry.node);


  return (
    <section className="flex flex-col items-center gap-5">
      <ItemShowcase items={topAnimes} type="anime" />
    </section>
  );
}
