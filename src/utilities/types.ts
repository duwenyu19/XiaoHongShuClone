import { NavigationProp } from '@react-navigation/native'

export type RootStackParamList = {
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

export type MeScreenNavigationProp = NavigationProp<RootStackParamList, 'MePage'>
