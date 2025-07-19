
import { fetchItem } from '@/api/myanimelist_data'
import AnimeItem from '@/components/AnimeItem';
import type {Anime } from '@/utils/definition';

export default async function AnimeItemPage({ params }: { 
    params: Promise<{ id: string }>
}){
    const type = 'anime'
    const id = (await params).id
    const fields = `title,main_picture,related_anime,start_date,end_date,
    source,genres,studio,mean,status,rank,num_episodes,studios,media_type,
    average_episode_duration`

    const anime: Anime = await fetchItem(id, type, fields);

    return(
        <>
        <div className='className=" w-full m-2 flex flex-col rounded-md items-center border-3 border-black bg-white'>

            <AnimeItem {...anime}/>

        </div>
        </>
    );
}