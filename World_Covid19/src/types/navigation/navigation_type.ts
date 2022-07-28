import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StatusParams} from '../Covid19_API/type';

export type RootStackParamList = {
  TabScreen: undefined;
  CountryInfo: {
    country: string;
    status: StatusParams;
    country_title: string;
    NewCases: number;
    Date: string;
  };
  FlatListScreen: {
    status: StatusParams;
    Date: string;
    NewCases: number;
  };
  DetailedScreen: {
    country: string;
    cases: number[];
    date: string[];
    status: string;
  };
};

export type TabParamList = {
  Confirmed: undefined;
  Deaths: undefined;
};

type Tab_Props = NativeStackScreenProps<RootStackParamList, 'TabScreen'>;

type TabNavigationProp = Tab_Props['navigation'];

type Stack_Props = NativeStackScreenProps<RootStackParamList, 'CountryInfo'>;

type Detailed_Props = NativeStackScreenProps<
  RootStackParamList,
  'DetailedScreen'
>;

type Flatlist_Props = NativeStackScreenProps<
  RootStackParamList,
  'FlatListScreen'
>;

export type StackNavigationProp = Stack_Props['navigation'];

type StackRouteProp = Stack_Props['route'];

type FlatlistNavigationProp = Flatlist_Props['navigation'];

type FlatlistRouteProp = Flatlist_Props['route'];

export type DetailedScreenProp = Detailed_Props['navigation'];

export type DetailedScreenRouteProp = Detailed_Props['route'];

export type Tab_Screen_Props = {
  navigation: TabNavigationProp;
};

export type Stack_Screen_Props = {
  navigation: StackNavigationProp;
  route: StackRouteProp;
};

export type Flatlist_Screen_Props = {
  navigation: FlatlistNavigationProp;
  route: FlatlistRouteProp;
};

export type Detailed_Screen_Props = {
  navigation: DetailedScreenProp;
  route: DetailedScreenRouteProp;
};

export type ChartProp = {
  cases: number[];
  dates: string[];
};

export type TableProp = {
  country: string;
  newcases: number;
  total: number;
  date: string;
  cases: number[];
  datearray: string[];
  status: string;
};
