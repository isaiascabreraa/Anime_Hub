
import { AniListResponse, Manga } from '@/utils/definition';
import ItemShowcase from './ItemShowcase';
import { fetchMangas } from '@/api/anilist_data';

export default async function TopMangaList() {

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
              
    const topMangas: Manga[] = [];
    
    for (let page = 1; page <= 4; page++) {
      const res: AniListResponse<Manga> = await fetchMangas({
        fields, page, perPage: 25, sort: ['SCORE_DESC'],
      });
    
      topMangas.push(...res.data.Page.media);
    }

  return (
    <section className="p-5 flex flex-col items-center gap-5 bg-white">
      <ItemShowcase items={topMangas} type="manga" rank='black'/>
    </section>
  );
}
