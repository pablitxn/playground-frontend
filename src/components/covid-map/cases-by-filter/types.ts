import { ICountry } from "interfaces/covid-map/ICountry";

export type IColumns = {
	title: string;
	dataIndex: string;
	width?: number;
	key: string;
}[];

export interface ICasesByFilter {
	className: string;
	columns: IColumns;
	title: string;
	subtitle?: string;
	countries?: ICountry[];
}
