// redux/actionTypes/movieActionTypes.ts
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

export type MovieActionTypes =
  | FetchTrendingMoviesRequest
  | FetchTrendingMoviesSuccess
  | FetchTrendingMoviesFailure;
