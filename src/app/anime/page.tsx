
import TopAnimeList from '@/components/TopAnimeList';

export default function AnimePage() {
  return (
    <main>
      <section className='p-5 flex flex-col gap-5 bg-black'>
        <h1 className='text-5xl text-center text-white'>Ranking de Animes</h1>
        <TopAnimeList />
      </section>
    </main>
  );
}
