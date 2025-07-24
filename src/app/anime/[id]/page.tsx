
import { fetchAnimes } from '@/api/anilist_data'
import AnimeDetails from '@/components/items/AnimeDetails';
import type { AniListResponse, Anime } from '@/utils/definition';

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
        const res: AniListResponse<Anime> = await fetchAnimes({id: Number(id), fields: fields});
        const anime: Anime = res.data.Page.media[0];

        return(
            <div className='w-full flex justify-center bg-slate-700'>
                <AnimeDetails anime={anime}/>
            </div>
            
        );

    } catch(error) {
        console.log(error)
    }
}