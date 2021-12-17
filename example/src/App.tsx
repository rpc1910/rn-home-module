import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeLibProvider } from '@rpc_1910/ui';

import HomeModule from '@rpc_1910/home-module';

export default function App() {
  return (
    <ThemeLibProvider>
      <NavigationContainer>
        <HomeModule />
      </NavigationContainer>
    </ThemeLibProvider>
  );
}
