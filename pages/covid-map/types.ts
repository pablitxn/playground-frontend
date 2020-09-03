export type Case = {
  confirmed: number;
  countrycode: {
    iso2: string;
    iso3: string;
  }
  countryregion: string;
  deaths: number;
  lastupdate: string;
  location: {
    lat: number;
    lng: number;
  }
  provicestate: string;
  recovered: number
}

export type BriefData = {
  confirmed: number;
  deaths: number;
  recovered: number;
}

export type Cases = Array<Case>

export type FormatedData = {
  globalCases: number;
  casesByCountries: Cases;
  casesByDeaths: Cases;
  casesByCountry: Case;
}