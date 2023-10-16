import { NavigationProp } from '@react-navigation/native';

export type RootStackParamList = {
  MePage: undefined;
  UserCart: undefined;
};

export type MeScreenNavigationProp = NavigationProp<RootStackParamList, 'MePage'>;
