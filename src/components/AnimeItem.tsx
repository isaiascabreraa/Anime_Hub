
import { Anime } from '@/utils/definition'
import { formatText, formatEmptyNumbers, formatEmptyString } from '@/utils/format'
import Image from 'next/image'

export default function AnimeItem(anime: Anime) {

    return(
        <>
            <div className='w-full flex flex-col flex-wrap text-black text-center'>
                
                <p className='border-b-5 border-black '>{anime.title}</p>
                <div className='flex justify-center gap-10 border-b-5 border-black'>
                    <p > Start Date: {formatEmptyString(anime.start_date)}</p>
                    <p> End Date: {formatEmptyString(anime.end_date)}</p>
                </div>
                
                <p className='pl-2 pr-2 flex flex-wrap justify-center max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg border-b-5 border-black '>Genres: {anime.genres.map((entry) => entry.name).join(', ')}</p>
            </div>

            <div className='flex p-5'>
                <Image src={anime.main_picture?.large} alt={anime.title} width={200} height={200}/>
                
                <div className='p-5 w-50 flex flex-col text-black'>
                    <p> Episodes: {formatEmptyNumbers(anime.num_episodes)}</p>
                    <p> Type: {formatText(anime.media_type)}</p>
                    <p> Duration: {formatEmptyNumbers(Math.round(anime.average_episode_duration / 60))} Min.</p>
                    <p> Source: {formatText(anime.source)}</p>
                    <p className='flex flex-wrap'> Studios: {anime.studios.map((entry) => entry.name).join(', ')}</p>
                </div>

            </div>
        </>
    );
}