

import { Anime } from '@/utils/definition'
import Image from 'next/image'
import { TrailerPlayer } from '@/components/ui/TrailerPlayer';



export default function AnimeDetails(anime: Anime) {

    return(
        <>
        <div className='p-5 flex flex-col w-full max-w-250 gap-5 shadow-[0_0_10px_#000000] bg-slate-800'>

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


          <div className='w-3/4 mx-auto'>
            <TrailerPlayer 
              youtubeId={anime.trailer.id}
              className="rounded-lg overflow-hidden"
            />

          </div>

          

        </div>

      </>

    );
}