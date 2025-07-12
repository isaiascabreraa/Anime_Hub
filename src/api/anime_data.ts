
import type { ApiResponse, Anime } from '@/utils/definition';


//Pre: -
//Post: -
export async function fetchAnime(id: string) {
    const CLIENT_ID = process.env.MAL_CLIENT_ID!;

    const fields = `title,main_picture,related_anime,start_date,end_date,source,genres,studio,
    mean,status,rank,num_episodes,studios,media_type,average_episode_duration`
    
    const response = await fetch(
      `https://api.myanimelist.net/v2/anime/${id}?fields=${fields}`,
      {
        headers: {
          'X-MAL-CLIENT-ID': CLIENT_ID
        }
      }
    );

    const data: Anime = await response.json();
    return data;
}


//Pre: -
//Post: -
export async function fetchTopAnimes() {
    const CLIENT_ID = process.env.MAL_CLIENT_ID!;

    const fields = `title,main_picture,related_anime,start_date,end_date,source,genres,studio,
    mean,status,rank,num_episodes,studios,media_type,average_episode_duration`
    
    const response = await fetch(
      `https://api.myanimelist.net/v2/anime/ranking?ranking_type=all&limit=20&fields=${fields}`,
      {
        headers: {
          'X-MAL-CLIENT-ID': CLIENT_ID
        }
      }
    );

    const data: ApiResponse<Anime> = await response.json();
    console.log(data)
    return data;
}

//Pre: -
//Post: -
export async function fetchAnimeDescription(anime_id: number) {
  
    const CLIENT_ID = process.env.MAL_CLIENT_ID!;
    const fields = `id,title,main_picture,alternative_titles,start_date,end_date,synopsis,
    mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,
    status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,
    rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics`;
    
    const response = await fetch(
      `https://api.myanimelist.net/v2/anime/${anime_id}?fields=${fields}`,
            {
              headers: {
                'X-MAL-CLIENT-ID': CLIENT_ID
              }
            }
    );

    const data: ApiResponse<Anime> = await response.json()
    return data;
}

//Pre: -
//Post: -
export async function fetchSeasonalAnimes(season: string) {
    const CLIENT_ID = process.env.MAL_CLIENT_ID!;

    const fields = `title,main_picture,related_anime,start_date,end_date,source,genres,studio,
    mean,status,rank,num_episodes,studios,media_type,average_episode_duration`
    
        const response = await fetch(
          `https://api.myanimelist.net/v2/anime/season/2025/${season}?limit=20&fields=${fields}`,
          {
            headers: {
              'X-MAL-CLIENT-ID': CLIENT_ID
            }
          }
        );
        const data: ApiResponse<Anime> = await response.json();
        return data;
}


//Pre: -
//Post: -
export async function fetchImage() {
    const CLIENT_ID = process.env.MAL_CLIENT_ID!;

    const fields = `main_picture`

    const response = await fetch(
      `https://api.myanimelist.net/v2/anime/ranking?ranking_type=all&limit=10&fields=${fields}`,
      {
        headers: {
          'X-MAL-CLIENT-ID': CLIENT_ID
        }
      }
    );
    
    const res:  ApiResponse<Anime> = await response.json()
    const images = res.data.map((item) => item.node.main_picture.large)

    return images
}