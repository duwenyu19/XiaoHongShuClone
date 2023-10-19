import { createContext } from 'react'

const UserContext = createContext({
  userCount: 0,
  setUserCount: (count: number) => {},
  followersCount: 0,
  setFollowersCount: (count: number) => {},
});

export default UserContext
