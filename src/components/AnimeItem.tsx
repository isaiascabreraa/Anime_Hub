
import { Anime } from '@/utils/definition'
// import { formatText, formatEmptyNumbers, formatEmptyString } from '@/utils/format'
import Image from 'next/image'
import Link  from 'next/link';

export default function AnimeItem(anime: Anime) {

    console.log(anime.coverImage); // Debería ser { large: 'https://...' }


    return(
        <>
  <div className="w-full flex flex-col flex-wrap text-black text-center">
    <p className="border-b-5 border-black">
      {anime.title?.romaji ?? "Título no disponible"}
    </p>

    <div className="flex justify-center gap-10 border-b-5 border-black">
      <p>Start Date: {anime.startDate ? `${anime.startDate.day}/${anime.startDate.month}/${anime.startDate.year}` : 'N/A'}</p>

      <p>End Date: {anime.endDate ? `${anime.endDate.day}/${anime.endDate.month}/${anime.endDate.year}` : 'N/A'}</p>

    </div>

    {anime.genres && anime.genres.length > 0 && (
      <p className="pl-2 pr-2 flex flex-wrap justify-center w-full border-b-5 border-black">
        Genres: {anime.genres.join(", ")}
      </p>
    )}

    {anime.studios && anime.studios.length > 0 && (
      <p className="pl-2 pr-2 flex flex-wrap justify-center w-full border-b-5 border-black">
        Studios: {anime.studios.map((studio) => studio.name).join(", ")}
      </p>
    )}
  </div>

  <div className="flex p-5">
    <Link href={`/anime/${anime.id}`}>
      <Image
        src={anime.coverImage?.extraLarge || "/placeholder.png"}
        alt={anime.title?.romaji ?? "Anime"}
        width={180}
        height={180}
        className="shadow-[0_0_10px_#000000]"
      />
    </Link>

    <div className="p-5 flex flex-col flex-wrap text-black">
      
      <p>Source: {anime.source ?? "N/A"}</p>
    </div>
  </div>
</>


    );
}