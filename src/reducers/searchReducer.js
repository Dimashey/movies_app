import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING, GET_MOVIES, PAGINATE } from '../actions/types';

const initialState = {
	text: '',
	movies: [],
	loading: false,
	movie: [],
	currentPage: 1,
	moviesPerPage: 10,
	films: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case SEARCH_MOVIE:
			return {
				...state,
				text: action.payload,
				loading: false,
			};
		case FETCH_MOVIES:
			return {
				...state,
				movies: action.payload,
				loading: false,
			};
		case FETCH_MOVIE:
			return {
				...state,
				movie: action.payload,
				loading: false,
			};
		case LOADING:
			return {
				...state,
				loading: true,
			};
		case GET_MOVIES:
			return {
				...state,
				films: action.payload,
				loading: false,
			};
		case PAGINATE:
			return {
				...state,
				currentPage: action.payload,
				loading: false,
			};

		default:
			return state;
	}
}
