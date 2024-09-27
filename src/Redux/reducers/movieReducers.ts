import {
  FETCH_TRENDING_MOVIES_REQUEST,
  FETCH_TRENDING_MOVIES_SUCCESS,
  FETCH_TRENDING_MOVIES_FAILURE,
  MovieActionTypes,
  FETCH_POPULAR_MOVIES_REQUEST,
  FETCH_POPULAR_MOVIES_SUCCESS,
  FETCH_POPULAR_MOVIES_FAILURE,
} from "../actionTypes/movieActionTypes";

interface MovieState {
  trendingLoading: boolean;
  popularLoading: boolean;
  trendingMovies?: any[];
  popularMovies?: any[];
  trendingError: string | null;
  popularError: string | null;
}

const initialState: MovieState = {
  trendingLoading: false,
  popularLoading: false,
  trendingMovies: [],
  popularMovies: [],
  trendingError: null,
  popularError: null,
};

export const movieReducer = (
  state = initialState,
  action: MovieActionTypes
): MovieState => {
  switch (action.type) {
      case FETCH_TRENDING_MOVIES_REQUEST:
          return {
              ...state,
              trendingLoading: true,
              trendingError: null,
          };
      case FETCH_TRENDING_MOVIES_SUCCESS:
          return {
              ...state,
              trendingLoading: false,
              trendingMovies: action.payload,
              trendingError: null,
          };
      case FETCH_TRENDING_MOVIES_FAILURE:
          return {
              ...state,
              trendingLoading: false,
              trendingMovies: [],
              trendingError: action.error,
          };
      case FETCH_POPULAR_MOVIES_REQUEST:
          return {
              ...state,
              popularLoading: true,
              popularError: null, 
          };
      case FETCH_POPULAR_MOVIES_SUCCESS:
          return {
              ...state,
              popularLoading: false,
              popularMovies: action.payload,
              popularError: null,
          };
      case FETCH_POPULAR_MOVIES_FAILURE:
          return {
              ...state,
              popularLoading: false,
              popularMovies: [],
              popularError: action.error,
          };
      default:
          return state;
  }
};
