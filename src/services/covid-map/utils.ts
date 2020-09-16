// Types
import { ICountry } from "interfaces/covid-map/ICountry";
import { IFormatedData } from "interfaces/covid-map/IFormatedData";
// Utils
import { formateNumber } from "utils/formatters";

type Filter = "confirmed" | "recovered" | "deaths";

export function filterByCases(countries: ICountry[], filter: Filter) {
	if (Array.isArray(countries)) {
		const formatedCases = countries.map((country) => {
			const { confirmed, countryregion, deaths, recovered } = country;
			return {
				confirmed: confirmed,
				countryregion: countryregion,
				deaths: deaths,
				recovered: recovered
			};
		});
		const orderedCases = formatedCases.sort((a, b) => b[filter] - a[filter]);
		return orderedCases;
	}
}

export function calculateTotal(countries: ICountry[], filter: Filter) {
	if (Array.isArray(countries)) {
		const filteredCases = countries.map((country) => {
			const value = +country[filter];
			if (isNaN(value)) {
				return 0;
			} else {
				return value;
			}
		});
		const total = filteredCases.reduce((a, b) => a + b);

		return formateNumber(total);
	}
}

export function filterMarkers(countries: ICountry[]) {
	const markers = countries.map((country) => country.location);
	return markers;
}
