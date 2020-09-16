import { IColumns } from "components/covid-map/cases-by-filter/types"

type TableColumns = {
  confirmed: IColumns;
  deaths: IColumns;
  recovered: IColumns;
}

export const tableColumns: TableColumns = {
  confirmed: [
    {
      title: "Infectados",
      dataIndex: "confirmed",
      key: "confirmed",
      // width: 50
    },
    {
      title: "Paises",
      dataIndex: "countryregion",
      key: "countryregion",
      // width: 150
    }
  ],
  deaths: [
    {
      title: "Muertes",
      dataIndex: "deaths",
      key: "deaths",
      // width: 50
    },
    {
      title: "Paises",
      dataIndex: "countryregion",
      key: "countryregion",
      // width: 150
    }
  ],
  recovered: [
    {
      title: "Recuperados",
      dataIndex: "recovered",
      key: "recovered",
      // width: 50
    },
    {
      title: "Paises",
      dataIndex: "countryregion",
      key: "countryregion",
      // width: 150
    }
  ]
}