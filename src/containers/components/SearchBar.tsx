import React, { useState } from 'react';

import { onSearch } from '../models';

export default function SearchBar({ onSearch }: onSearch) {
	const [city, setCity] = useState('');
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				onSearch(city);
			}}
		>
			<input
				type="text"
				placeholder="Ciudad..."
				value={city}
				onChange={(e) => setCity(e.target.value)}
			/>
			<input type="submit" value="Agregar" />
		</form>
	);
}
