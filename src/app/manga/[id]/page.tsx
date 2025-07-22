
import { fetchMangas } from '@/api/anilist_data'
import MangaDetails from '@/components/MangaDetails';
import type { AniListResponse, Manga } from '@/utils/definition';

export default async function MangaItemPage({ params }: { 
    params: Promise<{ id: string }>
}){
    const id = (await params).id
    const fields = `
            id
            title { romaji }
            coverImage { extraLarge }
            description
            status
            chapters
            volumes
            genres
        `;
    
    try {
        const res: AniListResponse<Manga> = await fetchMangas({id: Number(id), fields: fields});
        const manga: Manga = res.data.Page.media[0];

        return(
            <div className='w-full flex justify-center bg-slate-700'>
                <MangaDetails manga={manga}/>
            </div>
        );

    } catch(error) {
        console.log(error)
    }
}