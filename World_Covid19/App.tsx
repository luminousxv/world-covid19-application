import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TabScreen from './src/component/pages/TabScreen';
import CountryScreen from './src/component/UI/molecule/CountryScreen';
import {RootStackParamList} from './src/types/navigation/navigation_type';
import FlatListScreen from './src/component/UI/atom/state_flatlist';
import DetailedScreen from './src/component/UI/molecule/DetailedScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="TabScreen"
            component={TabScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CountryInfo"
            component={CountryScreen}
            options={({route}) => ({
              title: route.params.country_title + ' ' + route.params.status,
            })}
          />
          <Stack.Screen
            name="FlatListScreen"
            component={FlatListScreen}
            initialParams={{status: 'confirmed'}}
            options={{title: 'Choose State'}}
          />
          <Stack.Screen
            name="DetailedScreen"
            component={DetailedScreen}
            options={({route}) => ({
              title:
                route.params.country +
                ' ' +
                route.params.status +
                ' ' +
                'Details',
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
export default App;
