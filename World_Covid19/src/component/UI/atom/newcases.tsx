import {useNavigation} from '@react-navigation/native';
import React, {ReactElement, useState} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  DetailedScreenProp,
  TableProp,
} from '../../../types/navigation/navigation_type';

export default function NewCasesView({
  country,
  newcases,
  total,
  date,
  cases,
  datearray,
  status,
}: TableProp): ReactElement {
  const [data] = useState<string[]>([
    `Country / States: ${country}`,
    `New (By Country): ${newcases}`,
    `Total: ${total}`,
    `Update Date: ${date}`,
  ]);
  const navigation = useNavigation<DetailedScreenProp>();
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              navigation.navigate('DetailedScreen', {
                country: country,
                cases: cases,
                date: datearray,
                status: status,
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
  item: {
    padding: 10,
    fontSize: 15,
    height: 50,
    borderWidth: 5,
    borderColor: '#ffffff',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
