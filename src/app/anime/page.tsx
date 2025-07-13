
import { RobotoFont } from '@/styles/fonts';
import TopAnimeList from '@/components/TopAnimeList';

export default function AnimePage() {
  return (
    <main>
      <section className='pt-5 pb-5 flex flex-col gap-5 bg-black'>
        <h1 className={`${RobotoFont.className} font-semibold text-5xl text-center text-white`}>Ranking de Animes</h1>
        <TopAnimeList />
      </section>
    </main>
  );
}
