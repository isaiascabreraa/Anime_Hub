
import Image from 'next/image'
import Link from 'next/link'
import { Items, ItemImage } from "@/utils/definition";

export default function GridLayout({items, max_number = 1000}: { items: Items, max_number?: number }) {

    const ranking: ItemImage[] = items.items.map( (item) => ({id: item.id, image: item.coverImage.extraLarge})); 

    return (
        <div className='flex justify-center items-center w-full '>
          <div className='grid grid-cols-5 w-full sm:grid-cols-5 xl:grid-cols-10 gap-2'>

            {ranking.slice(0, max_number).map((item) => (
              <div key={item.id} className='relative aspect-[4/5] w-full'>
                <Link href={`/${items.type.toLocaleLowerCase()}/${item.id}`}>
                    <Image src={item.image} alt={`Top Anime ${item.id}`} fill className='object-cover rounded-lg'/>
                </Link>
              </div>
            ))}
          </div>
        </div>
    )
}