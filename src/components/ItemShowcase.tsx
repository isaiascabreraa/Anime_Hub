
import { formatEmptyNumbers } from '@/utils/format';
import type { Anime, Manga, Showcase } from '@/utils/definition';

import AnimeItem from '@/components/AnimeItem';
import MangaItem from '@/components/MangaItem';

export default function ItemShowcase({ items, type }: Showcase) {
  return (
    <div className="pb-5 pt-5 flex flex-wrap justify-center gap-10 bg-white">

      {items.map((item) => (
        <div key={item.id} className='flex flex-col w-full max-w-2xl'>

          <div className="m-2 flex flex-col rounded-md items-center border-3 
          border-4 border-black shadow-[0_0_10px_#000000] rounded-lg p-2
          bg-white">
            {type === 'anime' ? (
              <AnimeItem {...item as Anime} />
            ) : (
              <MangaItem {...item as Manga} />
            )}
          </div>

          <div className='flex justify-center text-black'>
                  <p className='text-lg'> Ranking: {formatEmptyNumbers(item.rank)} ({item.mean} score)</p>
          </div>

        </div>
      ))}

    </div>
  );
}
