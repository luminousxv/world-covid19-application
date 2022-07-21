import axios, {AxiosResponse} from 'axios';
import {LiveCountryInfo, StatusParams, Summary} from '../types/type';

export function fetchCovidSummary(): Promise<AxiosResponse<Summary>> {
  const url = 'https://api.covid19api.com/summary';
  return axios.get(url);
}

export function fetchCountryInfo(
  countryCode: string,
  status: StatusParams,
): Promise<AxiosResponse<LiveCountryInfo[]>> {
  const url = `https://api.covid19api.com/country/${countryCode}/status/${status}`;
  return axios.get(url);
}
