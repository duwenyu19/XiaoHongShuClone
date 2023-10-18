import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Posts from '../screens/MeTopBarScreens/Posts';
import TagComponent from '../screens/MeTopBarScreens/Tag';
import CollectsComponent from '../screens/MeTopBarScreens/Collects';
import LikesComponent from '../screens/MeTopBarScreens/Likes';

const MeTopTab = createMaterialTopTabNavigator();

const MeTopTabNavigator: React.FC = () => {
  return (
    <MeTopTab.Navigator
      initialRouteName="Posts"
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {
          backgroundColor: 'white',
          elevation: 0,
          shadowOpacity: 0,
          paddingTop: 10,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'red',
          height: 4,
          width: '10%',
          left: '7.7%',
          alignSelf: 'center',
        },
        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: 12,
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
}

export default MeTopTabNavigator;
