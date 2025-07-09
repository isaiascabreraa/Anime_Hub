

import { Manga } from '@/utils/definition'
import { formatText } from '@/utils/format'
import Image from 'next/image'

export default function AnimeItem(manga: Manga) {

    return(
        <>
            <div className='w-full text-black text-center'>
                <p className='border-b-5 border-black '>{manga.title}</p>
                <div className='flex justify-between text-center border-b-5 border-black'>
                    <span>{manga.start_date}</span>
                    <span>{manga.end_date}</span>
                </div>
                <p className='flex flex-wrap border-b-5 border-black'>Genres: {manga.genres.map((entry) => entry.name).join(', ')}</p>
            </div>
            <div className='flex p-5'>
                <Image
                    src={manga.main_picture?.large}
                    alt={manga.title}
                    width={200}
                    height={200}/>
                <div className='p-5 w-50 flex flex-col text-black'>
                    <p> Chapters:  {manga.num_chapters === 0 ? '-' : manga.num_chapters}</p>
                    <p> Volumenes: {manga.num_volumes === 0 ? '-' : manga.num_volumes}</p>
                    <p> Type: {formatText(manga.media_type)}</p>
                </div>
            </div>

            <div className='text-black'>
                <p>Ranking: {manga.rank} ({manga.mean} score)</p>
            </div>
        </>
    );
}