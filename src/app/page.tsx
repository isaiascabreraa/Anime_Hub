
//Public imports
import Image from 'next/image'
import { Suspense } from 'react';
import { fetchAnimes } from '@/api/anilist_data';
import { RobotoFont } from '@/styles/fonts';

//Private imports
import Carousel from '@/components/ui/Carousel';
import GridLayout from '@/components/ui/GridLayout';
import NavigationMenu from '@/components/ui/NavigationMenu'
import { AniListResponse, Anime, ItemImage, Season } from '@/utils/definition';
import { getJapaneseAnimeSeason } from '@/utils/functions';



export default async function Home() {

  const banner_path = '/Multimedia/Branding/Banner-Collage4.png'
  const { current_year } = getJapaneseAnimeSeason()

  //Fetch TRENDING
  const res_trend: AniListResponse<Anime> = await fetchAnimes({fields: 'id, coverImage { extraLarge }', sort: ['TRENDING_DESC']})
  const topTrending: Anime[] = res_trend.data.Page.media
   const imagesTrend: ItemImage[] = topTrending.map((anime) => ({id: anime.id, image: anime.coverImage?.extraLarge})).filter(Boolean);

  //Fetch SEASON ANIMES
  const seasons: Season[] = ['WINTER', 'SPRING', 'SUMMER', 'FALL'];

    const fetchSeasonAnimes = async (season: Season) => {
    const res: AniListResponse<Anime> = await fetchAnimes({
      season,
      seasonYear: current_year,
      fields: 'id, coverImage { extraLarge }, bannerImage'
    });
    return res.data.Page.media;
  };
  const seasonResults = await Promise.all(
    seasons.map(season => fetchSeasonAnimes(season))
  );
  const seasonData = seasons.map((season, index) => ({
    season,
    animes: seasonResults[index]
  })).filter(data => data.animes.length > 0);

  //Fetch ANIMES TOP
  const res: AniListResponse<Anime> = await fetchAnimes({fields: 'id, coverImage { extraLarge }', sort: ['POPULARITY_DESC']});
  const topAnimes: Anime[] = res.data.Page.media

  return (
    <main>


      {/*Banner Section*/}
      <section>
        <div className='relative w-full h-120 '>
          <Image src={banner_path} alt='AnimeHub Banner' fill className='object-cover'/>
          <p className="absolute p-2 z-20 text-lg sm:text-xl md:text-2xl bottom-5 left-5 rounded-md bg-slate-700">Seasonal Animes Breaking the Internet </p>

        </div>
      </section>


      <section>
        {/*Navigation Menu*/}
        <div className='p-5 bg-slate-900'>
          <NavigationMenu />
        </div>

        {/* Top Animes Section*/}
        <section className='p-5 flex flex-col w-full gap-5 bg-slate-900'>
          <h1 className={`p-5 ${RobotoFont.className} font-semibold text-5xl text-white`}> Trending </h1>
          <Suspense>
            <Carousel images={imagesTrend}/>
          </Suspense>
        </section>

        {/* Seasonal Animes Section*/}
        <div className='p-5 flex flex-col gap-10 bg-slate-900'>
          
          <h1 className={`p-5 ${RobotoFont.className} font-semibold text-5xl text-white`}> {`Seasonal Animes`}</h1>
    
          {seasonData.map(({season, animes}) => {
            const images: ItemImage[] = animes.map((anime) => ({id: anime.id, image: anime.coverImage?.extraLarge})).filter(Boolean);
            return (
              <div key={season} className='flex flex-col items-center rounded-xl bg-slate-800'>
                <h2 className={`p-5 ${RobotoFont.className} font-semibold text-5xl text-center text-white`}>
                  {`${season} SEASON`}
                </h2>
                
                <div className='p-5 w-full h-full bg-slate-900'>
                  <Suspense>
                    <Carousel images={images}/>
                  </Suspense>
                </div>
              </div>
            )
          })}
        </div>
      </section>


      {/* Top Animes Section*/}
      <section className='p-5 flex flex-col w-full gap-5 bg-slate-900'>
        <h1 className={`${RobotoFont.className} font-semibold text-2xl sm:text-3xl md:text-4xl text-center text-white`}> Most Populares </h1>
        <Suspense>
          <GridLayout items={{items: topAnimes, type: 'ANIME'}}/>
        </Suspense>
      </section>

    </main>

  );
}
