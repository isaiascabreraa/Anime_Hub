
import Image from 'next/image';
import SeasonalAnimes from '@/components/SeasonalAnime';

export default function Home() {
  return (
    <section>
      <p>Inicio de AnimeHub</p>
      <Image 
        src={'/Multimedia/Branding/AnimeHub_logo.png'} 
        alt={'Logo from AnimeHub'} 
        width={300}
        height={300}/>

    <div>
      <SeasonalAnimes />
    </div>

    </section>
  );
}
