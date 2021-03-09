import React from 'react';
import './Cards.css';

import Card from './Card';

import { city, onClose } from '../models';

interface props extends onClose {
	city: city;
}

export default function Cards({ city, onClose }: props) {
	return (
		<div className="cards">
			<Card
				key={city.id}
				max={city.max}
				min={city.min}
				name={city.name}
				img={city.img}
				onClose={() => onClose(city.id)}
				id={city.id}
			/>
		</div>
	);
}
