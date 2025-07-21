
// import { formatEmptyNumbers } from '@/utils/format';
 import type { Anime, Manga } from '@/utils/definition';

import AnimeItem from '@/components/AnimeItem';
import MangaItem from '@/components/MangaItem';

export default function ItemShowcase({ items, type, rank }: {items: Anime[] | Manga[], type: string, rank: string}) {
  return (
    <>
      {items.map((item) => (
        <div key={item.id} className='flex flex-col max-w-xl'>

          <div className="flex flex-wrap items-center bg-white
          border-3 border-4 border-black shadow-[0_0_10px_#000000] rounded-xl">
            {type === 'anime' ? (
              <AnimeItem {...item as Anime} />
            ) : (
              <MangaItem {...item as Manga} />
            )}
          </div>

          <div className={`p-2 flex justify-center text-${rank}`}>
                  {/* <p className='text-lg'> Ranking: {formatEmptyNumbers(item.rank)} ({item.mean} score)</p> */}
          </div>

        </div>
      ))}

    </>
  );
}
