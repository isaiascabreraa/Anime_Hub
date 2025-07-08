
import type { AnimeApiResponse } from '@/utils/definition';

//Pre: -
//Post: -
export async function fetchTopAnimes() {
    const CLIENT_ID = process.env.MAL_CLIENT_ID!;
    
        const response = await fetch(
          'https://api.myanimelist.net/v2/anime/ranking?ranking_type=all&limit=20&fields=title,main_picture,mean,rank',
          {
            headers: {
              'X-MAL-CLIENT-ID': CLIENT_ID
            }
          }
        );
        const data: AnimeApiResponse = await response.json();
        return data;
}

//Pre: -
//Post: -
export async function fetchSeasonalAnimes() {
    const CLIENT_ID = process.env.MAL_CLIENT_ID!;
    
        const response = await fetch(
          'https://api.myanimelist.net/v2/anime/season/2025/summer?limit=20&fields=title,main_picture,mean,rank',
          {
            headers: {
              'X-MAL-CLIENT-ID': CLIENT_ID
            }
          }
        );
        const data: AnimeApiResponse = await response.json();
        return data;
}