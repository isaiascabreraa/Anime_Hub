
import { Anime } from '@/utils/definition'
import { formatText } from '@/utils/format'
import Image from 'next/image'

export default function AnimeItem(anime: Anime) {

    return(
        <>
            <div className='w-full text-black text-center'>
                <p className='border-b-5 border-black '>{anime.title}</p>
                <div className='flex justify-between text-center border-b-5 border-black'>
                    <span>{anime.start_date}</span>
                    <span>{anime.end_date}</span>
                </div>
                <p className='flex flex-wrap border-b-5 border-black'>Genres: {anime.genres.map((entry) => entry.name).join(', ')}</p>
            </div>
            <div className='flex p-5'>
                <Image
                    src={anime.main_picture?.large}
                    alt={anime.title}
                    width={200}
                    height={200}/>
                <div className='p-5 w-50 flex flex-col text-black'>
                    <p> Episodes: {anime.num_episodes}</p>
                    <p> Type: {formatText(anime.media_type)}</p>
                    <p> Duration: {Math.round(anime.average_episode_duration / 60)} Min.</p>
                    <p> Source: {formatText(anime.source)}</p>
                    <p className='flex flex-wrap'> Studios: {anime.studios.map((entry) => entry.name).join(', ')}</p>
                </div>
            </div>

            <div className='text-black'>
                <p>Ranking: {anime.rank} ({anime.mean} score)</p>
            </div>
        </>
    );
}