
import { Manga } from '@/utils/definition'
import Image from 'next/image'

const cleanSynopsis = (text: string) => {
  return text
    .replace(/<br>/g, '\n')
    .replace(/<[^>]*>/g, '')
    .replace(/\n\n+/g, '\n\n')
    .trim();
};


export default function AnimeDetails({manga} : {manga: Manga}) {

    return(
        <>
        <div className='p-5 flex flex-col w-full max-w-250 gap-5 shadow-[0_0_10px_#000000] bg-slate-800'>

          <div>
            <p> Title: {`${manga.title.romaji}`}</p>
          </div>

          <div className='flex'>
            
            <Image src={manga.coverImage?.extraLarge} alt={manga.title?.romaji ?? "Manga"} width={200} height={200}
              className="shadow-[0_0_10px_#000000]"/>

              <div className='p-5 w-full'>
                <p className="whitespace-pre-line"> Description: {cleanSynopsis(manga.description)}</p>
              </div>

          </div>

        </div>

      </>

    );
}