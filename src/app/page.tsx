
//Public imports
import Image from 'next/image'
import { Suspense } from 'react';
import { fetchAnimes } from '@/api/anilist_data';
import { RobotoFont } from '@/styles/fonts';

//Private imports
import Carousel from '@/components/ui/Carousel';
import SeasonalAnimes from '@/components/SeasonalAnime'
import { AniListResponse, Anime, Season } from '@/utils/definition';
import { getJapaneseAnimeSeason } from '@/utils/functions';





export default async function Home() {

  const banner_path = '/Multimedia/Branding/Banner-Collage4.png'
  const { current_season, current_year } = getJapaneseAnimeSeason()

   const seasons: Season[] = ['WINTER', 'SPRING', 'SUMMER', 'FALL'];

    const fetchSeasonAnimes = async (season: Season) => {
    const res: AniListResponse<Anime> = await fetchAnimes({
      season,
      seasonYear: current_year,
      fields: 'coverImage { extraLarge }'
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


  return (
    <main>
      <section>
        <div className='relative w-full aspect-[16/6]'>
          <Image src={banner_path} alt='AnimeHub Banner' fill className='brightness-75'/>

          <p className="absolute p-2 z-20 text-lg sm:text-xl md:text-2xl bottom-5 left-5 bg-orange-500">
          ¡Nuevo animes de temporada! </p>

        </div>
        
      </section>


      <section>
        <div>
          <h1 className={`${RobotoFont.className} p-5 font-semibold text-5xl text-center text-white`}>
            Estrenos de temporada</h1>
        
          {seasonData.map(({season, animes}) => {
            const imageUrls = animes.map(anime => anime.coverImage?.extraLarge).filter(Boolean);
            
            return (
              <div key={season} className='flex flex-col gap-5 p-10 items-center'> 
                <h2 className={`${RobotoFont.className} font-semibold text-5xl text-center text-white`}>
                  {season}
                </h2>
                
                <div className='w-full h-full'>
                  <Suspense>
                    <Carousel images={imageUrls as string[]}/>
                  </Suspense>
                </div>
              </div>
            )
          })}
        
        </div>
      </section>

      <section>
        <h1 className={`${RobotoFont.className} font-semibold pt-10 pb-10 text-2xl sm:text-3xl md:text-4xl text-center text-white`}> Estrenos de Temporada</h1>
        <Suspense>
          <SeasonalAnimes season={current_season}/>
        </Suspense>
      </section>



    </main>

  );
}
