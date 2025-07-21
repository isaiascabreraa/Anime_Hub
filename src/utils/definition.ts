


export type Image = {
  image: string;
}

export type Genre = string;

export type Studio = {
  name: string;
};

export type Title = {
  romaji: string;
  english?: string;
  native?: string;
};

export type DateParts = {
  year?: number;
  month?: number;
  day?: number;
};

export type Item = {
  id: number;
  title: Title; // objeto con varios formatos
  coverImage: {
    medium: string;
    large: string;
    extraLarge: string;
    color: string
  };
  startDate: DateParts;   // en AniList viene como objeto
  endDate: DateParts;
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
};


export type Manga = Item & {
  num_chapters: number;
  num_volumes: number;
};



export type ItemType = 'anime' | 'manga';

export type AnimeItems = {
  items: Anime[];
  type: 'anime';
};
export type MangaItems = {
  items: Manga[];
  type: 'manga';
};

export type Showcase = AnimeItems | MangaItems;


export type ApiResponse<T> = {
  data: {
    node: T;
  }[];
};
export type AniListResponse<T> = {
  data: {
    Page: {
      media: T[];
    };
  };
};






export type Season = 'WINTER' | 'SPRING' | 'SUMMER' | 'FALL';

export type AnimeFilters = {
  page: number;
  perPage: number;
  id?: number;
  search?: string;
  season?: Season;
  seasonYear?: number;
  sort?: string[];
};