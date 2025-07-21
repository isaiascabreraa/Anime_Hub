
import { AnimeFilters } from '@/utils/definition'

//Pre: Only for animes. Mangas doesnt have a broadcast season.
//Post: -
export async function fetchAnimes({id, search, season, seasonYear, fields, page = 1, perPage = 50 }: {
  id?: number, search?: string, season?: 'WINTER' | 'SPRING' | 'SUMMER' | 'FALL', seasonYear?: number, fields: string, page?: number, perPage?: number}) {

  const query = `
    query ($id: Int, $search: String, $season: MediaSeason, $seasonYear: Int, $page: Int, $perPage: Int) {
      Page(page: $page, perPage: $perPage) {
        media(id: $id, search: $search, season: $season, seasonYear: $seasonYear, type: ANIME, isAdult: false) {
          ${fields}
        }
      }
    }
  `;

 const variables: AnimeFilters = { page, perPage };
    if (id) variables.id = id;
    if (search) variables.search = search;
    if (season) variables.season = season;
    if (seasonYear) variables.seasonYear = seasonYear;

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