
// components/TopAnimeList.tsx
import Image from 'next/image';
import { fetchTopAnimes } from '@/api/anime_data'

export default async function TopAnimeList() {

    const data = await fetchTopAnimes();
    const animes = data.data.map((entry) => entry.node);

    return (
    <div>
      <h2>Top Anime</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {animes.map((anime) => (
          <li key={anime.id} style={{ marginBottom: '1rem' }}>
            <Image
              src={anime.main_picture?.medium}
              alt={anime.title}
              width={60}
              height={60}
              style={{ verticalAlign: 'middle' }}>
            </Image>
            <span style={{ marginLeft: 10 }}>
              #{anime.rank} - {anime.title} ({anime.mean})
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}