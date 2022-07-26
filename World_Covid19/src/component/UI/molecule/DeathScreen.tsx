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
import {Tab_Screen_Props} from '../../../types/navigation/navigation_type';

export default function DeathScreen({
  navigation,
}: Tab_Screen_Props): ReactElement {
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
          Slug: item.Slug,
          NewDeaths: item.NewDeaths,
          TotalDeaths: item.TotalDeaths,
          Date: item.Date,
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
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                if (item.Slug === 'united-states') {
                  navigation.navigate('FlatListScreen', {
                    status: 'deaths',
                    Date: item.Date,
                    NewCases: item.NewDeaths,
                  });
                } else {
                  navigation.navigate('CountryInfo', {
                    country: item.Slug,
                    status: 'deaths',
                    country_title: item.Country,
                    NewCases: item.NewDeaths,
                    Date: item.Date,
                  });
                }
              }}>
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
    backgroundColor: '#ffffff',
    borderColor: '#ADD8E6',
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ADD8E6',
  },
});
