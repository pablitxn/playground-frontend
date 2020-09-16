// Types
import { ICountry } from "interfaces/covid-map/ICountry";
import { IBriefData } from "interfaces/covid-map/IBriefData";
// Utils
import { API_COVID_ALL, API_COVID_BRIEF } from "utils/constants";
import { formateNumber } from "utils/formatters";
import { filterByCases, calculateTotal } from "./utils";

export const getCovidData = async () => {
	console.log("constats", API_COVID_ALL, API_COVID_BRIEF);
	try {
		// Fetching data
		const allData = await fetch(API_COVID_ALL);
		const briefData = await fetch(API_COVID_BRIEF);
		// Formating data
		const allDataFormated: ICountry[] = await allData.json();
		const briefDataFormated: IBriefData = await briefData.json();
		// const markers = allDataFormated ?? [{ location: { lat: 0, lng: 0 } }];
		const markers = [{ location: { lat: 0, lng: 0 } }];
		const globalCases = formateNumber(briefDataFormated?.confirmed);
		const affectedCountries = allDataFormated?.length;
		// Adding filter
		const recovered = filterByCases(allDataFormated, "recovered");
		const deaths = filterByCases(allDataFormated, "deaths");
		const confirmed = filterByCases(allDataFormated, "confirmed");
		// Calculate total cases
		const totalRecovered = calculateTotal(allDataFormated, "recovered");
		const totalDeaths = calculateTotal(allDataFormated, "deaths");
		return {
			recovered,
			deaths,
			confirmed,
			markers,
			globalCases,
			affectedCountries,
			totalRecovered,
			totalDeaths
		};
	} catch (err) {
		console.log("get covid-map data", err);
	}
};
