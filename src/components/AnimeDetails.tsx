

import { Anime } from '@/utils/definition'
// import { formatText, formatEmptyNumbers, formatEmptyString } from '@/utils/format'
import Image from 'next/image'
import { TrailerPlayer } from '@/components/ui/TrailerPlayer';



export default function AnimeDetails(anime: Anime) {

    return(
        <>
        <div className='p-5 flex flex-col w-full gap-5 bg-slate-800'>

          <div>
            <p> Title: </p>
            <p> Description: </p>
          </div>

          <div className='flex'>
            
            <Image src={anime.coverImage?.extraLarge} alt={anime.title?.romaji ?? "Anime"} width={180} height={180}
              className="shadow-[0_0_10px_#000000]"/>

              <div className='w-full'>
                <p> Demas datos ...</p>
              </div>

          </div>


          <div>
            <p> Trailer: </p>
            <TrailerPlayer 
              youtubeId={anime.trailer.id}
              thumbnail={anime.trailer.thumbnail}
              className="rounded-lg overflow-hidden"
            />

          </div>

          

        </div>

      </>

    );
}