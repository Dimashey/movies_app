import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovie, fetchMovies, setLoading } from '../../actions/searchActions';

export function SearchForm() {
	const dispatch = useDispatch();
	const { text } = useSelector(state => state.movies);
	const onChange = e => {
		dispatch(searchMovie(e.target.value));
	};

	const onSubmit = e => {
		e.preventDefault();
		dispatch(setLoading());
		dispatch(fetchMovies(text));
	};

	return (
		<div className="mt-5 mb-10 text-center">
			<div className="container">
				<form id="searchForm" onSubmit={onSubmit} className="mb-4">
					<input
						type="text"
						className="form-control"
						name="searchText"
						placeholder="Search movies ..."
						onChange={onChange}
					/>
					<button type="submit" className="btn btn-primary btn-bg mt-3 mb-10">
						Search
					</button>
				</form>
			</div>
		</div>
	);
}

export default SearchForm;
