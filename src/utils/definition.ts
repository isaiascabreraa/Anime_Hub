
export type Season = {
  season: string;
}

export type Genre = {
  id: number;
  name: string;
}

export type Studio = {
  id: number;
  name: string;
}

export type Item = {
  id: number;
  title: string;
  main_picture: {
    medium: string;
    large: string;
  };
  start_date: string;
  end_date: string;
  genres: Genre[];
  media_type: string;
  mean: number;
  rank: number;
};
export type Anime = Item & {
  source: string;
  studios: Studio[];
  num_episodes: number;
  average_episode_duration: number;
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
