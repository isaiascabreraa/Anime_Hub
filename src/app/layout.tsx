
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { InterFont, Russo_OneFont, Familjen_GroteskFont } from '@/styles/fonts';

import Link from 'next/link';
// import Image from 'next/image';


export const metadata: Metadata = {
  title: 'AnimeHub',
  description: 'Plataforma para gestionar tus animes y mangas',
  keywords: "anime, manga, organizar",
  icons: {
    icon: '/Multimedia/Others/Icon1.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }){

  return (
    <html lang="en">
    <body className={`${InterFont.className} antiliased`}>

      <header className='p-10 flex flex-col items-center md:flex-row md:justify-between gap-5 bg-black'>
        
        <div className='flex items-center'>
          <Link href={'/'} className='flex flex-col items-center text-xl text-black'>
            <p className={`text-3xl text-white ${Russo_OneFont.className} antiliased`}>AnimeHub</p>
          </Link>
        </div>

        <nav className={`${Familjen_GroteskFont.className} font-medium antiliased flex justify-center items-center gap-10 text-center text-black`}>
          
          <Link href="/anime/seasonal">
            <p className="p-2 rounded text-white text-lg sm:text-xl md:text-2xl bg-orange-500">
              Temporada Anime
            </p>
          </Link>

          <Link href="/anime">
            <p className="p-2 rounded text-white text-lg sm:text-xl md:text-2xl bg-orange-500">
              Top Animes
            </p>
          </Link>

          <Link href="/manga">
            <p className="p-2 rounded text-white text-lg sm:text-xl md:text-2xl bg-orange-500">
              Top Mangas
            </p>
          </Link>

          <Link href={'/Account'}>
            <p className='p-2 rounded text-white text-lg sm:text-xl md:text-2xl bg-orange-500'>Account</p>
          </Link>

        </nav>
      </header>

      {children}

      <footer className='p-10'>
        <nav className='flex'>
           <Link href={'/Account'}>
            <p className='p-3 rounded text-2xl text-white bg-orange-500'>Account</p>
          </Link>
        </nav>
      </footer>

    </body>
    </html>
  );
}