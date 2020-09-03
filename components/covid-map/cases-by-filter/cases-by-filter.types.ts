type Column = {
  title: string;
  dataIndex: string;
  width: number;
};

export interface ICasesByFilter {
  className: string;
  columns: Columns;
  title: string;
  subtitle?: string;
  cases: any;
}

export type Columns = Array<Column>;
