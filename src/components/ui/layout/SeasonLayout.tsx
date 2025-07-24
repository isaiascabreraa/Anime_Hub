
import { Suspense } from 'react';

import { RobotoFont } from '@/styles/fonts';
import { AllSeasons, ItemImage } from '@/utils/definition';

import Carousel from '@/components/ui/Carousel';

//Pre: -
//Post: Return a layout with banners of all seasonal animes of the year.
export default function SeasonLayout({ seasonalAnimes } : { seasonalAnimes: AllSeasons}) {

    return(

        <div className='p-5 flex flex-col gap-10 bg-slate-900'>
          
          <h1 className={`p-5 ${RobotoFont.className} font-semibold text-5xl text-white`}> {`Seasonal Animes`}</h1>
          {seasonalAnimes.map(({season, animes}) => {
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

    );
    
}