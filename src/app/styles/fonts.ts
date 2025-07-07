import { Inter, Raleway } from 'next/font/google'

type FontType = ReturnType<typeof Inter>

export const InterFont: FontType = Inter({subsets: ['latin'], weight: ['400','500','600']})
export const RalewayFont: FontType = Raleway({subsets: ['latin'], weight: ['400','500','600']})
