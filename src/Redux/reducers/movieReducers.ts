import {
    FETCH_TRENDING_MOVIES_REQUEST,
    FETCH_TRENDING_MOVIES_SUCCESS,
    FETCH_TRENDING_MOVIES_FAILURE,
    MovieActionTypes,
    FETCH_POPULAR_MOVIES_REQUEST,
    FETCH_POPULAR_MOVIES_SUCCESS,
    FETCH_POPULAR_MOVIES_FAILURE,
    FETCH_TOP_RATED_MOVIES_REQUEST,
    FETCH_TOP_RATED_MOVIES_SUCCESS,
    FETCH_TOP_RATED_MOVIES_FAILURE,
    FETCH_ALL_MOVIES_MOVIES_REQUEST,
    FETCH_ALL_MOVIES_MOVIES_SUCCESS,
    FETCH_ALL_MOVIES_MOVIES_FAILURE,
    FETCH_GENRES_REQUEST,
    FETCH_GENRES_SUCCESS,
    FETCH_GENRES_FAILURE,
} from "../actionTypes/movieActionTypes";

interface MovieState {
    trendingLoading: boolean;
    popularLoading: boolean;
    topRatedLoading: boolean;
    allMoviesLoading: boolean;
    genresLoading: boolean;
    trendingMovies?: any[];
    popularMovies?: any[];
    topRatedMovies?: any[];
    allMovies?: any[];
    genres?: any[];
    trendingError: string | null;
    popularError: string | null;
    topRatedError: string | null;
    allMoviesError: string | null;
    genresError: string | null;
}

const initialState: MovieState = {
    trendingLoading: false,
    popularLoading: false,
    topRatedLoading: false,
    allMoviesLoading: false,
    genresLoading: false,
    trendingMovies: [],
    popularMovies: [],
    topRatedMovies: [],
    allMovies: [],
    genres: [],
    trendingError: null,
    popularError: null,
    topRatedError: null,
    allMoviesError: null,
    genresError: null
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
        case FETCH_TOP_RATED_MOVIES_REQUEST:
            return {
                ...state,
                topRatedLoading: true,
                topRatedError: null,
            };
        case FETCH_TOP_RATED_MOVIES_SUCCESS:
            return {
                ...state,
                topRatedLoading: false,
                topRatedMovies: action.payload,
                topRatedError: null,
            };
        case FETCH_TOP_RATED_MOVIES_FAILURE:
            return {
                ...state,
                topRatedLoading: false,
                topRatedMovies: [],
                topRatedError: action.error,
            };
        case FETCH_ALL_MOVIES_MOVIES_REQUEST:
            return {
                ...state,
                allMoviesLoading: true,
                allMoviesError: null,
            };
        case FETCH_ALL_MOVIES_MOVIES_SUCCESS:
            return {
                ...state,
                allMoviesLoading: false,
                allMovies: action.payload,
                allMoviesError: null,
            };
        case FETCH_ALL_MOVIES_MOVIES_FAILURE:
            return {
                ...state,
                allMoviesLoading: false,
                allMovies: [],
                allMoviesError: action.error,

            }
            case FETCH_GENRES_REQUEST:
                return {
                    ...state,
                    genresLoading: true,
                    genresError: null,
                };
            case FETCH_GENRES_SUCCESS:
                return {
                    ...state,
                    genresLoading: false,
                    genres: action.payload,
                    genresError: null,
                };
            case FETCH_GENRES_FAILURE:
                return {
                    ...state,
                    genresLoading: false,
                    genres: [],
                    genresError: action.error,
                };
        default:
            return state;
    }
};
