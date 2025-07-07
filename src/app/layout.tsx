
import './styles/globals.css';
import { InterFont } from './styles/fonts';

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
  return (
    <html lang="en">
      <body className={`${InterFont.className} antiliased`}>
        <span>Soy un Layout</span>
        {children}
      </body>
    </html>
  );
}