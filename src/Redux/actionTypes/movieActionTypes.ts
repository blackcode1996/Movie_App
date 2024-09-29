// TRENDING MOVIES
export const FETCH_TRENDING_MOVIES_REQUEST = "FETCH_TRENDING_MOVIES_REQUEST";
export const FETCH_TRENDING_MOVIES_SUCCESS = "FETCH_TRENDING_MOVIES_SUCCESS";
export const FETCH_TRENDING_MOVIES_FAILURE = "FETCH_TRENDING_MOVIES_FAILURE";

export interface FetchTrendingMoviesRequest {
  type: typeof FETCH_TRENDING_MOVIES_REQUEST;
}

export interface FetchTrendingMoviesSuccess {
  type: typeof FETCH_TRENDING_MOVIES_SUCCESS;
  payload: any[];
}

export interface FetchTrendingMoviesFailure {
  type: typeof FETCH_TRENDING_MOVIES_FAILURE;
  error: string;
}

// POPULAR MOVIES
export const FETCH_POPULAR_MOVIES_REQUEST = "FETCH_POPULAR_MOVIES_REQUEST";
export const FETCH_POPULAR_MOVIES_SUCCESS = "FETCH_POPULAR_MOVIES_SUCCESS";
export const FETCH_POPULAR_MOVIES_FAILURE = "FETCH_POPULAR_MOVIES_FAILURE";


export interface FetchPopularMoviesRequest {
  type: typeof FETCH_POPULAR_MOVIES_REQUEST;
}

export interface FetchPopularMoviesSuccess {
  type: typeof FETCH_POPULAR_MOVIES_SUCCESS;
  payload: any[];
}

export interface FetchPopularMoviesFailure {
  type: typeof FETCH_POPULAR_MOVIES_FAILURE 
  error: string;
}


// TOP RATED MOVIES
export const FETCH_TOP_RATED_MOVIES_REQUEST = "FETCH_TOP_RATED_MOVIES_REQUEST";
export const FETCH_TOP_RATED_MOVIES_SUCCESS = "FETCH_TOP_RATED_MOVIES_SUCCESS";
export const FETCH_TOP_RATED_MOVIES_FAILURE = "FETCH_TOP_RATED_MOVIES_FAILURE";

export interface FetchTopRatedMoviesRequest {
  type: typeof FETCH_TOP_RATED_MOVIES_REQUEST;
}

export interface FetchTopRatedMoviesSuccess {
  type: typeof FETCH_TOP_RATED_MOVIES_SUCCESS;
  payload: any[];
}

export interface FetchTopRatedMoviesFailure {
  type: typeof FETCH_TOP_RATED_MOVIES_FAILURE;
  error: string;
}


//DISCOVER MOVIES
export const FETCH_ALL_MOVIES_MOVIES_REQUEST = "FETCH_ALL_MOVIES_MOVIES_REQUEST";
export const FETCH_ALL_MOVIES_MOVIES_SUCCESS = "FETCH_ALL_MOVIES_MOVIES_SUCCESS";
export const FETCH_ALL_MOVIES_MOVIES_FAILURE = "FETCH_ALL_MOVIES_MOVIES_FAILURE";

export interface FetchAllMoviesRequest {
  type: typeof FETCH_ALL_MOVIES_MOVIES_REQUEST;
}

export interface FetchAllMoviesSuccess {
  type: typeof FETCH_ALL_MOVIES_MOVIES_SUCCESS;
  payload: any[];
}

export interface FetchAlldMoviesFailure {
  type: typeof FETCH_ALL_MOVIES_MOVIES_FAILURE;
  error: string;
}

// GENRES
export const FETCH_GENRES_REQUEST = "FETCH_GENRES_REQUEST";
export const FETCH_GENRES_SUCCESS = "FETCH_GENRES_SUCCESS";
export const FETCH_GENRES_FAILURE = "FETCH_GENRES_FAILURE";


export interface FetchGenresRequest {
  type: typeof FETCH_GENRES_REQUEST;
}

export interface FetchGenresSuccess {
  type: typeof FETCH_GENRES_SUCCESS;
  payload: any[];
}

export interface FetchGenresFailure {
  type: typeof FETCH_GENRES_FAILURE;
  error: string;
}



export type MovieActionTypes =
  | FetchTrendingMoviesRequest
  | FetchTrendingMoviesSuccess
  | FetchTrendingMoviesFailure
  | FetchPopularMoviesRequest
  | FetchPopularMoviesSuccess
  | FetchPopularMoviesFailure
  | FetchTopRatedMoviesRequest
  | FetchTopRatedMoviesSuccess
  | FetchTopRatedMoviesFailure
  | FetchAllMoviesRequest
  | FetchAllMoviesSuccess
  | FetchAlldMoviesFailure
  | FetchGenresRequest
  | FetchGenresSuccess
  | FetchGenresFailure;


