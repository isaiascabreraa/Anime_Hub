
import { ApiResponse, Manga } from '@/utils/definition';
import ItemShowcase from './ItemShowcase';
import { fetchTopMangas } from '@/api/manga_data';

export default async function TopMangaList() {
  const res = await fetchTopMangas();
  const topMangas = (res as ApiResponse<Manga>).data.map((entry) => entry.node);

  return (
    <section className="flex flex-col items-center gap-5">
      <ItemShowcase items={topMangas} type="manga" />
    </section>
  );
}
