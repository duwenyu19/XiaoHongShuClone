import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Follow from '../screens/HomeScreens/Follow';
import Explore from '../screens/HomeScreens/Explore';
import Nearby from '../screens/HomeScreens/Nearby';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet, View } from 'react-native';
import UserContext from '../utilities/UserContext';
import { useContext } from 'react';

const TopTab = createMaterialTopTabNavigator();

const HomeTopTabNavigator: React.FC = () => {
  const insets = useSafeAreaInsets();
  const { dimensions } = useContext(UserContext);

  return (
    <View style={{flex: 1, paddingTop: insets.top}}>
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
                height: dimensions.width * 0.005333,
                width: '10%',
                left: '11.8%',
                marginBottom: dimensions.width * 0.018666,
              },
              tabBarLabelStyle: {
                fontSize: dimensions.width * 0.038,
                fontWeight: 'bold',
              },
              tabBarAllowFontScaling: false,
            }}
          >
            <TopTab.Screen name="Follow" component={Follow} />
            <TopTab.Screen name="Explore" component={Explore} />
            <TopTab.Screen name="Nearby" component={Nearby} />
          </TopTab.Navigator>
    </View>
  );
};

export default HomeTopTabNavigator;
