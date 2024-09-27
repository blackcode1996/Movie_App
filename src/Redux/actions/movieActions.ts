import { Dispatch } from "redux";
import axios from "axios";
import {
  FETCH_TRENDING_MOVIES_REQUEST,
  FETCH_TRENDING_MOVIES_SUCCESS,
  FETCH_TRENDING_MOVIES_FAILURE,
  FETCH_POPULAR_MOVIES_REQUEST,
  FETCH_POPULAR_MOVIES_SUCCESS,
  FETCH_POPULAR_MOVIES_FAILURE,
  MovieActionTypes,
} from "../actionTypes/movieActionTypes";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchTrendingMovies = (category: string) => {
  return async (dispatch: Dispatch<MovieActionTypes>) => {
    dispatch({ type: FETCH_TRENDING_MOVIES_REQUEST });

    try {
      const trendingUrl = `${BASE_URL}/trending/all/${category}?language=en-US&page=1&api_key=${API_KEY}`;
      const trendingResponse = await axios.get(trendingUrl);

      dispatch({
        type: FETCH_TRENDING_MOVIES_SUCCESS,
        payload: trendingResponse.data.results,
      });
    } catch (error: any) {
      dispatch({
        type: FETCH_TRENDING_MOVIES_FAILURE,
        error: error.message,
      });
    }
  };
};

export const fetchPopularMovies = (category:  string) => {

  const categoryToFetch = category==="movies" ? "movie" : "tv"

  return async (dispatch: Dispatch<MovieActionTypes>) => {
    dispatch({ type: FETCH_POPULAR_MOVIES_REQUEST });

    try {
      const popularUrl = `${BASE_URL}/${categoryToFetch}/popular?language=en-US&page=1&api_key=${API_KEY}`;
      const popularResponse = await axios.get(popularUrl);

      dispatch({
        type: FETCH_POPULAR_MOVIES_SUCCESS,
        payload: popularResponse.data.results,
      });
    } catch (error: any) {
      dispatch({
        type: FETCH_POPULAR_MOVIES_FAILURE,
        error: error.message,
      });
    }
  };
};
