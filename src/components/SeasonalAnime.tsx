
import { ApiResponse, Anime } from '@/utils/definition';
import ItemShowcase from './ItemShowcase';
import { fetchSeasonalAnimes } from "@/api/anime_data";

export default async function SeasonalAnimes() {

    const res = await fetchSeasonalAnimes('spring');
    const seasonalAnimes = (res as ApiResponse<Anime>).data.map((entry) => entry.node);

    return (
        <section className='flex flex-col items-center gap-5'>
          <ItemShowcase items={seasonalAnimes} type="anime"/>
        </section>
      );
}