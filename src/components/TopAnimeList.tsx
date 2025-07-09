
import AnimeItem from './AnimeItem';
import { AnimeItems } from '@/utils/definition'
import { fetchTopAnimes } from '@/api/anime_data'

export default async function TopAnimeList() {

    const res = await fetchTopAnimes();
    const animes: AnimeItems = { items: res.data.map((entry) => entry.node) };

    return (
    <section>
      <h2>Top Anime</h2>
      <AnimeItem items={animes.items}/>
    </section>
  );
}