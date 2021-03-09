import React from 'react';
import './Cards.css';

import Card from './Card';

import { city, onClose } from '../models';

export interface cardsProps extends onClose {
	cities: city[];
}

export default function Cards({ cities, onClose }: cardsProps): JSX.Element {
	return (
		<div className="cards">
			{cities.map((c: city) => (
				<Card
					key={c.id}
					max={c.max}
					min={c.min}
					name={c.name}
					img={c.img}
					onClose={() => onClose(c.id)}
					id={c.id}
				/>
			))}
		</div>
	);
}
