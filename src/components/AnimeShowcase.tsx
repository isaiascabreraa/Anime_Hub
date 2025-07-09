
import Item from './Item';
import { AnimeItems } from '@/utils/definition'

export default async function AnimeShowcase({ items }: AnimeItems) {

    return (
      <div className='flex flex-wrap justify-center gap-10 '>
        {items.map((anime) => (
            <div key={anime.id} className='w-120 flex flex-col items-center border-5 border-black bg-white'>
                <Item {...anime}/>
            </div>
        ))}
      </div>
  );
}