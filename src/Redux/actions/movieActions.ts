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
    FETCH_TOP_RATED_MOVIES_REQUEST,
    FETCH_TOP_RATED_MOVIES_SUCCESS,
    FETCH_TOP_RATED_MOVIES_FAILURE,
    FETCH_GENRES_REQUEST,
    FETCH_GENRES_SUCCESS,
    FETCH_GENRES_FAILURE,
    FETCH_ALL_MOVIES_MOVIES_REQUEST,
    FETCH_ALL_MOVIES_MOVIES_SUCCESS,
    FETCH_ALL_MOVIES_MOVIES_FAILURE,
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

export const fetchPopularMovies = (category: string) => {

    const categoryToFetch = category === "movies" ? "movie" : "tv"

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

export const fetchTopRatedMovies = (category: string) => {
    const categoryToFetch = category === "movies" ? "movie" : "tv";

    return async (dispatch: Dispatch<MovieActionTypes>) => {
        dispatch({ type: FETCH_TOP_RATED_MOVIES_REQUEST });

        try {
            const topRatedUrl = `${BASE_URL}/${categoryToFetch}/top_rated?language=en-US&page=1&api_key=${API_KEY}`;
            const topRatedResponse = await axios.get(topRatedUrl);


            dispatch({
                type: FETCH_TOP_RATED_MOVIES_SUCCESS,
                payload: topRatedResponse.data.results,
            });
        } catch (error: any) {
            dispatch({
                type: FETCH_TOP_RATED_MOVIES_FAILURE,
                error: error.message,
            });
        }
    };
};

export const fetchGenres = () => {
    return async (dispatch: Dispatch<MovieActionTypes>) => {
        dispatch({ type: FETCH_GENRES_REQUEST });

        try {
            const response = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
            dispatch({
                type: FETCH_GENRES_SUCCESS,
                payload: response.data.genres,
            });
        } catch (error: any) {
            dispatch({
                type: FETCH_GENRES_FAILURE,
                error: error.message,
            });
        }
    };
};

export const fetchDiscoverMovies = (genreId: string, sortBy: string = "popularity.desc") => {
    return async (dispatch: Dispatch<MovieActionTypes>) => {
        dispatch({ type: FETCH_ALL_MOVIES_MOVIES_REQUEST });

        try {
            const response = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&sort_by=${sortBy}`);
            dispatch({
                type: FETCH_ALL_MOVIES_MOVIES_SUCCESS,
                payload: response.data.results,
            });
        } catch (error: any) {
            dispatch({
                type: FETCH_ALL_MOVIES_MOVIES_FAILURE,
                error: error.message,
            });
        }
    };
};