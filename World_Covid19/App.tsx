import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TabScreen from './src/component/pages/TabScreen';
import CountryScreen from './src/component/UI/molecule/CountryScreen';
import {
  RootStackParamList,
  StackNavigationProp,
} from './src/types/navigation/navigation_type';
import {Button} from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  const HeaderLeft = (): JSX.Element => {
    const navigation = useNavigation<StackNavigationProp>();
    return <Button title="Go Back" onPress={() => navigation.goBack()} />;
  };

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
            initialParams={{country: '', status: 'confirmed'}}
            options={({route}) => ({
              title: route.params.country_title + ' Confirmed',
              headerLeft: ({}) => <HeaderLeft />,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
export default App;
