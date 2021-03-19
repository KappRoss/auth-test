import {
    CLEAR_CHARACTERS,
    CLEAR_FILM_INFO,
    CLEAR_FILMS,
    LOADING_OFF,
    LOADING_ON,
    SET_CHARACTERS,
    SET_FILM_INFO,
    SET_FILMS
} from "../actions/actionsType";

const initialState = {
    characters: [],
    loading: false,
    films: [],
    filmInfo: [],
}

export const starWarsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHARACTERS: {
            return {
                ...state,
                characters: action.characters
            }
        }
        case SET_FILMS:
            return {
                ...state,
                films: action.films
            }
        case LOADING_ON:
            return {
                ...state,
                loading: true
            }
        case LOADING_OFF:
            return {
                ...state,
                loading: false
            }
        case SET_FILM_INFO:
            return {
                ...state,
                filmInfo: [action.filmInfo]
            }
        case CLEAR_FILMS:
            return {
                ...state,
                films: []
            }
        case CLEAR_FILM_INFO: {
            return {
                ...state,
                filmInfo: []
            }
        }
        case CLEAR_CHARACTERS: {
            return {
                ...state,
                characters: []
            }
        }
        default:
            return state
    }
}

