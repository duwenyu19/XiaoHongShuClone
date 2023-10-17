import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Follow from '../screens/HomeScreens/Follow'
import Explore from '../screens/HomeScreens/Explore'
import Nearby from '../screens/HomeScreens/Nearby'

const TopTab = createMaterialTopTabNavigator()

const TobTabNavigator: React.FC = () => {
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
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'red',
          height: 2,
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
}

export default TobTabNavigator;
