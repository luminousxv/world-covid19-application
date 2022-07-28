export interface Summary {
  Global: Global;
  Countries: Countries[];
}

interface Global {
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
}

export interface Countries extends Global {
  Country: string;
  CountryCode: string;
  Slug: string;
  Date: string;
}

export interface LiveCountryInfo {
  Country: string;
  CountryCode: string;
  Cases: number;
  Status: string;
  Date: string;
}

export interface Confirmed {
  Country: string;
  CountryCode: string;
  Slug: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  Date: string;
}

export interface Deaths {
  Country: string;
  CountryCode: string;
  Slug: string;
  NewDeaths: number;
  TotalDeaths: number;
  Date: string;
}

export interface Details {
  cases: number;
  date: string;
}

export type StatusParams = 'confirmed' | 'deaths';
