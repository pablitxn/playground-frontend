import { ICountry } from "interfaces/covid-map/ICountry";

export type Columns = {
	title: string;
	dataIndex: string;
	width?: number;
	key: string;
}[];

export interface ICasesByFilter {
	className: string;
	columns: Columns;
	title: string;
	subtitle?: string;
	countries?: ICountry[];
}
