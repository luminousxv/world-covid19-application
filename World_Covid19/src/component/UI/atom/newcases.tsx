import React, {ReactElement, useState} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {TableProp} from '../../../types/navigation/navigation_type';

export default function NewCasesView({
  country,
  newcases,
  total,
  date,
}: TableProp): ReactElement {
  const [data] = useState<string[]>([
    `Country / States: ${country}`,
    `New: ${newcases}`,
    `Total: ${total}`,
    `Update Date: ${date}`,
  ]);
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.item}>
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
    fontWSize: 20,
    height: 60,
    borderWidth: 10,
    borderColor: '#ffffff',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
