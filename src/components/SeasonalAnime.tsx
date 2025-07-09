
import AnimeShowcase from "@/components/AnimeShowcase";
import { fetchSeasonalAnimes } from "@/api/anime_data";

export default async function SeasonalAnimes() {

    const res = await fetchSeasonalAnimes('spring');
    const seasonalAnimes = res.data.map((entry) => entry.node);

    return (
        <section className='flex flex-col items-center gap-5'>
          <AnimeShowcase items={seasonalAnimes}/>
        </section>
      );
}