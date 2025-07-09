
import TopMangaList from '@/components/TopMangaList';

export default function MangaPage() {
  return (
    <main>
      <section className='p-5 flex flex-col gap-5 bg-gray-200'>
        <h1 className='text-5xl text-center text-black'>Ranking de Mangas</h1>
        <TopMangaList />
      </section>
    </main>
  );
}