// Types
import { FC } from "react";
// Components
import MainLayout from "layouts/main";
import Map from "components/covid-map/map.component";

const CovidMap: FC = () => {
	return (
		<MainLayout>
			<header>
				<h1 className="title-page">☣ CoVid 19 - Map ☣</h1>
			</header>
			<div className="content">
				<div className="map" id="map"></div>
				<div className="options">
					<label>Seleccioná un filtro</label>
					<select name="filter-map" className="filter" id="filter">
						<option value="1" selected>
							Infectados
						</option>
						<option value="2">Muertos</option>
						<option value="3">Recuperados</option>
					</select>
				</div>
			</div>
			<Map />
		</MainLayout>
	);
};

export default CovidMap;
