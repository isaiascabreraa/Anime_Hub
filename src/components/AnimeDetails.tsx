

import { Anime } from '@/utils/definition'
import Image from 'next/image'
import { TrailerPlayer } from '@/components/ui/TrailerPlayer';

const cleanSynopsis = (text: string) => {
  return text
    .replace(/<br>/g, '\n')
    .replace(/<[^>]*>/g, '')
    .replace(/\n\n+/g, '\n\n')
    .trim();
};


export default function AnimeDetails({anime} : {anime: Anime}) {

  console.log(`${anime.description}`)

    return(
        <>
        <div className='p-5 flex flex-col w-full max-w-250 gap-5 shadow-[0_0_10px_#000000] bg-slate-800'>

          <div>
            <p> Title: {`${anime.title.romaji}`}</p>
          </div>

          <div className='flex'>
            
            <Image src={anime.coverImage?.extraLarge} alt={anime.title?.romaji ?? "Anime"} width={200} height={200}
              className="shadow-[0_0_10px_#000000]"/>

              <div className='p-5 w-full'>
                <p className="whitespace-pre-line"> Description: {cleanSynopsis(anime.description)}</p>
              </div>

          </div>


          <div className='p-5 w-3/4 mx-auto bg-slate-900'>
            <TrailerPlayer youtubeId={anime.trailer.id} className="rounded-lg overflow-hidden"/>
          </div>

          

        </div>

      </>

    );
}