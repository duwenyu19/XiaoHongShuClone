import { createContext } from 'react'

type UserContextType = {
  userCount: number;
  setUserCount: (count: number) => void;
  followersCount: number;
  setFollowersCount: (count: number) => void;
};

const UserContext = createContext({
  userCount: 0,
  setUserCount: (count: number) => {},
  followersCount: 0,
  setFollowersCount: (count: number) => {},
});

export default UserContext
