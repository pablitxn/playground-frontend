// Types
import { FC, useMemo, useState } from "react";
// Components
import MainLayout from "layouts/main";
import Map from "components/covid-map/map.component";
import OtherMap from "components/covid-map/other-map.component";
// Hooks
import useCovidData from "hooks/useCovidData";
// Styles
import "./styles.less";
import { defaultStyle } from "components/covid-map/map.styles";

const CovidMap: FC = () => {
	const handleStyles = () => {
		// selector
	};
	const { allData, briefData, markers } = useCovidData();

	return (
		<MainLayout>
			<div className="covid-map">
				<header>
					<h1 className="title-page">☣ CoVid 19 - Map ☣</h1>
				</header>
				<div className="content">
					<div className="options">
						{/* <label>Seleccioná un filtro</label>
						<select name="filter-map" className="filter" id="filter">
							<option value="1" selected>
								Infectados
							</option>
							<option value="2">Muertos</option>
							<option value="3">Recuperados</option>
						</select> */}
					</div>
				</div>
				<Map markers={markers} className="map" />
				<OtherMap />
			</div>
		</MainLayout>
	);
};

export default CovidMap;
