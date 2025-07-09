
export type Genre = {
  id: number;
  name: string;
}

export type Studio = {
  id: number;
  name: string;
}

export type Anime = {
  id: number;
  title: string;
  main_picture: {
    medium: string;
    large: string;
  };
  start_date: string;
  end_date: string;
  source: string;
  genres: Genre[];
  studios: Studio[];
  num_episodes: number;
  average_episode_duration: number;
  media_type: string;
  mean: number;
  rank: number;
};

export type AnimeItems = {
  items: Anime[]
}

export type AnimeApiResponse = {
  data: {
    node: Anime;
  }[];
};