
export type Genre = string;
export type Studio = { name: string; };
export type Title = { romaji: string; english?: string; native?: string; };
export type Date = { year?: number; month?: number; day?: number; };
export type Season = 'WINTER' | 'SPRING' | 'SUMMER' | 'FALL';
export type AllSeasons = { season: Season; animes: Anime[]; }[];

export type AnimeFilters = {
  page: number;
  perPage: number;
  id?: number;
  search?: string;
  season?: Season;
  seasonYear?: number;
  format?: string;
  sort?: string[];
};

export type ItemImage = {
  id: number;
  image: string;
}


export type Item = {
  id: number;
  title: Title; // objeto con varios formatos
  description: string;
  coverImage: {
    medium: string;
    large: string;
    extraLarge: string;
    color: string
  };
  startDate: Date;   // en AniList viene como objeto
  endDate: Date;
  genres: Genre[];
  mediaType: string;
  meanScore: number;
  rank?: number; // si usás rankings, sino puede no venir
};

export type Anime = Item & {
  source: string;
  studios: Studio[];
  episodes: number;
  averageEpisodeDuration: number;
  rankings: Ranking[];
  trailer?: {
    id: string;
    site: string; // Ej: "youtube"
    thumbnail: string;
  };
  bannerImage?: string;
};

export type Ranking = {
  rank: number;
  type: 'RATED' | 'POPULAR';
  allTime: boolean;
  context: string;
  season?: Season;
  year?: number;
};



export type Manga = Item & {
  num_chapters: number;
  num_volumes: number;
};

// Interface's types
export type AniListResponse<T> = {
  data: {
    Page: {
      pageInfo: {
        hasNextPage: boolean;
      };
      media: T[];
    };
  };
};

export type AnimeItems = {
  items: Anime[];
  type: 'ANIME';
};
export type MangaItems = {
  items: Manga[];
  type: 'MANGA';
};

export type Items = AnimeItems | MangaItems;
