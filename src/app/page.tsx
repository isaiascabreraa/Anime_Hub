
//Public imports
import Image from 'next/image'
import { Suspense } from 'react';
import { fetchAnimes } from '@/api/anilist_data';
import { RobotoFont } from '@/styles/fonts';

//Private imports
import Carousel from '@/components/ui/Carousel';
// import SeasonalAnimes from '@/components/SeasonalAnime'
import { AniListResponse, Anime, Season } from '@/utils/definition';
import { getJapaneseAnimeSeason } from '@/utils/functions';
// import TopAnimeList from '@/components/TopAnimeList';





export default async function Home() {

  const banner_path = '/Multimedia/Branding/Banner-Collage4.png'
  const { current_year } = getJapaneseAnimeSeason()


  //Fetch SEASON ANIMES
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

  //Fetch ANIMES TOP
  const res: AniListResponse<Anime> = await fetchAnimes({fields: 'coverImage { extraLarge }', sort: ['POPULARITY_DESC']});
  const topAnimes: Anime[] = res.data.Page.media
  const topAnimePictures: string[] = topAnimes.map( (img) => img.coverImage.extraLarge); 


  return (
    <main>
      <section>
        <div className='relative w-full h-120 sm:h-125 md:h-130 lg:h-160 xl:h-180'>
          <Image src={banner_path} alt='AnimeHub Banner' fill className='brightness-75 object-cover'/>

          <p className="absolute p-2 z-20 text-lg sm:text-xl md:text-2xl bottom-5 left-5 bg-slate-700">
          ¡Nuevo animes de temporada! </p>

        </div>
        
      </section>

      <section>
        <div className='p-5 bg-slate-900'>

          <h1 className={`${RobotoFont.className} p-5 font-semibold text-5xl text-center text-white`}>
            Estrenos de temporada</h1>
        
          {seasonData.map(({season, animes}) => {
            const imageUrls = animes.map(anime => anime.coverImage?.extraLarge).filter(Boolean);
            
            return (
              <div key={season} className='flex flex-col gap-5 p-10 items-center bg-slate-950'> 
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


      <section className='p-5 flex flex-col w-full gap-5 bg-slate-900'>
        <h1 className={`${RobotoFont.className} font-semibold text-2xl sm:text-3xl md:text-4xl text-center text-white`}>
          Mas Populares
        </h1>
        
        <div className='flex justify-center items-center w-full '>
          <div className='grid grid-cols-5 w-full sm:grid-cols-5 xl:grid-cols-10 gap-2'>
            {topAnimePictures.slice(0, 20).map((img, i) => (
              <div key={i} className='relative aspect-[4/5] w-full'>
                <Image src={img} alt={`Top Anime ${i + 1}`} fill className='object-cover rounded-lg'/>
              </div>
            ))}
          </div>
        </div>
        
      </section>









    </main>

  );
}
