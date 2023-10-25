import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Follow from '../screens/HomeScreens/Follow';
import Explore from '../screens/HomeScreens/Explore';
import Nearby from '../screens/HomeScreens/Nearby';

const TopTab = createMaterialTopTabNavigator();

const HomeTopTabNavigator: React.FC = () => {
  return (
    <TopTab.Navigator
      initialRouteName="Explore"
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {
          backgroundColor: 'white',
          elevation: 0,
          shadowOpacity: 0,
          paddingTop: 10,
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'red',
          height: 2,
          width: '10%',
          left: '11.8%',
          marginBottom: 7,
        },
        tabBarLabelStyle: {
          fontWeight: 'bold',
        },
        tabBarAllowFontScaling: false,
      }}
    >
      <TopTab.Screen name="Follow" component={Follow} />
      <TopTab.Screen name="Explore" component={Explore} />
      <TopTab.Screen name="Nearby" component={Nearby} />
    </TopTab.Navigator>
  );
};

export default HomeTopTabNavigator;
