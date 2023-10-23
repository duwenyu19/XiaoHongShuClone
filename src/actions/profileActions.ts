import { ProfileData } from "../screens/MeScreens/EditProfile"


export const updateProfileData = (data: ProfileData) => {
    return {
      type: 'UPDATE_PROFILE_DATA',
      payload: data,
    }
  }
  