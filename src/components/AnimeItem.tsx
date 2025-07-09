
import { AnimeItems } from '@/utils/definition'
import Image from 'next/image'

export default function AnimeItem({ items }: AnimeItems) {

    return(
        <div className='flex flex-col gap-10 bg-gray-200'>
        {items.map((anime) => (
          <div key={anime.id} className='border-5 border-black flex flex-col items-center bg-white'>
            <div className='text-black'>
                <p className='border-b-5 border-black text-center'>{anime.title}</p>
                <div className='border-b-5 border-black flex justify-between text-center'>
                    <span className=' text-center'>{anime.start_date}</span>
                    <span className=' text-center'>{anime.end_date}</span>
                </div>
                <p className='border-b-5 border-black flex flex-wrap'>Genres: {anime.genres.map((entry) => entry.name).join(', ')}</p>
            </div>
            <div className='flex p-5'>
                <Image
                    src={anime.main_picture?.large}
                    alt={anime.title}
                    width={200}
                    height={200}/>
                <div className='p-5 flex flex-col text-black'>
                    <p> Episodes: {anime.num_episodes}</p>
                    <p> Type: {anime.media_type}</p>
                    <p> Duration: {Math.round(anime.average_episode_duration / 60)} Min.</p>
                    <p> Source: {anime.source}</p>
                    <p> Studios: {anime.studios.map((entry) => entry.name).join(', ')}</p>
                </div>
            </div>

            <div className='text-black'>
                <p>Ranking: {anime.rank} ({anime.mean} score)</p>
            </div>
            
          </div>
        ))}
      </div>
    )
}