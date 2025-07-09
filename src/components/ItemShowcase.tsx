import AnimeItem from '@/components/AnimeItem';
import MangaItem from '@/components/MangaItem';
import { Anime, Manga, Showcase } from '@/utils/definition';

export default function ItemShowcase({ items, type }: Showcase) {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {items.map((item) => (
        <div key={item.id} className="w-120 flex flex-col items-center border-5 border-black bg-white">
          {type === 'anime' ? (
            <AnimeItem {...item as Anime} />
          ) : (
            <MangaItem {...item as Manga} />
          )}
        </div>
      ))}
    </div>
  );
}
