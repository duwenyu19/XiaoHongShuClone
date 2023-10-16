import { NavigationProp } from '@react-navigation/native';

export type RootStackParamList = {
  MePage: undefined;
  UserCartPage: undefined;
};

export type MeScreenNavigationProp = NavigationProp<RootStackParamList, 'MePage'>;
