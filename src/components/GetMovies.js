import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../actions/searchActions';

export default function GetMovies() {
	const dispatch = useDispatch();
	const { currentPage, moviesPerPage, films } = useSelector(state => state.movies);

	useEffect(() => {
		dispatch(getMovies());
	}, []);

	const lastMoviesIndex = currentPage * moviesPerPage;
	const firstMoviesIndex = lastMoviesIndex - moviesPerPage;
	const currentMovie = films.slice(firstMoviesIndex, lastMoviesIndex);

	return currentMovie.map(movie => (
		<div className="col-md-3 mb-5" key={movie.imdbID}>
			<div className="card card-body bg-dark text-center h-100 align">
				<div>
					<img className="w-100 mb-2" src={movie.Poster} alt="Movie Cover" />
					<h5 className="text-light card-title mb-4">
						{movie.Title} - {movie.Year}
					</h5>
				</div>
				<Link className="btn btn-primary" to={'/movie/' + movie.imdbID}>
					Movie Details
				</Link>
			</div>
		</div>
	));
}
