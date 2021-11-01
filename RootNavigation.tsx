import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadingPage from './screens/LoadingPage';
import HomePage from './screens/HomePage';
import MapPage from './screens/MapPage';

const RootNavigation = () => {
  const Stack = createNativeStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="LoadingPage" component={LoadingPage} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="MapPage" component={MapPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
