

import type { Anime } from '@/utils/definition';
import { getAnime } from '@/utils/functions';

import AnimeDetails from '@/components/items/AnimeDetails';

export default async function AnimeItemPage({ params }: { 
    params: Promise<{ id: string }>
}){
    const id = (await params).id
    const fields: string = `
          id
          title { romaji }
          coverImage { extraLarge }
          startDate { year month day }
          endDate { year month day }
          source
          genres
          meanScore
          episodes
          description
          trailer { id site }`

    try {
        const anime: Anime = await getAnime(fields, Number(id));

        return(
            <div className='w-full flex justify-center bg-slate-700'>
                <AnimeDetails anime={anime}/>
            </div>
            
        );

    } catch(error) {
        console.log(error)
    }
}