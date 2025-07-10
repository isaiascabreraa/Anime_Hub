import { Inter, Russo_One, Familjen_Grotesk  } from 'next/font/google'

type FontType = ReturnType<typeof Inter>

export const InterFont: FontType = Inter({subsets: ['latin'], weight: ['400','500','600']})
export const Russo_OneFont: FontType = Russo_One({subsets:['latin'], weight: ['400']})
export const Familjen_GroteskFont: FontType = Familjen_Grotesk({subsets: ['latin'], weight: ['400','500']})