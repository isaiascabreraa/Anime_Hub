
//My Anime List (MAL) API

//Pre: -
//Post: -
export async function fetchItem(id: string, type: string, fields: string) {
    
    const CLIENT_ID = process.env.MAL_CLIENT_ID;
    if (!CLIENT_ID) {
      throw new Error('MAL_CLIENT_ID is not defined in environment variables');
    }
    
    const response = await fetch(
      `https://api.myanimelist.net/v2/${type}/${id}?fields=${fields}`,
      {
        headers: {
          'X-MAL-CLIENT-ID': CLIENT_ID
        }
      }
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch ranking data: ${response.status} ${response.statusText}`);
    }

    try {
      const res = await response.json();
      return res;

    } catch (error) {
      throw new Error(`Failed to parse JSON response: ${error}`);
    }
}


//Pre: -
//Post: -
export async function fetchTopRanking(type: string, fields: string) {
    
    const CLIENT_ID = process.env.MAL_CLIENT_ID;
    if (!CLIENT_ID) {
      throw new Error('MAL_CLIENT_ID is not defined in environment variables');
    }

    const response = await fetch(
      `https://api.myanimelist.net/v2/${type}/ranking?ranking_type=all&limit=20&fields=${fields}`,
      {
        headers: {
          'X-MAL-CLIENT-ID': CLIENT_ID
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch ranking data: ${response.status} ${response.statusText}`);
    }

    try {
      const res = await response.json();
      return res;

    } catch (error) {
      throw new Error(`Failed to parse JSON response: ${error}`);
    }
}
