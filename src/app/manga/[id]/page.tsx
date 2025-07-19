
import { fetchItem } from '@/api/myanimelist_data'
import MangaItem from '@/components/MangaItem';
import type { Manga } from '@/utils/definition';

export default async function MangaItemPage({ params }: { 
    params: Promise<{ id: string }>
}){
    const type = 'manga'
    const { id } = await params
    const fields = `title,main_picture,related_anime,start_date,end_date,genres,studio,
    mean,status,rank,num_chapters,num_volumes,media_type`

    const manga: Manga = await fetchItem(id, type, fields);

    return(
        <>
        <div className='className=" w-full m-2 flex flex-col rounded-md items-center border-3 border-black bg-white'>

            <MangaItem {...manga}/>

        </div>
        </>
    );
}