import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Landing from './components/home/Landing';
import Movie from './components/home/Movie';
import store from './store';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Route exact path="/" component={Landing} />
				<Route path="/movie/:id" component={Movie} />
			</Router>
		</Provider>
	);
}

export default App;
