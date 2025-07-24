
import { fetchAnimes } from '@/api/anilist_data';
import { AniListResponse, Anime, Season, AllSeasons } from '@/utils/definition'


//Pre: -
//Post: -
export function getJapaneseAnimeSeason(): { current_season: 'WINTER' | 'SPRING' | 'SUMMER' | 'FALL'; current_year: number } {
  
  // Obtener hora actual en Japón (UTC+9)
  const now = new Date();
  const japanOffset = 9 * 60;
  const localOffset = now.getTimezoneOffset();
  const japanTime = new Date(now.getTime() + (japanOffset + localOffset) * 60 * 1000);

  const month = japanTime.getMonth();
  const current_year = japanTime.getFullYear();

  let current_season: 'WINTER' | 'SPRING' | 'SUMMER' | 'FALL';

  if (month >= 0 && month <= 2) {
    current_season = 'WINTER'; // Jan - Mar
  } else if (month >= 3 && month <= 5) {
    current_season = 'SPRING'; // Apr - Jun
  } else if (month >= 6 && month <= 8) {
    current_season = 'SUMMER'; // Jul - Sep
  } else {
    current_season = 'FALL';   // Oct - Dec
  }

  return { current_season, current_year };
}


//Pre: -
//Post: Return an array of all animes grouped by season.
export async function getAllSeasonalAnimes(current_year: number) {
    const seasons: Season[] = ['WINTER', 'SPRING', 'SUMMER', 'FALL'];

    const fetchSeasonAnimes = async (season: Season) => {
    const res: AniListResponse<Anime> = await fetchAnimes({
      season,
      seasonYear: current_year,
      format: 'TV',
      fields: 'id, coverImage { extraLarge }, bannerImage'
    });
      return res.data.Page.media;
    };

    const seasonResults = await Promise.all(seasons.map(season => fetchSeasonAnimes(season)));
    const seasonData: AllSeasons = seasons.map((season, index) => ({ season, animes: seasonResults[index]
    })).filter(data => data.animes.length > 0);

    return seasonData
}


//Pre: -
//Post: -
export async function getAnimes(fields: string, sort: string[]) {

  const res: AniListResponse<Anime> = await fetchAnimes({format: 'TV', fields: fields, sort: sort })
  const animes: Anime[] = res.data.Page.media

  return animes
}