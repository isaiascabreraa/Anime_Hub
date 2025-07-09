
import AnimeShowcase from './AnimeShowcase';
import { fetchTopAnimes } from '@/api/anime_data'

export default async function TopAnimeList() {

    const res = await fetchTopAnimes();
    const topAnimes = res.data.map((entry) => entry.node);

    return (
    <section className='flex flex-col items-center gap-5'>
      <AnimeShowcase items={topAnimes}/>
    </section>
  );
}