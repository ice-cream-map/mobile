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
import { API_URL_SHOPS } from '../utils/api';

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
  searchState: string;
}

const HomeScreen: React.FC<IHomeScreen> = ({ navigation }) => {
  const { setScheme, isDark, colors } = useTheme();
  const [shops, setShops] = useState<Array<IShops>>([]);
  const [search, setSearch] = useState('');

  const updateSearch = (search: string) => {
    setSearch(search);
  };

  const getShops = async () => {
    try {
      const resp = await axios.get(`${API_URL_SHOPS}`);
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
        onSubmitEditing={() => navigation.navigate('MapScreen', { search })}
        platform="default"
        placeholder="Find your ice cream"
        searchIcon={
          <Icon
            style={{ marginLeft: 5 }}
            name="ice-cream"
            size={30}
            color="#1EB3F2"
          />
        }
        containerStyle={{
          height: 100,
          backgroundColor: colors.primary,
          justifyContent: 'center',
          borderBottomColor: 'transparent',
          borderTopColor: 'transparent',
        }}
        inputContainerStyle={{
          borderRadius: 30,
          width: '90%',
          backgroundColor: colors.background,
          alignSelf: 'center',
        }}
        placeholderTextColor={colors.text}
        onChangeText={updateSearch}
        value={search}
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
