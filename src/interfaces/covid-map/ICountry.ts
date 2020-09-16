export interface ICountry {
	provincestate: string;
	countryregion: string;
	lastupdate: Date;
	location: Location;
	countrycode: Countrycode;
	confirmed: number;
	deaths: number;
	recovered: number;
}

export interface Countrycode {
	iso2: string;
	iso3: string;
}

export interface Location {
	lat: number;
	lng: number;
}
