import {swApi} from "../../api/api";
import {
    CLEAR_CHARACTERS,
    CLEAR_FILM_INFO,
    CLEAR_FILMS,
    LOADING_OFF,
    LOADING_ON,
    SET_CHARACTERS,
    SET_FILM_INFO,
    SET_FILMS
} from "./actionsType";
import axios from "axios";

export const clearFilms = () => ({type: CLEAR_FILMS})

export const cleanFilmInfo = () => ({type: CLEAR_FILM_INFO})

export const clearCharacters = () => ({type: CLEAR_CHARACTERS})

export const getFilms = () => {
    return async dispatch => {
        dispatch({type: LOADING_ON})
        const films = await swApi.getFilms()
        dispatch({type: SET_FILMS, films})
        dispatch({type: LOADING_OFF})
    }
}

export const getFilmInfo = (filmId) => {
    return async dispatch => {
        dispatch({type: LOADING_ON})
        const filmInfo = await swApi.getFilmInfo(filmId)
        dispatch({type: SET_FILM_INFO, filmInfo})
        // dispatch({type: LOADING_OFF})
    }
}

export const getCharacters = (filmId) => {

    return async dispatch => {
        // dispatch({type: LOADING_ON})
        const charactersList = await swApi.getFilmInfo(filmId)
        let characters = []
        const aw2 = await Promise.all(charactersList.characters.map(link => axios.get(link)
            .then(res => {
                return characters.push(res.data)
            })
        ))

        Promise.all([charactersList,aw2]).then( () => {
            dispatch({type: SET_CHARACTERS, characters})
            dispatch({type: LOADING_OFF})
        })

    }
}