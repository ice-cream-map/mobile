import React, { useEffect, useState } from 'react';
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Platform,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import SuggestionItem from '../components/suggestionItem';
import { SearchBarBaseProps } from 'react-native-elements/dist/searchbar/SearchBar';
import { useTheme } from '../contexts/ThemeContext';
import axios from 'axios';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

const SafeSearchBar = SearchBar as unknown as React.FC<SearchBarBaseProps>;

interface IShops {
  id: number;
  memberAddress: {
    apartment: string;
    city: string;
    street: string;
    zipcode: string;
  };
  name: string;
  photoUrl: null | string;
  url: string;
}

interface IHomeScreen {
  navigation: NavigationProp<ParamListBase>;
}
const HomeScreen: React.FC<IHomeScreen> = ({ navigation }) => {
  const { setScheme, isDark, colors } = useTheme();
  const [shops, setShops] = useState<Array<IShops>>([]);

  const getShops = async () => {
    try {
      const resp = await axios.get('http://10.0.2.2:8080/api/v1/shops');
      const data = resp.data;
      if (data) {
        setShops(data);
      }
    } catch (err) {
      return Promise.reject(err);
    }
  };

  useEffect(() => {
    getShops();
  }, []);

  return (
    <SafeAreaView
      style={{ ...styles.container, backgroundColor: colors.background }}
    >
      <StatusBar barStyle="dark-content" />
      <SafeSearchBar
        platform="ios"
        placeholder="Find your flavor"
        searchIcon={
          <Icon
            style={{ marginLeft: 5 }}
            name="ice-cream"
            size={30}
            color="#1EB3F2"
          />
        }
        containerStyle={{ height: 100, backgroundColor: colors.primary }}
        inputContainerStyle={{
          borderRadius: 30,
          backgroundColor: colors.background,
        }}
        placeholderTextColor={colors.text}
      />
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: 20,
          paddingHorizontal: 25,
        }}
      >
        <Text
          style={{
            fontSize: 21,
            fontWeight: 'bold',
            color: colors.text,
          }}
        >
          Lattest Added
        </Text>
        <TouchableOpacity
          onPress={() => (isDark ? setScheme('light') : setScheme('dark'))}
        >
          <Icon
            style={{ alignSelf: 'flex-end' }}
            name={isDark ? 'ios-sunny-outline' : 'ios-sunny'}
            size={30}
            color="#0A9FDF"
          />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={shops}
          renderItem={({ item }) => (
            <SuggestionItem
              address={item.memberAddress}
              name={item.name}
              id={item.id}
              navigation={navigation}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
        <Icon
          style={{ alignSelf: 'center' }}
          name="ice-cream"
          size={160}
          color="#B2B2B2"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default HomeScreen;
