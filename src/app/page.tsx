
//Public imports
import Image from 'next/image'
import { Suspense } from 'react';
import { fetchAnimes } from '@/api/anilist_data';
import { RobotoFont } from '@/styles/fonts';

//Private imports
import Carousel from '@/components/ui/Carousel';
import GridLayout from '@/components/ui/GridLayout';
import SearchSeason from '@/components/ui/SearchSeason'
import { AniListResponse, Anime, ItemImage, Season } from '@/utils/definition';
import { getJapaneseAnimeSeason } from '@/utils/functions';



export default async function Home() {

  // const banner_path = '/Multimedia/Branding/Banner-Collage4.png'
  const { current_year } = getJapaneseAnimeSeason()

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
      <section>
        <div className='relative w-full h-120 '>
          <Image src={seasonData[0].animes[0].bannerImage} alt='AnimeHub Banner' fill className='brightness-75 object-cover'/>

          <p className="absolute p-2 z-20 text-lg sm:text-xl md:text-2xl bottom-5 left-5 rounded-md bg-slate-700"> Trending This Week: The Anime Everyone’s Tracking </p>

        </div>
      </section>

      <section>
        <div className='p-5 flex flex-col text-center gap-20 bg-slate-900'>

          <div className='flex justify-center'>
            <h1 className={`${RobotoFont.className} p-5 font-semibold text-5xl text-center text-white`}> {`Seasonal Animes`}</h1>
          </div>

          <SearchSeason />

      
          {seasonData.map(({season, animes}) => {
            const images: ItemImage[] = animes.map((anime) => ({id: anime.id, image: anime.coverImage?.extraLarge})).filter(Boolean);
            return (
              <div key={season} className='flex flex-col items-center rounded-md gap-5 bg-slate-800'>

                <h2 className={`p-5 ${RobotoFont.className} font-semibold text-5xl text-center text-white`}>
                  {`${season} SEASON`}
                </h2>
                
                <div className='p-2 w-full h-full shadow-[0_0_10px_#000000] bg-slate-900'>
                  <Suspense>
                    <Carousel images={images}/>
                  </Suspense>
                </div>
              </div>
            )
          })}
        
        </div>
      </section>

      <section className='p-5 flex flex-col w-full gap-5 bg-slate-900'>
        <h1 className={`${RobotoFont.className} font-semibold text-2xl sm:text-3xl md:text-4xl text-center text-white`}> Mas Populares </h1>

        <Suspense>
          <GridLayout items={{items: topAnimes, type: 'ANIME'}}/>
        </Suspense>
        
      </section>
    </main>

  );
}
