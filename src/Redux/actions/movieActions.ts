
import axios from "axios";
import {
  FETCH_TRENDING_MOVIES_REQUEST,
  FETCH_TRENDING_MOVIES_SUCCESS,
  FETCH_TRENDING_MOVIES_FAILURE,
  MovieActionTypes,
} from "../actionTypes/movieActionTypes";
import { Dispatch } from "redux";

const API_KEY = "your_tmdb_api_key"; 
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrendingMovies = () => {
  return async (dispatch: Dispatch<MovieActionTypes>) => {
    dispatch({ type: FETCH_TRENDING_MOVIES_REQUEST });

    try {
      const response = await axios.get(
        `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
      );
      dispatch({
        type: FETCH_TRENDING_MOVIES_SUCCESS,
        payload: response.data.results,
      });
    } catch (error: any) {
      dispatch({
        type: FETCH_TRENDING_MOVIES_FAILURE,
        error: error.message,
      });
    }
  };
};
