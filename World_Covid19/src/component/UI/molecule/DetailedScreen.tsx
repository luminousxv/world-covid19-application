import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import {Details} from '../../../types/Covid19_API/type';
import {Detailed_Screen_Props} from '../../../types/navigation/navigation_type';

export default function DetailedScreen({route}: Detailed_Screen_Props) {
  const {cases, date} = route.params;
  const [data, setData] = useState<Details[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const reverseData = (casearray: number[], datearray: string[]) => {
      for (let i = 0; i < casearray.length; i++) {
        setData(prev => [
          ...prev,
          {
            cases: casearray[i],
            date: datearray[i],
          },
        ]);
      }
      setLoading(true);
    };
    reverseData(cases, date);
  }, [cases, date]);

  if (loading === false) {
    return (
      <View style={styles.loading}>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <View>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <Text style={styles.item}>
              {item.date} : {item.cases}{' '}
            </Text>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ADD8E6',
  },
  item: {
    padding: 10,
    fontSize: 15,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    backgroundColor: '#ffffff',
    borderColor: '#ADD8E6',
    textAlign: 'center',
  },
});
