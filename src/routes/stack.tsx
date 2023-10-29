import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Cart from '../screens/Cart';

export type StackRoutes = {
  home: undefined;
  cart: undefined;
};

const StackRoutes = (): JSX.Element => {
  const { Navigator, Screen } = createNativeStackNavigator<StackRoutes>();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={Home} />

      <Screen name="cart" component={Cart} />
    </Navigator>
  );
};

export default StackRoutes;
