
//Pre: Only for animes. Mangas doesnt have a broadcast season.
//Post: -
export async function fetchSeasonalAnimes(season: string, year: number) {

    const validSeasons = ["WINTER", "SPRING", "SUMMER", "FALL"];
  const seasonEnum = season.toUpperCase();
  const seasonYearNum = Number(year);

  if (!validSeasons.includes(seasonEnum)) {
    throw new Error(`Season inválida: ${season}`);
  }

  console.log('Variables enviadas:', { season: seasonEnum, seasonYear: seasonYearNum });

    const query = `
    query ($season: MediaSeason, $seasonYear: Int) {
        Page(perPage: 50) {
        media(season: $season, seasonYear: $seasonYear, type: ANIME, isAdult: false) {
            id
            title { romaji }
            coverImage { large medium color extraLarge }
            startDate { year month day }
            endDate { year month day }
            source
            genres
            meanScore
            episodes
        }
        }
    }`;

     const variables = {
    season: seasonEnum,
    seasonYear: seasonYearNum
  };

    const url = 'https://graphql.anilist.co',
    options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: variables
        })
    };
    
    try {

        const response = await fetch(url, options)

        if (!response.ok) {
        throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();

        if(result.errors) {
            throw new Error(`GraphQL error: ${JSON.stringify(result.errors)}`);
        }

        return result

    } catch (error) {
      throw new Error(`Error al obtener animes de temporada: ${error}`);
    }
}