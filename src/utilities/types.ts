import { NavigationProp } from '@react-navigation/native'

export type MeStackParamList = {
  MePage: undefined
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
  HomePage: undefined
  Follow: undefined
  Explore: undefined
  Nearby: undefined
  UserPostGeneral: {
    userId?: string
  }
}

export type MeScreenNavigationProp = NavigationProp<MeStackParamList, 'MePage'>

export type HomeScreenNavigationProp = NavigationProp<HomeStackParamList, 'HomePage'>

export type FollowingScreenNavigationProp = NavigationProp<FollowingStackParamList, 'FollowingDetail'>

export type FollowersScreenNavigationProp = NavigationProp<FollowersStackParamList, 'FollowersDetail'>