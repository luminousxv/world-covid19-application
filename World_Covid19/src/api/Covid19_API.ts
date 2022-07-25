import axios, {AxiosResponse} from 'axios';
import {
  LiveCountryInfo,
  StatusParams,
  Summary,
} from '../types/Covid19_API/type';

export function fetchCovidSummary(): Promise<AxiosResponse<Summary>> {
  const url = 'https://api.covid19api.com/summary';
  return axios.get(url);
}

export function fetchCountryInfo(
  countryCode: string,
  status: StatusParams,
): Promise<AxiosResponse<LiveCountryInfo[]>> {
  const url = `https://api.covid19api.com/total/dayone/country/${countryCode}/status/${status}`;
  return axios.get(url);
}

export function fetchUSInfo(
  status: StatusParams,
  states: string,
): Promise<AxiosResponse<LiveCountryInfo[]>> {
  const url = `https://api.covid19api.com/total/dayone/country/united-states/status/${status}`;
  return axios.get(url, {params: {province: states}});
}

export function calcNewCases(data: LiveCountryInfo[]): number {
  const newCases = data[data.length - 1].Cases - data[data.length - 2].Cases;
  return newCases;
}

export const states: string[] = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
];
