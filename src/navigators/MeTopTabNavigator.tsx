import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Posts from '../screens/MeTopBarScreens/Posts';
import TagComponent from '../screens/MeTopBarScreens/Tag';
import CollectsComponent from '../screens/MeTopBarScreens/Collects';
import LikesComponent from '../screens/MeTopBarScreens/Likes';
import UserContext from '../utilities/UserContext';
import { useContext } from 'react';

const MeTopTab = createMaterialTopTabNavigator();

const MeTopTabNavigator: React.FC = () => {
  const { dimensions } = useContext(UserContext);

  return (
    <MeTopTab.Navigator
      initialRouteName="Posts"
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {
          backgroundColor: 'white',
          height: dimensions.width * 0.112,
          elevation: 0,
          shadowOpacity: 0,
          borderTopLeftRadius: dimensions.width * 0.026666,
          borderTopRightRadius: dimensions.width * 0.026666,
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'red',
          height: dimensions.width * 0.008,
          width: '10%',
          left: '7.5%',
          alignSelf: 'center',
          marginBottom: dimensions.width * 0.018666,
        },
        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: dimensions.width * 0.032,
          textAlignVertical: 'center',
        },
        tabBarAllowFontScaling: false,
      }}
    >
      <MeTopTab.Screen name="Posts" component={Posts} />
      <MeTopTab.Screen name="Tag" component={TagComponent} />
      <MeTopTab.Screen name="Collects" component={CollectsComponent} />
      <MeTopTab.Screen name="Likes" component={LikesComponent} />
    </MeTopTab.Navigator>
  );
};

export default MeTopTabNavigator;
