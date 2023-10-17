import { NavigationProp } from '@react-navigation/native'

export type MeStackParamList = {
  MePage: undefined
  UserCart: undefined
  Browse: undefined
  ViewedPosts: undefined
  Following: undefined
  Followers: undefined
  Likes: undefined
  EditProfile: undefined
  Setting: undefined
};

export type HomeStackParamList = {
  HomePage: undefined
  Follow: undefined
  Explore: undefined
  Nearby: undefined
}

export type MeScreenNavigationProp = NavigationProp<MeStackParamList, 'MePage'>

export type HomeScreenNavigationProp = NavigationProp<HomeStackParamList, 'HomePage'>
