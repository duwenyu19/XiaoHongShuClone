import { NavigationProp } from '@react-navigation/native';
import { ImageSourcePropType } from 'react-native';

export type UserDataFollowers = {
  id: string;
  name: string;
  description: string;
  image: ImageSourcePropType;
};

export type UserDataFollowing = {
  id: string;
  name: string;
  description: string;
  image: ImageSourcePropType;
};

export type UserPost = {
  id: string;
  userId: string;
  image: ImageSourcePropType;
  caption: string;
  userAvatar: ImageSourcePropType;
  name?: string;
  description?: string;
};

export type MeStackParamList = {
  MePage: undefined;
  购物车: undefined;
  创作灵感: undefined;
  浏览记录: undefined;
  FollowingNavigator: undefined;
  FollowersNavigator: undefined;
  LikesAndCol: undefined;
  EditProfile: undefined;
  Settings: undefined;
  UserPostGeneral: { 
    post: UserPost
    source: 'explore' | 'following' | 'me'
  };
};

export type FollowingStackParamList = {
  FollowingDetail: undefined;
  UserProfileGeneral: { 
    user: UserDataFollowing;
  };
};

export type FollowersStackParamList = {
  FollowersDetail: undefined;
  UserProfileGeneral: { 
    user: UserDataFollowers;
  };
};

export type HomeStackParamList = {
  HomePage: undefined;
  Follow: undefined;
  Explore: undefined;
  Nearby: undefined;
  UserPostGeneral: { 
    post: UserPost;
    source: 'explore' | 'following' | 'me';
  };
};

export type HomeScreenNavigationProp = NavigationProp<HomeStackParamList, 'HomePage'>;
export type MeScreenNavigationProp = NavigationProp<MeStackParamList, 'MePage'>;
export type FollowingScreenNavigationProp = NavigationProp<FollowingStackParamList, 'FollowingDetail'>;
export type FollowersScreenNavigationProp = NavigationProp<FollowersStackParamList, 'FollowersDetail'>;
