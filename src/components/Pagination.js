import React from 'react';
import { paginate } from '../actions/searchActions';
import { useDispatch, useSelector } from 'react-redux';

export default function Pagination() {
	const { films, moviesPerPage } = useSelector(state => state.movies);
	const dispatch = useDispatch();

	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(films.length / moviesPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<div>
			<ul className="pagination">
				{pageNumbers.map(num => (
					<li className="page-item" key={num}>
						<a
							href="#"
							className="page-link"
							onClick={() => {
								dispatch(paginate(num));
							}}
						>
							{num}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
