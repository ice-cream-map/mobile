import React from 'react';
import { View } from 'react-native';
import RootNavigation from './RootNavigation';
import { AppearanceProvider } from 'react-native-appearance';
import { ThemeProvider } from './contexts/ThemeContext';

const App = () => {
  return (
    <AppearanceProvider>
      <ThemeProvider>
        <View style={{ flex: 1 }}>
          <RootNavigation />
        </View>
      </ThemeProvider>
    </AppearanceProvider>
  );
};

export default App;
