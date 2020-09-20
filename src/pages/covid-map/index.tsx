// React
import { FC, useEffect, useState } from "react";
// Next
import Head from "next/head";
// Layouts
import CovidMapLayout from "layouts/covid-map";
// Services
import services from "services/covid-map";

const CovidMap: FC = () => {
	const [state, setState] = useState<any>();

	useEffect(() => {
		const getData = async () => {
			const data = await services.getCovidData();
			setState(data);
		};

		getData();
	}, []);

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

			{state ? <CovidMapLayout covidData={state} /> : <span>loading...</span>}
		</>
	);
};

export default CovidMap;
