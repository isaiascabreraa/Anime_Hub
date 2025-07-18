
import TopMangaList from '@/components/TopMangaList';
import { RobotoFont } from '@/styles/fonts';

export default function MangaPage() {
  return (
    <main>
      <section className='pt-5 pb-5 flex flex-col gap-5'>
        <h1 className={`${RobotoFont.className} font-semibold text-5xl text-center text-white`}> Ranking de Mangas</h1>
        <TopMangaList />
      </section>
    </main>
  );
}