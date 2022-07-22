import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Stack_Screen_Props} from '../../../types/navigation/navigation_type';
import ChartView from '../atom/chartview';
import {fetchCountryInfo} from '../../../api/Covid19_API';
import {LiveCountryInfo} from '../../../types/Covid19_API/type';

export default function CountryScreen({route}: Stack_Screen_Props) {
  const {country, status} = route.params;
  const [cases, setCases] = useState<number[]>([0]);
  const [dates, setDates] = useState<string[]>(['']);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchDayOneTotal = async (): Promise<void> => {
      try {
        const {data} = await fetchCountryInfo(country, status);
        sliceData(data);
        setLoading(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDayOneTotal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <ChartView cases={cases} dates={dates} />
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
