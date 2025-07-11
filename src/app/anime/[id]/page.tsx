
import { fetchAnime } from '@/api/anime_data'
import AnimeItem from '@/components/AnimeItem';
import type {Anime } from '@/utils/definition';

export default async function AnimeItemPage({ params }: { 
    params: { id: string}
}){

    const id = (await params).id
    console.log(`El ID es: ${id}`);

    const anime: Anime= await fetchAnime(id);

    return(
        <>
        <div>
            <p className="text-white"> Estas viendo el anime: {id}</p>
        </div>
        <div className='className=" w-full m-2 flex flex-col rounded-md items-center border-3 border-black bg-white'>

            <AnimeItem {...anime}/>

        </div>
        </>
    );
}