import { createContext } from 'react'

const UserContext = createContext({
  userCount: 0,
  setUserCount: (count: number) => {}
});

export default UserContext
