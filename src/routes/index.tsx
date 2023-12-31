import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from './stack';

export const Routes = (): JSX.Element => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};
