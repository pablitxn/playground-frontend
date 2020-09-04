// Types
import { Cases } from "pages/covid-map/types";
// Hooks
import useSWR from "swr";
// Utils
import { fetcher, responseFormatter } from "utils";
import { DEFAULT_LANGUAGE } from "constants/locale";

const API_COVID_ALL =
	"https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest";

const API_COVID_BRIEF =
	"https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/brief";

type Filter = "deaths" | "recovered" | "confirmed";

function formateNumber(number: number) {
	// const language = navigator.language || DEFAULT_LANGUAGE;
	const language = DEFAULT_LANGUAGE;
	return new Intl.NumberFormat(language).format(number);
}

function filterByCases(cases: Cases, filter: Filter) {
	if (Array.isArray(cases)) {
		const formatedCases = cases.map(($case: any, i: number) => {
			return {
				confirmed: $case.confirmed,
				countryregion: $case.countryregion,
				deaths: $case.deaths,
				recovered: $case.recovered,
				key: i
			};
		});
		const orderedCases = formatedCases.sort((a, b) => b[filter] - a[filter]);
		console.log(filter, orderedCases);
		return orderedCases;
	}
}

const useCovidData = () => {
	// Fetching data
	const allData = useSWR(API_COVID_ALL, fetcher);
	const briefData = useSWR(API_COVID_BRIEF, fetcher);
	// Formating Data
	const allDataFormated = responseFormatter(allData);
	const briefDataFormated = responseFormatter(briefData);
	const markers = allDataFormated.data ?? [{ location: { lat: 0, lng: 0 } }];
	const globalCases = formateNumber(briefDataFormated.data?.confirmed);
	const affectedCountries = allDataFormated.data?.length;
	// Adding filter
	const recovered = filterByCases(allDataFormated.data, "recovered");
	const deaths = filterByCases(allDataFormated.data, "deaths");
	const confirmed = filterByCases(allDataFormated.data, "confirmed");

	return {
		recovered,
		deaths,
		confirmed,
		markers,
		globalCases,
		affectedCountries
	};
};

export default useCovidData;
