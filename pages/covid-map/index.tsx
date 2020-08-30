// Types
import { FC, useMemo, useState } from "react";
// Components
import MainLayout from "layouts/main";
import Map from "components/covid-map/map/map.component";
import LastUpdate from "components/covid-map/info/last-update.component";
import CasesByFilter from "components/covid-map/info/cases-by-filter.component";
import GlobalCases from "components/covid-map/info/global-cases.component";
import GraphCases from "components/covid-map/info/graph-cases.component";
import Footer from "components/covid-map/info/footer.component";
import Header from "components/covid-map/info/header.component";
// Hooks
import useCovidData from "hooks/useCovidData";
// Styles
import "./styles.less";

const CovidMap: FC = () => {
	const handleStyles = () => {
		// selector
	};
	const { allData, briefData, markers } = useCovidData();

	return (
		<MainLayout>
			<div className="covid-map">
				<Header className="header" />
				<CasesByFilter className="cases-by-countries" />
				<GlobalCases className="global-cases" />
				<Map markers={markers} className="map" />
				<CasesByFilter className="cases-by-country" />
				<CasesByFilter className="cases-by-deaths" />
				<LastUpdate className="last-update" />
				<GraphCases className="graph-cases" />
				<Footer className="footer" />
			</div>
		</MainLayout>
	);
};

export default CovidMap;

/**
 *
					<h1 className="title-page">☣ CoVid 19 - Map ☣</h1>
 *
 */
