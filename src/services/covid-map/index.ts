// Types
import { ICountry, IBriefData } from "interfaces/covid-map";
// Utils
import { formateNumber } from "utils/formatters";
import { filterByCases, calculateTotal } from "services/covid-map/utils";
// Constants
import { API_COVID_ALL, API_COVID_BRIEF } from "utils/constants";

const services = {
	async getCovidData() {
		try {
			// Fetching data
			const allData = await fetch(API_COVID_ALL);
			const briefData = await fetch(API_COVID_BRIEF);
			// Formating data
			const allDataFormated: ICountry[] = await allData.json();
			const briefDataFormated: IBriefData = await briefData.json();
			const markers = allDataFormated ?? [{ location: { lat: 0, lng: 0 } }];
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
			console.log(err);
			const test = async () => {
				try {
					const allData = await fetch(API_COVID_ALL);
					const briefData = await fetch(API_COVID_BRIEF);

					console.log("fetch paralelo", allData, briefData);
					console.log(await allData.json());
				} catch (err) {
					console.log("fuaa mono", err);
				}
			};
			test();
		}
	}
};

export default services;
