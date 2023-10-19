import { NavigationProp } from '@react-navigation/native'

export type MeStackParamList = {
  MePage: undefined
  购物车: undefined
  创作灵感: undefined
  浏览记录: undefined
  Following: undefined
  Followers: undefined
  LikesAndCol: undefined
  EditProfile: undefined
  Settings: undefined
  UserProfileGeneral: { userId: string }
};

export type HomeStackParamList = {
  HomePage: undefined
  Follow: undefined
  Explore: undefined
  Nearby: undefined
}

export type MeScreenNavigationProp = NavigationProp<MeStackParamList, 'MePage'>

export type HomeScreenNavigationProp = NavigationProp<HomeStackParamList, 'HomePage'>

export type UserProfileGeneralNavigationProp = NavigationProp<MeStackParamList, 'UserProfileGeneral'>;

