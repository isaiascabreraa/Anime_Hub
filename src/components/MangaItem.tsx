

import { Manga } from '@/utils/definition'
import { formatText, formatEmptyNumbers } from '@/utils/format'
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
                    <p> Chapters:  {formatEmptyNumbers(manga.num_chapters)}</p>
                    <p> Volumenes: {formatEmptyNumbers(manga.num_volumes)}</p>
                    <p> Type: {formatText(manga.media_type)}</p>
                </div>
            </div>
        </>
    );
}