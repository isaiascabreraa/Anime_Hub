
import { Suspense } from 'react';

import { RobotoFont } from '@/styles/fonts';
import { ItemImage } from '@/utils/definition';
import { getAnimes, getAllSeasonalAnimes, getJapaneseAnimeSeason } from '@/utils/functions';

import Banner from '@/components/ui/Banner'
import Carousel from '@/components/ui/Carousel';
import GridLayout from '@/components/ui/GridLayout';
import SeasonLayout from '@/components/SeasonLayout';
import NavigationMenu from '@/components/ui/NavigationMenu'

//Pre: -
//Post: - 
export default async function Home() {

  const { current_year } = getJapaneseAnimeSeason()

  const topAnimes = await getAnimes('id, coverImage { extraLarge }', ['POPULARITY_DESC'])
  const topTrending = await getAnimes('id, coverImage { extraLarge }', ['TRENDING_DESC'])
  const seasonAnimes = await getAllSeasonalAnimes(current_year)

  const banner_path = '/Multimedia/Branding/Banner-Collage4.png'
  const imagesTrend: ItemImage[] = topTrending.map((anime) => ({id: anime.id, image: anime.coverImage?.extraLarge})).filter(Boolean);

  return (
    <main>

      {/*Banner Section*/}
      <Banner path_image={banner_path} />

      <section>
        {/*Navigation Menu*/}
        <div className='p-5 bg-slate-900'>
          <NavigationMenu />
        </div>

        {/* Trending Animes Section*/}
        <section className='p-5 flex flex-col w-full gap-5 bg-slate-900'>
          <h1 className={`p-5 ${RobotoFont.className} font-semibold text-5xl text-white`}> Trending </h1>
          <Suspense>
            <Carousel images={imagesTrend}/>
          </Suspense>
        </section>

        {/* Seasonal Animes Section*/}
        <SeasonLayout seasonalAnimes={seasonAnimes}/>
      </section>


      {/* Top Animes Section*/}
      <section className='p-5 flex flex-col w-full gap-5 bg-slate-900'>
        <h1 className={`${RobotoFont.className} font-semibold text-2xl sm:text-3xl md:text-4xl text-center text-white`}> Most Popular </h1>
        <Suspense>
          <GridLayout items={{items: topAnimes, type: 'ANIME'}}/>
        </Suspense>
      </section>

    </main>
  );
}
