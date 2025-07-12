
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { InterFont, Russo_OneFont, Familjen_GroteskFont } from '@/styles/fonts';

import Link from 'next/link';
import Image from 'next/image';


export const metadata: Metadata = {
  title: 'AnimeHub',
  description: 'Plataforma para gestionar tus animes y mangas',
  keywords: "anime, manga, organizar",
  icons: {
    icon: '/Multimedia/Branding/AnimeHub_logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }){
  
  const logo_path = "/Multimedia/Branding/AnimeHub_logo.png";

  return (
    <html lang="en">
    <body className={`${InterFont.className} antiliased`}>

      <header className='p-5 flex flex-col md:flex-row gap-5'>
        <div>
          <Link href={'/'} className='flex flex-col items-center text-xl text-black'>
            <picture>
              <Image src={logo_path} alt='Logo AnimeHub' width={120} height={120}/>
            </picture>

            <p className={`text-3xl text-white ${Russo_OneFont.className} antiliased`}>AnimeHub</p>
          </Link>
        </div>

        <nav className={`${Familjen_GroteskFont.className} antiliased w-full flex justify-center items-center gap-10 text-center text-black`}>
          
          <Link href='/anime/seasonal'>
            <p className='p-2 rounded-xl text-2xl bg-orange-300'>Temporada Anime</p>
          </Link>

          <Link href={'/anime'}>
            <p className='p-2 rounded-xl text-2xl bg-orange-300'>Top Animes</p>
          </Link>

          <Link href={'/manga'}>
            <p className='p-2 rounded-xl text-2xl bg-orange-300'>Top Mangas</p>
          </Link>

        </nav>
      </header>

      {children}

      <footer>
        <div  className='p-10 '></div>
      </footer>

    </body>
    </html>
  );
}