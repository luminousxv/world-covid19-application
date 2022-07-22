import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StatusParams} from '../Covid19_API/type';

export type RootStackParamList = {
  TabScreen: undefined;
  CountryInfo: {
    country: string;
    status: StatusParams;
    country_title: string;
  };
};

export type TabParamList = {
  Confirmed: undefined;
  Deaths: undefined;
};

type Tab_Props = NativeStackScreenProps<RootStackParamList, 'TabScreen'>;

type TabNavigationProp = Tab_Props['navigation'];

type Stack_Props = NativeStackScreenProps<RootStackParamList, 'CountryInfo'>;

export type StackNavigationProp = Stack_Props['navigation'];

type StackRouteProp = Stack_Props['route'];

export type Tab_Screen_Props = {
  navigation: TabNavigationProp;
};

export type Stack_Screen_Props = {
  navigation: StackNavigationProp;
  route: StackRouteProp;
};

export type ChartProp = {
  cases: number[];
  dates: string[];
};
