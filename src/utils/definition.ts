


///////////////////////////////

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

///////////////////////////////

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
  rankings: Ranking[];
};

export type Ranking = {
  rank: number; // posición en el ranking
  type: 'RATED' | 'POPULAR'; // tipo de ranking
  allTime: boolean; // si es ranking histórico
  context: string; // por ejemplo: "All Time", "2024", etc.
  season?: 'WINTER' | 'SPRING' | 'SUMMER' | 'FALL'; // opcional, si aplica
  year?: number; // opcional, si aplica
};



export type Manga = Item & {
  num_chapters: number;
  num_volumes: number;
};

///////////////////////////////

export type AnimeItems = {
  items: Anime[];
  type: 'anime';
};
export type MangaItems = {
  items: Manga[];
  type: 'manga';
};
export type ItemType = 'anime' | 'manga';
export type Showcase = AnimeItems | MangaItems;

export type AniListResponse<T> = {
  data: {
    Page: {
      media: T[];
    };
  };
};