// Hooks
import useSWR from "swr";
// Utils
import { fetcher, responseFormatter } from "utils";
import { DEFAULT_LANGUAGE } from "constants/locale";

const API_COVID_ALL =
	"https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest";

const API_COVID_BRIEF =
	"https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/brief";

function formateNumber(number: number) {
	// const language = navigator.language || DEFAULT_LANGUAGE;
	const language = DEFAULT_LANGUAGE;

	return new Intl.NumberFormat(language).format(number);
}

const useCovidData = () => {
	const allData = useSWR(API_COVID_ALL, fetcher);
	const briefData = useSWR(API_COVID_BRIEF, fetcher);

	const allDataFormated = responseFormatter(allData);
	const briefDataFormated = responseFormatter(briefData);

	const markers = allDataFormated.data ?? [{ location: { lat: 0, lng: 0 } }];

	const globalCases = formateNumber(briefDataFormated.data?.confirmed);

	return {
		allData: allDataFormated,
		briefData: briefDataFormated,
		markers,
		globalCases: globalCases,
		casesByCountries: allData.data,
		// TODO: aplicar filtros
		casesByDeaths: allData.data,
		casesByCountry: allData.data ? allData.data[6] : [],
		affectedCountries: allData.data ? allData.data.length : 0
	};
};

export default useCovidData;
