// Next
import Head from "next/head";
// Components
import Map from "components/covid-map/map";
import LastUpdate from "components/covid-map/last-update";
import CasesByFilter from "components/covid-map/cases-by-filter";
import GlobalCases from "components/covid-map/global-cases";
import GraphCases from "components/covid-map/graph-cases";
import Footer from "components/covid-map/footer";
import Header from "components/covid-map/header";
// Utils
import { tableColumns } from "utils/covid-map";
// Services
import services from "services/covid-map";
// Styles
import "./styles.less";

const CovidMap = (initialProps) => {
	const {
		markers,
		globalCases,
		confirmed,
		deaths,
		recovered,
		affectedCountries,
		totalRecovered,
		totalDeaths
	} = initialProps;

	return (
		<>
			<Head>
				<title>CoVid 19 Map 🌎 </title>
				<link rel="icon" href="/favicon.ico" />
				<link
					href="https://fonts.googleapis.com/css2?family=Heebo&family=Kumbh+Sans&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<div className="covid-map">
				<Header className="covid-map__header" />
				<GlobalCases
					globalCases={globalCases}
					className="covid-map__global-cases"
				/>
				<CasesByFilter
					countries={confirmed}
					title="Confirmados"
					columns={tableColumns.confirmed}
					className="covid-map__cases-by-countries"
				/>
				<div className="covid-map__map">
					<Map markers={markers} style={{ padding: "1rem" }} />
				</div>
				<CasesByFilter
					countries={deaths}
					title="Muertes"
					columns={tableColumns.deaths}
					subtitle={totalDeaths}
					className="covid-map__cases-by-deaths"
				/>
				<CasesByFilter
					countries={recovered}
					title="Recuperados"
					columns={tableColumns.recovered}
					subtitle={totalRecovered}
					className="covid-map__cases-by-country"
				/>
				<LastUpdate className="covid-map__last-update" />
				<GraphCases className="covid-map__graph-cases" />
				<Footer
					affectedCountries={affectedCountries}
					className="covid-map__footer"
				/>
			</div>
		</>
	);
};

CovidMap.getInitialProps = async () => {
	const data = await services.getCovidData();
	return data;
};

export default CovidMap;
