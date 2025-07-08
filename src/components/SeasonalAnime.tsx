
import Image from 'next/image';
import { fetchSeasonalAnimes } from "@/api/anime_data";

export default async function SeasonalAnimes() {

    const res = await fetchSeasonalAnimes();
    const seasonalAnimes = res.data.map((entry) => entry.node);

    return(
        <section>
            <h2>Seasonal Animes</h2>
            <div className='flex flex-wrap gap-20'>
                {seasonalAnimes.map((anime) => (
                    <div key={anime.id}>
                        <Image 
                            src={anime.main_picture?.medium}
                            alt=''
                            width={150}
                            height={150}/>
                    </div>
                ))}
            </div>

        </section>
    );
}