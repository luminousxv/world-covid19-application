/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Stack_Screen_Props} from '../../../types/navigation/navigation_type';
import ChartView from '../atom/chartview';
import {fetchCountryInfo, fetchUSInfo, states} from '../../../api/Covid19_API';
import {LiveCountryInfo} from '../../../types/Covid19_API/type';
import NewCasesView from '../atom/newcases';

export default function CountryScreen({route}: Stack_Screen_Props) {
  const {country, status, country_title, NewCases, Date} = route.params;
  const [cases, setCases] = useState<number[]>([0]);
  const [dates, setDates] = useState<string[]>(['']);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchDayOneTotal = async (): Promise<void> => {
      try {
        const {data} = states.some(item => item === country)
          ? await fetchUSInfo(status, country)
          : await fetchCountryInfo(country, status);
        sliceData(data);
        setLoading(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDayOneTotal();
  }, []);

  const sliceData = (data: LiveCountryInfo[]) => {
    data.map(item => setCases(prev => [...prev, item.Cases]));
    data.map(item => setDates(prev => [...prev, sliceString(item.Date)]));
  };

  if (loading === false) {
    return (
      <View style={styles.loading}>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <View>
        <View>
          <ChartView cases={cases} dates={dates} />
        </View>
        <View>
          <NewCasesView
            country={country_title}
            newcases={NewCases}
            total={cases[cases.length - 1]}
            date={Date}
            cases={cases}
            datearray={dates}
            status={status}
          />
        </View>
      </View>
    );
  }
}

const sliceString = (item: string): string => {
  return item.substring(0, 10);
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ADD8E6',
  },
});
