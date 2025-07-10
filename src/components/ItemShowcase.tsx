
import { formatEmptyNumbers } from '@/utils/format';
import type { Anime, Manga, Showcase } from '@/utils/definition';

import AnimeItem from '@/components/AnimeItem';
import MangaItem from '@/components/MangaItem';

export default function ItemShowcase({ items, type }: Showcase) {
  return (
    <div className="flex flex-wrap justify-center gap-10">

      {items.map((item) => (
        <div key={item.id} className='flex flex-col'>

          <div className="m-2 flex flex-col rounded-md items-center border-3 border-black bg-white">
            {type === 'anime' ? (
              <AnimeItem {...item as Anime} />
            ) : (
              <MangaItem {...item as Manga} />
            )}
          </div>

          <div className='flex justify-center text-white'>
                  <p className='text-lg'> Ranking: {formatEmptyNumbers(item.rank)} ({item.mean} score)</p>
          </div>

        </div>
      ))}

    </div>
  );
}
