// React
import { FC } from "react";
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
// Styles
import "./styles.less";

interface ICovidMapLayout {
	covidData: any;
}

const CovidMapLayout: FC<ICovidMapLayout> = ({ covidData }) => {
	const {
		markers,
		globalCases,
		confirmed,
		deaths,
		recovered,
		affectedCountries,
		totalRecovered,
		totalDeaths
	} = covidData;

	return (
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
	);
};

export default CovidMapLayout;
