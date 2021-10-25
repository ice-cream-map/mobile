import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFonts, Rancho_400Regular } from '@expo-google-fonts/rancho';
import AppLoading from 'expo-app-loading';

const LoadingPage = () => {
  const [fontsLoaded] = useFonts({
    Rancho_400Regular,
  });

  return (
    <>
      {!fontsLoaded ? (
        <AppLoading />
      ) : (
        <View style={{ flex: 1 }}>
          <ImageBackground
            style={styles.imageBackground}
            source={require('../assets/images/bg.png')}
          >
            <View style={styles.logoWrapper}>
              <Text style={styles.logoText}>Ice Cream</Text>
              <Text style={styles.logoText}>Map</Text>
            </View>
            <StatusBar style="light" />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Explore</Text>
              <Icon
                style={{ marginLeft: 5 }}
                name="arrow-forward-outline"
                size={20}
                color="white"
              />
            </TouchableOpacity>
          </ImageBackground>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    alignItems: 'center',
  },
  logoWrapper: {
    marginTop: 50,
    alignItems: 'center',
  },
  logoText: {
    color: 'white',
    fontSize: 60,
    fontFamily: 'Rancho_400Regular',
    fontWeight: '400',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#0A9FDF',
    padding: 13,
    borderRadius: 8,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },
});

export default LoadingPage;
