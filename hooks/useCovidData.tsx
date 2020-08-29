// Hooks
import useSWR from "swr";
// Utils
import { fetcher, responseFormatter } from "utils";

const API_COVID_ALL =
	"https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest";

const API_COVID_BRIEF =
	"https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/brief";

const useCovidData = () => {
	const allData = useSWR(API_COVID_ALL, fetcher);
	const briefData = useSWR(API_COVID_BRIEF, fetcher);

	const allDataFormated = responseFormatter(allData);
	const briefDataFormated = responseFormatter(briefData);

	const markers = allDataFormated.data ?? [{ location: { lat: 0, lng: 0 } }];

	return {
		allData: allDataFormated,
		briefData: responseFormatter(briefData),
		markers
	};
};

export default useCovidData;
