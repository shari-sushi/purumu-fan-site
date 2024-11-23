export type planeAnalects = {
  movieId: string;
  movieUrl: string;
  movieTitle: string;
  time: number;
  word: string;
  story: string;
};

export type ReceivedKaraoke = {
  VtuberId: number;
  VtuberName: string;
  VtuberKana: string;
  IntroMovieUrl: string | null;
  VtuberInputterId: number;

  MovieUrl: string;
  MovieTitle: string;
  MovieInputterId: number;

  KaraokeId: number;
  SingStart: string;
  SongName: string;
  KaraokeInputterId: number;

  Count: number;
  IsFav: boolean;
};

export type FavoriteKaraoke = {
  MovieUrl: string;
  KaraokeId: number;
};
