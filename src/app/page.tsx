
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <p>Inicio de AnimeHub</p>
      <Image 
        src={'/Multimedia/Branding/AnimeHub_logo.png'} 
        alt={'Logo from AnimeHub'} 
        width={300}
        height={300}/>
    </div>
  );
}
