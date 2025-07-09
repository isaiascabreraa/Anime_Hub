
import TopAnimeList from '@/components/TopAnimeList';

export default function AnimePage() {
  return (
    <main>
      <section className='p-5 flex flex-col gap-5 bg-gray-200'>
        <h1 className='text-5xl text-center text-black'>Ranking de Animes</h1>
        <TopAnimeList />
      </section>
    </main>
  );
}
