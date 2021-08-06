import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

export function MoviesContainer() {
	const movies = useSelector(state => state.movies.movies);
	return (
		<div className="row">
			{movies.Response === 'True' && movies.Search.map((movie, index) => <MovieCard key={index} movie={movie} />)}
		</div>
	);
}

export default MoviesContainer;
