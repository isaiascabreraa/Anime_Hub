
import { Manga } from '@/utils/definition'
import { formatText, formatEmptyNumbers, formatEmptyString } from '@/utils/format'
import Image from 'next/image'

export default function AnimeItem(manga: Manga) {

    return(
        <>
             <div className='w-full flex flex-col flex-wrap text-black text-center'>
                <p className='border-b-5 border-black '>{manga.title}</p>
                <div className='flex justify-center gap-10 border-b-5 border-black'>
                    <span>Start Date: {formatEmptyString(manga.start_date)}</span>
                    <span>End Date: {formatEmptyString(manga.end_date)}</span>
                </div>
                <p className='flex flex-wrap max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg border-b-5 border-black'>Genres: {manga.genres.map((entry) => entry.name).join(', ')}</p>
            </div>
            <div className='flex p-5'>
                <Image src={manga.main_picture?.large} alt={manga.title} width={200} height={200}/>
                
                <div className='p-5 w-50 flex flex-col text-black'>
                    <p> Chapters:  {formatEmptyNumbers(manga.num_chapters)}</p>
                    <p> Volumenes: {formatEmptyNumbers(manga.num_volumes)}</p>
                    <p> Type: {formatText(manga.media_type)}</p>
                </div>
            </div>
        </>
    );
}