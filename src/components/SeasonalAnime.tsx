
import { ApiResponse, Anime } from '@/utils/definition';
import { fetchSeasonalAnimes } from "@/api/anime_data";
import ItemShowcase from './ItemShowcase';

export default async function SeasonalAnimes({ searchParams }: { searchParams?: { season?: string } } ) {

    const res = await fetchSeasonalAnimes(searchParams?.season || 'spring');
    const seasonalAnimes = (res as ApiResponse<Anime>).data.map((entry) => entry.node);

    return (
        <section className='flex flex-col items-center gap-5'>
          <ItemShowcase items={seasonalAnimes} type="anime"/>
        </section>
      );
}