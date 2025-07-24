
export type Genre = string;
export type Studio = { name: string; };
export type Title = { romaji: string; english?: string; native?: string; };
export type Date = { year?: number; month?: number; day?: number; };
export type Season = 'WINTER' | 'SPRING' | 'SUMMER' | 'FALL';
export type AllSeasons = { season: Season; animes: Anime[]; }[];

export type ItemFilters = {
  page: number;
  perPage: number;
  id?: number;
  search?: string;
  season?: Season;
  seasonYear?: number;
  format?: string;
  sort?: string[];
};

export type Item = {
  id: number;
  title: Title;
  description: string;
  coverImage: { extraLarge: string; };
  startDate: Date;
  endDate: Date;
  genres: Genre[];
  mediaType: string;
};

export type Items = AnimeItems | MangaItems;

export type ItemImage = {
  id: number;
  image: string;
}

export type Anime = Item & {
  source: string;
  rankings: Ranking[];
  trailer?: {
    id: string;
    site: string;
  };
  bannerImage?: string;
};

export type Manga = Item & {
  num_chapters: number;
  num_volumes: number;
};

export type Ranking = {
  rank: number;
  type: 'RATED' | 'POPULAR';
  allTime: boolean;
  context: string;
  season?: Season;
  year?: number;
};

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

