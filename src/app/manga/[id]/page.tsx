
import { fetchManga } from '@/api/manga_data'
import MangaItem from '@/components/MangaItem';
import type { Manga } from '@/utils/definition';

export default async function MangaItemPage({ params }: { 
    params: Promise<{ id: string }>
}){

    const { id } = await params
    console.log(`El ID es: ${id}`);

    const manga: Manga = await fetchManga(id);

    return(
        <>
        <div>
            <p className="text-white"> Estas viendo el anime: {id}</p>
        </div>
        <div className='className=" w-full m-2 flex flex-col rounded-md items-center border-3 border-black bg-white'>

            <MangaItem {...manga}/>

        </div>
        </>
    );
}