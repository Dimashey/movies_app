import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING, GET_MOVIES, PAGINATE } from './types';
import axios from 'axios';
import { APIKey } from '../APIKey';
import MoviesId from '../movies_id';

export const searchMovie = text => dispatch => {
	dispatch({
		type: SEARCH_MOVIE,
		payload: text,
	});
};

export const fetchMovies = text => dispatch => {
	axios
		.get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
		.then(response =>
			dispatch({
				type: FETCH_MOVIES,
				payload: response.data,
			})
		)
		.catch(err => console.log(err));
};

export const fetchMovie = id => dispatch => {
	axios
		.get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
		.then(response =>
			dispatch({
				type: FETCH_MOVIE,
				payload: response.data,
			})
		)
		.catch(err => console.log(err));
};

export const setLoading = () => {
	return {
		type: LOADING,
	};
};

export const setMovies = films => {
	return {
		type: GET_MOVIES,
		payload: films,
	};
};

export const paginate = pageNumber => {
	return {
		type: PAGINATE,
		payload: pageNumber,
	};
};

export const getMovies = () => dispatch => {
	const result = [];
	for (let index = 0; index < MoviesId.length && index !== 10; index++) {
		const id = MoviesId[index];
		axios
			.get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
			.then(response => result.push(response.data))
			.catch(error => console.log(error));
	}
	dispatch(setMovies(result));
};
