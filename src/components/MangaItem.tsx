
import { Manga } from '@/utils/definition'
// import { formatText, formatEmptyNumbers, formatEmptyString } from '@/utils/format'
import Image from 'next/image'
import Link from 'next/link';

export default function AnimeItem(manga: Manga) {

    return(
        <>
  <div className="w-full flex flex-col flex-wrap text-black text-center">
    <p className="border-b-5 border-black">
      {manga.title?.romaji ?? "Título no disponible"}
    </p>

    <div className="flex justify-center gap-10 border-b-5 border-black">
      <p>
        Start Date:{" "}
        {manga.startDate
          ? `${manga.startDate.day}/${manga.startDate.month}/${manga.startDate.year}`
          : "N/A"}
      </p>
      <p>
        End Date:{" "}
        {manga.endDate
          ? `${manga.endDate.day}/${manga.endDate.month}/${manga.endDate.year}`
          : "N/A"}
      </p>
    </div>

    {manga.genres && manga.genres.length > 0 && (
      <p className="pl-2 pr-2 flex flex-wrap justify-center w-full border-b-5 border-black">
        Genres: {manga.genres.join(", ")}
      </p>
    )}

  </div>

  <div className="flex p-5">
    <Link href={`/manga/${manga.id}`}>
      <Image
        src={manga.coverImage?.extraLarge || "/placeholder.png"}
        alt={manga.title?.romaji ?? "Manga"}
        width={180}
        height={180}
        className="shadow-[0_0_10px_#000000]"
      />
    </Link>

    <div className="p-5 flex flex-col flex-wrap text-black">
      <p>Chapters: {manga.num_chapters ?? "N/A"}</p>
      <p>Volumes: {manga.num_volumes ?? "N/A"}</p>
      
    </div>
  </div>
</>

    );
}