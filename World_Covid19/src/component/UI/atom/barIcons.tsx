import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';

export const TabBarIcon = (focused: boolean, name: string): JSX.Element => {
  let iconName: string, iconSize: number;

  iconName = name === 'Confirmed' ? 'checkmark-done-outline' : 'pulse-outline';

  iconSize = focused ? 30 : 20;
  return <Icon name={iconName} size={iconSize} />;
};
