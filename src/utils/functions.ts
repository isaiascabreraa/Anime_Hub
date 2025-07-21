
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