import axios from "axios";

const instance = axios.create({
    baseURL: 'https://swapi.dev/api/',
});

export const swApi = {
    getFilms() {
        return instance.get(`films/`)
            .then(response => response.data.results)
    },
    getFilmInfo(filmId) {
        return instance.get(`/films/${filmId}/`)
            .then(response => response.data)
    },
    getCharacters(peopleLink) {
        return axios.get(`${peopleLink}`)
            .then(response => response.data)
    }
}