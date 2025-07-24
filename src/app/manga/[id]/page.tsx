
import type { Manga } from '@/utils/definition';
import { getManga } from '@/utils/functions';

import MangaDetails from '@/components/items/MangaDetails';

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
        const manga: Manga = await getManga(fields, Number(id));
 
        return(
            <div className='w-full flex justify-center bg-slate-700'>
                <MangaDetails manga={manga}/>
            </div>
        );

    } catch(error) {
        console.log(error)
    }
}