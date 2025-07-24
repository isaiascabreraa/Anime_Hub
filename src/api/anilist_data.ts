
import { ItemFilters } from '@/utils/definition'

//Pre: Only for animes. Mangas doesnt have a broadcast season.
//Post: -
export async function fetchAnimes({id, search, season, seasonYear, format, fields, sort = ['POPULARITY_DESC'], page=1, perPage=50}: {
  id?: number, search?: string, season?: 'WINTER' | 'SPRING' | 'SUMMER' | 'FALL', seasonYear?: number, format?: string, fields: string, sort?: string[], page?: number, perPage?: number}) {

  const query = `
    query ($id: Int, $search: String, $season: MediaSeason, $seasonYear: Int, $format: MediaFormat, $sort: [MediaSort], $page: Int, $perPage: Int) {
      Page(page: $page, perPage: $perPage) {
      pageInfo {
          hasNextPage
        }
        media(id: $id, search: $search, format: $format season: $season, seasonYear: $seasonYear, type: ANIME, sort: $sort, isAdult: false) {
          ${fields}
        }
      }
    }
  `;

 const variables: ItemFilters = { page, perPage };
    if (id) variables.id = id;
    if (search) variables.search = search;
    if (season) variables.season = season;
    if (seasonYear) variables.seasonYear = seasonYear;
    if(format) variables.format = format;
    if (sort) variables.sort = sort;

  try {
    const response = await fetch('https://graphql.anilist.co', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();

    if (result.errors) {
      throw new Error(`GraphQL error: ${JSON.stringify(result.errors)}`);
    }

    return result;
  } catch (error) {
    throw new Error(`Error al obtener animes: ${error}`);
  }
}


//Pre: -
//Post: -
export async function fetchMangas({id, search, fields, sort = ['POPULARITY_DESC'], page = 1, perPage = 50 }: {
  id?: number, search?: string, fields: string, sort?: string[], page?: number, perPage?: number}) {

  const query = `
    query ($id: Int, $search: String, $sort: [MediaSort], $page: Int, $perPage: Int) {
      Page(page: $page, perPage: $perPage) {
        media(id: $id, search: $search, type: MANGA, sort: $sort, isAdult: false) {
          ${fields}
        }
      }
    }
  `;

 const variables: ItemFilters = { page, perPage };
    if (id) variables.id = id;
    if (search) variables.search = search;
    if (sort) variables.sort = sort;

  try {
    const response = await fetch('https://graphql.anilist.co', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();

    if (result.errors) {
      throw new Error(`GraphQL error: ${JSON.stringify(result.errors)}`);
    }

    return result;
  } catch (error) {
    throw new Error(`Error al obtener mangas: ${error}`);
  }
}



//Pre: -
//Post: -
export async function fetchRanking({id, rank, type, format, fields, sort = ['POPULARITY_DESC'], page = 1, perPage = 12 }: {
  id?: number, rank?: string, type?: string, format?: string,  fields: string, sort?: string[], page?: number, perPage?: number}) {

  const query = `
    query ($id: Int, $sort: [MediaSort], $page: Int, $perPage: Int) {
      Page(page: $page, perPage: $perPage) {
        mediaRank(id: $id, rank: $rank, type: $type, sort: $sort, isAdult: false) {
          ${fields}
        }
      }
    }
  `;

 const variables: ItemFilters = { page, perPage };
    if (id) variables.id = id;
    if (rank) variables.search = rank;
    if (type) variables.search = type;
    if (format) variables.search = format;
    if (sort) variables.sort = sort;

  try {
    const response = await fetch('https://graphql.anilist.co', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();

    if (result.errors) {
      throw new Error(`GraphQL error: ${JSON.stringify(result.errors)}`);
    }

    return result;
  } catch (error) {
    throw new Error(`Error al obtener animes: ${error}`);
  }
}