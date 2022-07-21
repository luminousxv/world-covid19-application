import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabBarIcon} from './src/component/UI/atom/barIcons';
import ConfirmedScreen from './src/component/pages/ConfirmedScreen';
import DeathScreen from './src/component/pages/DeathScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
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
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
export default App;
