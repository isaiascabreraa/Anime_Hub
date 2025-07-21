
import { fetchMangas } from '@/api/anilist_data'
import MangaItem from '@/components/MangaItem';
import type { AniListResponse, Manga } from '@/utils/definition';

export default async function MangaItemPage({ params }: { 
    params: Promise<{ id: string }>
}){
    const { id } = await params
    const fields: string = `
          id
          title { romaji }
          coverImage { large medium color extraLarge }
          startDate { year month day }
          endDate { year month day }
          source
          genres
          meanScore`
   
    const res: AniListResponse<Manga> = await fetchMangas({id: Number(id), fields: fields});
    const manga: Manga = res.data.Page.media[0];

    return(
        <>
        <div className='className=" w-full m-2 flex flex-col rounded-md items-center border-3 border-black bg-white'>

            <MangaItem {...manga}/>

        </div>
        </>
    );
}