import {
    FETCH_TRENDING_MOVIES_REQUEST,
    FETCH_TRENDING_MOVIES_SUCCESS,
    FETCH_TRENDING_MOVIES_FAILURE,
    MovieActionTypes,
  } from "../actionTypes/movieActionTypes";
  
  interface MovieState {
    loading: boolean;
    movies: any[];
    error: string | null;
  }
  
  const initialState: MovieState = {
    loading: false,
    movies: [],
    error: null,
  };
  
  export const movieReducer = (
    state = initialState,
    action: MovieActionTypes
  ): MovieState => {
    switch (action.type) {
      case FETCH_TRENDING_MOVIES_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_TRENDING_MOVIES_SUCCESS:
        return {
          loading: false,
          movies: action.payload,
          error: null,
        };
      case FETCH_TRENDING_MOVIES_FAILURE:
        return {
          loading: false,
          movies: [],
          error: action.error,
        };
      default:
        return state;
    }
  };
  