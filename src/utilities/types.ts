import { NavigationProp } from '@react-navigation/native'

export type RootStackParamList = {
  MePage: undefined
  UserCart: undefined
  Browse: undefined
};

export type MeScreenNavigationProp = NavigationProp<RootStackParamList, 'MePage'>
