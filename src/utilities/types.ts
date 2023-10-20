import { NavigationProp } from '@react-navigation/native'

export type MeStackParamList = {
  Me: undefined
  购物车: undefined
  创作灵感: undefined
  浏览记录: undefined
  MeFollowing: undefined
  MeFollowers: undefined
  LikesAndCol: undefined
  EditProfile: undefined
  Settings: undefined

}

export type FollowingStackParamList = {
  FollowingDetail: undefined
  UserProfileGeneral: { 
    userId: string
    dataSource: 'followers' | 'following'
  }
}

export type FollowersStackParamList = {
  FollowersDetail: undefined
  UserProfileGeneral: { 
    userId: string
    dataSource: 'followers' | 'following'
  }
}

export type HomeStackParamList = {
  Home: undefined
  Follow: undefined
  Explore: undefined
  Nearby: undefined
}

export type MeScreenNavigationProp = NavigationProp<MeStackParamList, 'Me'>

export type HomeScreenNavigationProp = NavigationProp<HomeStackParamList, 'Home'>

export type FollowingScreenNavigationProp = NavigationProp<FollowingStackParamList, 'FollowingDetail'>

export type FollowersScreenNavigationProp = NavigationProp<FollowersStackParamList, 'FollowersDetail'>