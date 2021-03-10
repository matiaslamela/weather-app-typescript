import React, { useState } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import './App.css';
import Nav from '../containers/components/Nav';
import Cards from '../containers/components/Cards';
import About from '../containers/components/About';
import Ciudad from '../containers/components/City';

import { city, cityFetch } from './models';

const apiKey: string = 'aca pongan su API KEY';

function App() {
	const [cities, setCities] = useState<city[]>([]);
	function onClose(id: number) {
		setCities((oldCities: city[]) => oldCities.filter((c) => c.id !== id));
	}
	function onSearch(ciudad: string): void {
		//Llamado a la API del clima
		fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
			.then((r) => r.json())
			.then((recurso: cityFetch) => {
				if (recurso.main !== undefined) {
					const ciudad = {
						key: recurso.id,
						max: Math.round(recurso.main.temp_max),
						min: Math.round(recurso.main.temp_min),
						name: recurso.name,
						img: recurso.weather[0].icon,
						id: recurso.id,
					};
					setCities((oldCities: city[]) => [...oldCities, ciudad]);
				} else {
					alert('Ciudad no encontrada');
				}
			});
	}
	function onFilter(ciudadId: string): city {
		let ciudad = cities.filter((c: city) => c.id === parseInt(ciudadId));
		return ciudad[0];
	}
	return (
		<div className="App">
			<BrowserRouter>
				<Route path="/" render={() => <Nav onSearch={onSearch} />} />
				<Route exact path="/" component={() => <Cards cities={cities} onClose={onClose} />} />
				<Route exact path="/about" component={About} />
				<Route
					exact
					path="/ciudad/:ciudadId"
					render={({ match }) => <Ciudad city={onFilter(match.params.ciudadId)} onClose={onClose} />}
				/>
			</BrowserRouter>
		</div>
	);
}

export default App;
