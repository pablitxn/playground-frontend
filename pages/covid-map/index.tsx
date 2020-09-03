// Types
import { FC, useMemo, useState } from "react";
// Configs
import Head from "next/head";
// Components
import MainLayout from "layouts/main";
import Map from "components/covid-map/map/map.component";
import LastUpdate from "components/covid-map/last-update/last-update.component";
import CasesByFilter from "components/covid-map/cases-by-filter/cases-by-filter.component";
import GlobalCases from "components/covid-map/global-cases.component";
import GraphCases from "components/covid-map/graph-cases/graph-cases.component";
import Footer from "components/covid-map/footer/footer.component";
import Header from "components/covid-map/header/header.component";
// Utils
import { tableColumns } from "components/covid-map/utils";
// Hooks
import useCovidData from "hooks/useCovidData";
// Styles
import "./styles.less";

const CovidMap: FC = () => {
	const handleStyles = () => {
		// selector
	};
	const { allData, briefData, markers } = useCovidData();

	const [filteredData, setFilteredData] = useState({
		casesByCountry: [{}],
		casesByDeaths: [{}],
		casesByCountries: [{}]
	});

	const { casesByCountries, casesByCountry, casesByDeaths } = filteredData;
	const { globalCases, globalDeaths, countryCases } = tableColumns;
	const lastUpdate = new Date();

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

			<MainLayout>
				<div className="covid-map">
					<Header className="covid-map__header" />
					<GlobalCases className="covid-map__global-cases" />
					<CasesByFilter
						cases={casesByCountries}
						title="Casos - Global"
						columns={globalCases}
						className="covid-map__cases-by-countries"
					/>
					<div className="covid-map__map">
						<Map markers={markers} />
					</div>
					<CasesByFilter
						cases={casesByDeaths}
						title="Muertes - Global"
						columns={globalDeaths}
						subtitle={"44444444"}
						className="covid-map__cases-by-deaths"
					/>
					<CasesByFilter
						cases={casesByCountry}
						title="Casos - Argentina"
						columns={countryCases}
						subtitle={"44444444"}
						className="covid-map__cases-by-country"
					/>
					<LastUpdate className="covid-map__last-update" />
					<GraphCases className="covid-map__graph-cases" />
					<Footer className="covid-map__footer" />
				</div>
			</MainLayout>
		</>
	);
};

export default CovidMap;
