import React, {ReactElement, useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {fetchCovidSummary} from '../../../api/Covid19_API';
import {Deaths, Summary} from '../../../types/Covid19_API/type';

export default function DeathScreen(): ReactElement {
  const [countries, setCountries] = useState<Deaths[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const setupData = async (): Promise<void> => {
      try {
        const {data} = await fetchCovidSummary();
        setDeaths(data);
        setLoading(true);
      } catch (error) {
        console.log(error);
      }
    };
    setupData();
  }, []);

  function setDeaths(data: Summary) {
    data.Countries.sort((a, b) => b.TotalDeaths - a.TotalDeaths);
    data.Countries.map(item =>
      setCountries(prev => [
        ...prev,
        {
          Country: item.Country,
          CountryCode: item.CountryCode,
          NewDeaths: item.NewDeaths,
          TotalDeaths: item.TotalDeaths,
        },
      ]),
    );
  }

  if (loading === false) {
    return (
      <View style={styles.loading}>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={countries}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.item}>
              <Text>
                {item.Country}: {item.TotalDeaths}
              </Text>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: '#ADD8E6',
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ADD8E6',
  },
});
