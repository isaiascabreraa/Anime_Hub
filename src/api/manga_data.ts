
import type { ApiResponse, Manga } from '@/utils/definition';

//Pre: -
//Post: -
export async function fetchTopMangas() {
    const CLIENT_ID = process.env.MAL_CLIENT_ID!;

    const fields = `title,main_picture,related_anime,start_date,end_date,genres,studio,
    mean,status,rank,num_chapters,num_volumes,media_type`
    
    const response = await fetch(
      `https://api.myanimelist.net/v2/manga/ranking?ranking_type=all&limit=20&fields=${fields}`,
      {
        headers: {
          'X-MAL-CLIENT-ID': CLIENT_ID
        }
      }
    );

    const data: ApiResponse<Manga> = await response.json();
    return data;
}
