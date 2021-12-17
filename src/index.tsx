import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screen1 from './screens/screen-1';
import Screen2 from './screens/screen-2';
import Screen3 from './screens/screen-3';

const HomeRoutes = createNativeStackNavigator();

export default function HomeModule() {
  return (
    <HomeRoutes.Navigator
      initialRouteName="Screen1"
      screenOptions={{ animation: 'slide_from_right' }}
    >
      <HomeRoutes.Screen name="Screen1" component={Screen1} />
      <HomeRoutes.Screen name="Screen2" component={Screen2} />
      <HomeRoutes.Screen name="Screen3" component={Screen3} />
    </HomeRoutes.Navigator>
  );
}
