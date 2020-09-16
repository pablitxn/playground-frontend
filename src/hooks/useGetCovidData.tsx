// React
import { useState, useEffect } from "react";
// Services
import { getCovidData } from "services/covid-map";

const fallback = [
	{
		confirmed: "",
		countryregion: "",
		deaths: "",
		recovered: ""
	}
];
const initialState = {
	markers: [{ lng: 0, lat: 0 }],
	globalCases: 0,
	confirmed: fallback,
	deaths: fallback,
	recovered: fallback,
	affectedCountries: 0,
	totalRecovered: 0,
	totalDeaths: 0
};

export const useGetCovidData = () => {
	const [state, setState] = useState<any>(initialState);

	useEffect(() => {
		const mapData = getCovidData();
		setState(mapData);
	}, []);

	return state;
};
