// React
import { useState, useEffect } from "react";
// Services
import { getCovidData } from "services/covid-map";

const fallback = [{
	confirmed: "",
	countryregion: "",
	deaths: "",
	recovered: ""
}];

export const useGetCovidData = () => {
	const [state, setState] = useState<any>({
		markers: [{ lng: 0, lat: 0 }],
		globalCases: 0,
		confirmed: fallback,
		deaths: fallback,
		recovered: fallback,
		affectedCountries: 0,
		totalRecovered: 0,
		totalDeaths: 0
	});

	useEffect(() => {
		const mapData = getCovidData();
		setState(mapData);
	}, []);

	return state;
};
