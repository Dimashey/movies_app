import { useSelector } from 'react-redux';
import SearchForm from './SearchForm';
import MoviesContainer from './MoviesContainer';
import Spinner from '../layout/Spinner';
import GetMovies from '../GetMovies';
import Pagination from '../Pagination';

function Landing() {
	const { loading } = useSelector(state => state.movies);

	return (
		<div className="container">
			<SearchForm />
			{loading ? <Spinner /> : <MoviesContainer />}
			<div className="row">
				<GetMovies />
			</div>
			<Pagination />
		</div>
	);
}

export default Landing;
