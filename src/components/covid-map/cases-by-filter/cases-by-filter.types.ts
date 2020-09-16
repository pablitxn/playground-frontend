import { ICountry } from "interfaces/covid-map/ICountry";

type Column = {
	title: string;
	dataIndex: string;
	width?: number;
	key: string;
};

export interface ICasesByFilter {
	className: string;
	columns: Columns;
	title: string;
	subtitle?: string;
	countries?: ICountry[];
}

export type Columns = Column[];
