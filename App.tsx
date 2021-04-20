import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
// import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { MenuLateral } from './src/navigator/MenuLateral';
// import { Tabs } from './src/navigator/Tabs';
// import { StackNavigator } from './src/navigator/StackNavigator';


const App = () => {
  return (
    <NavigationContainer>
        {/* <StackNavigator /> */}
        {/* <MenuLateralBasico /> */}
        <MenuLateral />
        {/* <Tabs /> */}
    </NavigationContainer>
  )
}

export default App;
