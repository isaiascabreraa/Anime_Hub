
import './ui/globals.css';
import { InterFont } from './ui/fonts';

export default function Layout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en">
      <body className={`${InterFont.className} antiliased`}>
        <span>Soy un Layout</span>
        {children}
      </body>
    </html>
  );
}