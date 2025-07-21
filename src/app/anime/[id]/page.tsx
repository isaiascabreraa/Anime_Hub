
import { fetchAnimes } from '@/api/anilist_data'
import AnimeDetails from '@/components/AnimeDetails';
import type { AniListResponse, Anime } from '@/utils/definition';

export default async function AnimeItemPage({ params }: { 
    params: Promise<{ id: string }>
}){
    const id = (await params).id
    const fields: string = `
          id
          title { romaji }
          coverImage { large medium color extraLarge }
          startDate { year month day }
          endDate { year month day }
          source
          genres
          meanScore
          episodes
          trailer {
          id
          site
          thumbnail
        }`


    try {
            const res: AniListResponse<Anime> = await fetchAnimes({id: Number(id), fields: fields});
            const anime: Anime = res.data.Page.media[0];

            return(
                <>
                <div className='className=" w-full m-2 flex flex-col rounded-md items-center border-3 border-black bg-white'>
                    <AnimeDetails {...anime}/>
                </div>
                </>
            );

    } catch(error) {
        console.log(error)
    }
}