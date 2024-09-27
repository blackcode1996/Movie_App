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

export type MovieActionTypes =
  | FetchTrendingMoviesRequest
  | FetchTrendingMoviesSuccess
  | FetchTrendingMoviesFailure
  | FetchPopularMoviesRequest
  | FetchPopularMoviesSuccess
  | FetchPopularMoviesFailure;


