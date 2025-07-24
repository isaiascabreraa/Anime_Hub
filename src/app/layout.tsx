
import Link from 'next/link';
import type { Metadata } from 'next';

import '@/styles/globals.css';
import { InterFont, Russo_OneFont, Familjen_GroteskFont } from '@/styles/fonts';

export const metadata: Metadata = {
  title: 'AnimeHub',
  description: 'Plataforma para gestionar tus animes y mangas',
  keywords: "anime, manga, organizar",
  icons: {
    icon: '/Multimedia/Others/Icon1.png',
  },
};

//Pre: -
//Post: -
export default function RootLayout({ children }: { children: React.ReactNode }){

  return (
    <html lang="en">
    <body className={`${InterFont.className} antiliased`}>

      <header className='p-10 flex flex-col items-center md:flex-row md:justify-between gap-5 bg-slate-900'>
        
        <div className='flex items-center'>
          <Link href={'/'} className='flex flex-col items-center text-xl text-black'>
            <p className={`text-3xl text-white ${Russo_OneFont.className} antiliased`}>AnimeHub</p>
          </Link>
        </div>

        <nav className={`${Familjen_GroteskFont.className} font-medium antiliased flex justify-center items-center gap-10 text-center text-black`}>
          
          <Link href="/anime/seasonal">
            <p className="p-1 rounded text-white text-lg sm:text-xl md:text-2xl bg-slate-700">
              Temporada Anime
            </p>
          </Link>

          <Link href="/anime">
            <p className="p-1 rounded text-white text-lg sm:text-xl md:text-2xl bg-slate-700">
              Ranking
            </p>
          </Link>

        </nav>
      </header>

      {children}

      <footer className='p-10 bg-slate-900'></footer>

    </body>
    </html>
  );
}