import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadingPage from './screens/LoadingPage';

const RootNavigation = () => {
  const Stack = createNativeStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions} c>
        <Stack.Screen name="LoadingPage" component={LoadingPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
