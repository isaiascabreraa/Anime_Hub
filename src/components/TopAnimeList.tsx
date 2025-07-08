
// components/TopAnimeList.tsx
import Image from 'next/image';
import { fetchTopAnimes } from '@/api/anime_data'

export default async function TopAnimeList() {

    const res = await fetchTopAnimes();
    const animes = res.data.map((entry) => entry.node);

    return (
    <section>
      <h2>Top Anime</h2>
      <div className='flex flex-wrap justify-center gap-10'>
        {animes.map((anime) => (
          <div key={anime.id} className='p-10 flex flex-col items-center'>
            <Image
              src={anime.main_picture?.large}
              alt={anime.title}
              width={200}
              height={200}
              style={{ verticalAlign: 'middle' }}>
            </Image>
            <span className='flex flex-col items-center'>
                <p>{anime.title} ({anime.mean})</p>
                <p>#{anime.rank}</p>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}