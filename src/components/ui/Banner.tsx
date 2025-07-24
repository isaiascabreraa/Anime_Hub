
import Image from 'next/image'

export default function Banner( { path_image } : { path_image: string } ){

    return (
        <section>
                <div className='relative w-full h-120 '>
                  <Image src={path_image} alt='AnimeHub Banner' fill className='object-cover'/>
                  <p className="absolute p-2 z-20 text-lg sm:text-xl md:text-2xl bottom-5 left-5 rounded-md bg-slate-700">Seasonal Animes Breaking the Internet </p>
        
                </div>
              </section>

    );
}