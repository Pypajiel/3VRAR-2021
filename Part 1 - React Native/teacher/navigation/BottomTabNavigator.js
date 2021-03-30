import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import { HeaderLeft, HeaderRight } from '../components/Header/index';
import CharacterScreen from '../screens/Character/Character.screen';
import HomeScreen from '../screens/Home/Home.screen';
import GardenScreen from '../screens/Garden/Garden.screen';
import Colors from '../constants/Colors';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Character';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({
    title: '',
    headerLeft: () => getHeaderLeft(route),
    headerRight: () => <HeaderRight />
  });

  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        activeTintColor: Colors.primary,
      }}
    >
      <BottomTab.Screen
        name="Character"
        component={CharacterScreen}
        options={{
          title: 'Character',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-body" />,
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        }}
      />
      <BottomTab.Screen
        name="Garden"
        component={GardenScreen}
        options={{
          title: 'Garden',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-globe" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderLeft(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Character':
      return <HeaderLeft title={'Choose your character'} />;
    case 'Home':
      return <HeaderLeft title={'Welcome Home'} />;
    case 'Garden':
      return <HeaderLeft title={'Feel fresh'} />;
    default:
      return <HeaderLeft title={'Oh Oh Oh'} />;
  }
}
