import { ProfileData } from "../screens/MeScreens/EditProfile"
import { usersDataPostMe, initializeUsersDataPostMe } from "../utilities/usersDataPostMe";

export type RootState = {
    profile: ProfileData;
};

export const initialState: ProfileData = {
    username: '默认喵星人名字',
    email: '默认喵箱',
    bio: '默认喵语',
    gender: 'Female',
    birthDate: '喵星喵年喵月',
    location: '喵星',
    job: '给铲屎的添加工作',
    education: '喵星喵市喵立大学',
};
  
const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'UPDATE_PROFILE_DATA':
            initializeUsersDataPostMe(action.payload.username);
            return { ...state, ...action.payload };
        default:
            return state;
    }
};
  
export default profileReducer;
