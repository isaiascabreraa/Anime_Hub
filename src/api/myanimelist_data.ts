
//My Anime List (MAL) API

//Pre: -
//Post: -
export async function fetchItem(id: string, type: string, fields: string) {
    const CLIENT_ID = process.env.MAL_CLIENT_ID!;
    
    const response = await fetch(
      `https://api.myanimelist.net/v2/${type}/${id}?fields=${fields}`,
      {
        headers: {
          'X-MAL-CLIENT-ID': CLIENT_ID
        }
      }
    );
    const data = await response.json();
    return data;
}


//Pre: -
//Post: -
export async function fetchTopRanking(type: string, fields: string) {
    const CLIENT_ID = process.env.MAL_CLIENT_ID!;
    
    const response = await fetch(
      `https://api.myanimelist.net/v2/${type}/ranking?ranking_type=all&limit=20&fields=${fields}`,
      {
        headers: {
          'X-MAL-CLIENT-ID': CLIENT_ID
        }
      }
    );
    const data = await response.json();
    return data;
}

//Pre: Only for animes. Mangas doenst have a broadcast season.
//Post: -
export async function fetchSeasonalAnimes(season: string, fields: string) {
    const CLIENT_ID = process.env.MAL_CLIENT_ID!;
    
        const response = await fetch(
          `https://api.myanimelist.net/v2/anime/season/2025/${season}?limit=20&fields=${fields}`,
          {
            headers: {
              'X-MAL-CLIENT-ID': CLIENT_ID
            }
          }
        );

        const data = await response.json();
        return data;
}


//Pre: -
//Post: -
export async function fetchImage(type: string) {
    const CLIENT_ID = process.env.MAL_CLIENT_ID!;

    const fields = `main_picture`

    const response = await fetch(
      `https://api.myanimelist.net/v2/${type}/ranking?ranking_type=all&limit=10&fields=${fields}`,
      {
        headers: {
          'X-MAL-CLIENT-ID': CLIENT_ID
        }
      }
    );
    
    const res = await response.json()
    return res
}