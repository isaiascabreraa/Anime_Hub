
import { ApiResponse, Manga } from '@/utils/definition';
import ItemShowcase from './ItemShowcase';
import { fetchTopRanking } from '@/api/myanimelist_data';

export default async function TopMangaList() {

  const fields = `title,main_picture,related_anime,start_date,end_date,genres,studio,
    mean,status,rank,num_chapters,num_volumes,media_type`

  const type = 'manga'

  const res: ApiResponse<Manga> = await fetchTopRanking(type, fields);
  const topMangas = res.data.map((entry) => entry.node);

  return (
    <section className="p-5 flex flex-col items-center gap-5 bg-white">
      <ItemShowcase items={topMangas} type="manga" />
    </section>
  );
}
