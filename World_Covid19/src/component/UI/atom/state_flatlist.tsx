import React, {ReactElement} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {Flatlist_Screen_Props} from '../../../types/navigation/navigation_type';
import {states} from '../../../api/Covid19_API';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function FlatListScreen({
  route,
  navigation,
}: Flatlist_Screen_Props): ReactElement {
  const {status} = route.params;
  return (
    <View style={styles.container}>
      <FlatList
        data={states}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              navigation.navigate('CountryInfo', {
                country: item,
                status: status,
                country_title: item,
              });
            }}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
  },
  item: {
    padding: 10,
    fontWSize: 20,
    height: 60,
    borderWidth: 10,
    borderColor: '#ADD8E6',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
