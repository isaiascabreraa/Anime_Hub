
export type Anime = {
  id: number;
  title: string;
  mean: number;
  rank: number;
  main_picture: {
    medium: string;
    large: string;
  };
};

export type AnimeApiResponse = {
  data: {
    node: Anime;
  }[];
};