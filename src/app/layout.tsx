
import './styles/globals.css';
import { InterFont } from './styles/fonts';

import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';


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
   //console.log(logo_path);

  return (
    <html lang="en">
    <body className={`${InterFont.className} antiliased`}>
      <header className='flex justify-between h-40 bg-orange-400'>

        <div>
          <Link href={'/'} className='flex flex-col items-center text-xl text-black'>
            <picture>
              <Image 
                src={logo_path} 
                alt='Logo AnimeHub'
                width={120}
                height={120}/>
            </picture>

            <p>AnimeHub</p>
          </Link>
        </div>

        <nav className='flex items-center gap-10'>
          <Link href='/anime/seasonal'>
            <p className='text-2xl'>Seasonal Animes </p>
          </Link>
          <Link href={'/anime'}>
            <p className='text-2xl'>Top Animes</p>
          </Link>
          <Link href={'/manga'}>
            <p className='text-2xl'>Top Mangas</p>
          </Link>
          <Link href={'/login'}>
            <Image
            src='/Multimedia/Icons/login_icon.svg'
            alt='Login Icon'
            width={50}
            height={50}/>
          </Link>
        </nav>
        
      </header>

      {children}

      <footer>

      </footer>
    </body>
    </html>
  );
}