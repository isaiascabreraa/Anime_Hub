
import { Manga } from '@/utils/definition'
import { formatText, formatEmptyNumbers, formatEmptyString } from '@/utils/format'
import Image from 'next/image'
import Link from 'next/link';

export default function AnimeItem(manga: Manga) {

    return(
        <>
             <div className='w-full flex flex-col flex-wrap text-black text-center'>
                <p className='border-b-5 border-black '>{manga.title}</p>
                <div className='flex justify-center gap-10 border-b-5 border-black'>
                    <span>Start Date: {formatEmptyString(manga.start_date)}</span>
                    <span>End Date: {formatEmptyString(manga.end_date)}</span>
                </div>
                <p className='pl-2 pr-2 flex flex-wrap justify-center w-full border-b-5 border-black'>
                    Genres: {manga.genres.map((entry) => entry.name).join(', ')} </p>
            </div>
            <div className='flex p-5'>
                <Link href={`/manga/${manga.id}`}>
                    <Image src={manga.main_picture?.large} alt={manga.title} width={280} height={280}
                    className='shadow-[0_0_10px_#000000]'/>
                </Link>
                
                
                <div className='p-5 w-50 flex flex-col text-black'>
                    <p> Chapters:  {formatEmptyNumbers(manga.num_chapters)}</p>
                    <p> Volumenes: {formatEmptyNumbers(manga.num_volumes)}</p>
                    <p> Type: {formatText(manga.media_type)}</p>
                </div>
            </div>
        </>
    );
}