// Types
import { FC, useEffect } from "react";
import { ICasesByFilter } from "./cases-by-filter.types";
// AntD
import { Table } from "antd";
// Styles
import "./cases-by-filter.styles.less";

const data = [];
for (let i = 0; i < 60; i++) {
	data.push({
		key: i,
		name: `Edward King ${i}`,
		age: 32,
		address: `London, Park Lane no. ${i}`
	});
}

const CasesByFilter: FC<ICasesByFilter> = ({
	className,
	columns,
	title,
	subtitle,
	cases
}) => {
	useEffect(() => {
		console.log(cases);
	}, [cases]);

	const onSubtitle = !subtitle ? "--without-subtitle" : "";

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
				dataSource={data}
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
