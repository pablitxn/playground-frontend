// Types
import { FC, useEffect, useState } from "react";
import { ICasesByFilter } from "./cases-by-filter.types";
import { Cases } from "pages/covid-map/types";
// AntD
import { Table } from "antd";
// Styles
import "./cases-by-filter.styles.less";

const CasesByFilter: FC<ICasesByFilter> = ({
	className,
	columns,
	title,
	subtitle,
	cases
}) => {
	const onSubtitle = !subtitle ? "--without-subtitle" : "";

	const [state, setState] = useState([
		{
			confirmed: 0,
			countryregion: "",
			deaths: 0,
			recovered: 0,
			key: 0
		}
	]);

	useEffect(() => {
		const { data } = cases;
		if (data) {
			const formatedCases = data.map(($case: any, i: number) => {
				const $cases = {
					confirmed: $case.confirmed,
					countryregion: $case.countryregion,
					deaths: $case.deaths,
					recovered: $case.recovered,
					key: i
				};
				return { ...$cases };
			});
			setState(formatedCases);
			console.log("asd", formatedCases);
		}
	}, [cases]);

	return (
		<div className={`cases-by-filter ${className}`}>
			<div className="cases-by-filter__header">
				<h2
					className={`cases-by-filter__title cases-by-filter__title${onSubtitle}`}
				>
					{title}
				</h2>
				<span
					className={`cases-by-filter__subtitle cases-by-filter__subtitle${onSubtitle}`}
				>
					{subtitle}
				</span>
			</div>
			<Table
				columns={columns}
				dataSource={state}
				pagination={false}
				size="small"
				scroll={{ y: 240 }}
				showHeader={false}
				className="cases-by-filter__table"
			/>
		</div>
	);
};

export default CasesByFilter;
