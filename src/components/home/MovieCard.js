import React from 'react';
import { Link } from 'react-router-dom';
import "../../App.css"

function MovieCard({ movie }) {
	return (
		<div className="col-md-3 mb-5">
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
	);
}

export default MovieCard;
