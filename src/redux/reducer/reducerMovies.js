import {GET_MOVIES, DETAIL_MOVIE, FAVORITES, DELETE_FAVORITE} from '../actions/actionTypes.js'
const initialState = {
    moviesLoaded:[],
    favorites: [],
    detail:{}
}

export default function reducerMovies ( state = initialState, action){
        switch(action.type){
            case GET_MOVIES:
                return{
                    ...state,
                    moviesLoaded : action.payload
                }
            case DETAIL_MOVIE:
                return {
                    ...state,
                    detail: action.payload
                }
            case FAVORITES:
                return {
                    ...state,
                    favorites: [...state.favorites, action.payload]
                }
            case DELETE_FAVORITE:
                return {
                    ...state,
                    favorites: state.favorites.filter((pelicula) => pelicula.imdbID !== action.payload)
                }
            default:
                return state;
        }
}
