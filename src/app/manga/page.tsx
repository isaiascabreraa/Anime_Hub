
import TopMangaList from '@/components/TopMangaList';

export default function MangaPage() {
  return (
    <main>
      <section className='p-5 flex flex-col gap-5'>
        <h1 className='text-5xl text-center text-white'>Ranking de Mangas</h1>
        <TopMangaList />
      </section>
    </main>
  );
}