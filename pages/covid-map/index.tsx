// Types
import { FC, useMemo, useState } from "react";
// Components
import MainLayout from "layouts/main";
import Map from "components/covid-map/map/map.component";
import LastUpdate from "components/covid-map/last-update/last-update.component";
import CasesByFilter from "components/covid-map/cases-by-filter/cases-by-filter.component";
import GlobalCases from "components/covid-map/global-cases.component";
import GraphCases from "components/covid-map/graph-cases.component";
import Footer from "components/covid-map/footer.component";
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
		<MainLayout>
			<div className="covid-map">
				<Header className="header" />
				<GlobalCases className="global-cases" />
				<CasesByFilter
					cases={casesByCountries}
					title="Casos - Global"
					columns={globalCases}
					className="cases-by-countries"
				/>
				<Map markers={markers} className="map" />
				<CasesByFilter
					cases={casesByDeaths}
					title="Muertes - Global"
					columns={globalDeaths}
					subtitle={"44444444"}
					className="cases-by-deaths"
				/>
				<CasesByFilter
					cases={casesByCountry}
					title="Casos - Argentina"
					columns={countryCases}
					subtitle={"44444444"}
					className="cases-by-country"
				/>
				<LastUpdate className="last-update" />
				<GraphCases className="graph-cases" />
				<Footer className="footer" />
			</div>
		</MainLayout>
	);
};

export default CovidMap;
