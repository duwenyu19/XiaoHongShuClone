import { createContext } from 'react';

type UserContextType = {
  userCount: number;
  setUserCount: (count: number) => void;
  followersCount: number;
  setFollowersCount: (count: number) => void;
  dimensions: {width: number, height: number},
};

const UserContext = createContext({
  userCount: 0,
  setUserCount: (count: number) => {},
  followersCount: 0,
  setFollowersCount: (count: number) => {},
  dimensions: {width: 0, height: 0}
});

export default UserContext;
