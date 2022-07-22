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
import {Tab_Screen_Props} from '../../../types/navigation/navigation_type';
import {Confirmed, Summary} from '../../../types/Covid19_API/type';

export default function ConfirmedScreen({
  navigation,
}: Tab_Screen_Props): ReactElement {
  const [countries, setCountries] = useState<Confirmed[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const setupData = async (): Promise<void> => {
      try {
        const {data} = await fetchCovidSummary();
        setConfirmed(data);
        setLoading(true);
      } catch (error) {
        console.log(error);
      }
    };
    setupData();
  }, []);

  function setConfirmed(data: Summary) {
    data.Countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);
    data.Countries.map(item =>
      setCountries(prev => [
        ...prev,
        {
          Country: item.Country,
          CountryCode: item.CountryCode,
          Slug: item.Slug,
          NewConfirmed: item.NewConfirmed,
          TotalConfirmed: item.TotalConfirmed,
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
                navigation.navigate('CountryInfo', {
                  country: item.Slug,
                  status: 'confirmed',
                  country_title: item.Country,
                });
              }}>
              <Text>
                {item.Country}: {item.TotalConfirmed}
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
    backgroundColor: '#ADD8E6',
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
