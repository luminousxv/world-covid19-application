import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {ReactElement} from 'react';
import ConfirmedScreen from '../UI/molecule/ConfirmedScreen';
import DeathScreen from '../UI/molecule/DeathScreen';
import {TabBarIcon} from '../UI/atom/barIcons';
import {TabParamList} from '../../types/navigation/navigation_type';

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabScreen(): ReactElement {
  return (
    <Tab.Navigator
      initialRouteName="Confirmed"
      screenOptions={({route}) => ({
        tabBarLabel: route.name,
        tabBarIcon: ({focused}) => TabBarIcon(focused, route.name),
        tabBarLabelPosition: 'below-icon',
      })}>
      <Tab.Screen
        name="Confirmed"
        component={ConfirmedScreen}
        options={{
          title: 'Total Confirmed',
          headerStyle: {backgroundColor: '#ADD8E6'},
        }}
      />
      <Tab.Screen
        name="Deaths"
        component={DeathScreen}
        options={{
          title: 'Total Deaths',
          headerStyle: {backgroundColor: '#ADD8E6'},
        }}
      />
    </Tab.Navigator>
  );
}
