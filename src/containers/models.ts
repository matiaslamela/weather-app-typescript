export interface coord {
	lon: number;
	lat: number;
}
export interface weather {
	id: number;
	main: string;
	description: string;
	icon: string;
}
export interface main {
	temp: number;
	pressure: number;
	humidity: number;
	temp_min: number;
	temp_max: number;
}
export interface wind {
	speed: number;
	deg: number;
}
export interface clouds {
	all: number;
}
export interface sys {
	type: number;
	id: number;
	message: number;
	country: string;
	sunrise: number;
	sunset: number;
}
export interface cityFetch {
	coord: coord;
	weather: weather[];
	base: string;
	main: main;
	visibility: number;
	wind: wind;
	clouds: clouds;
	dt: number;
	sys: sys;
	id: number;
	name: string;
	cod: number;
}

export interface city {
	key: number;
	max: number;
	min: number;
	name: string;
	img: string;
	id: number;
}

export interface onClose {
	onClose: (id: number) => void;
}

export interface onSearch {
	onSearch: (ciudad: string) => void;
}
