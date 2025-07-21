
import { AniListResponse, Anime } from '@/utils/definition';
import ItemShowcase from './ItemShowcase';
import { fetchAnimes } from '@/api/anilist_data';

export default async function TopAnimeList() {

  const fields: string = `
          id
          title { romaji }
          coverImage { extraLarge }
          rankings {
            rank
            type
            allTime
            context
            season
            year
          }
          `

const topAnimes: Anime[] = [];

for (let page = 1; page <= 4; page++) {
  const res: AniListResponse<Anime> = await fetchAnimes({
    fields, page, perPage: 25, sort: ['SCORE_DESC'],
  });

  topAnimes.push(...res.data.Page.media);
}


  return (
    <section className="p-5 flex flex-col items-center gap-5 bg-white">
      <ItemShowcase items={topAnimes} type="anime" rank="black" />
    </section>
  );
}
