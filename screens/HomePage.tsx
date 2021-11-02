import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Platform,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import SuggestionItem from '../components/suggestionItem';
import { SearchBarBaseProps } from 'react-native-elements/dist/searchbar/SearchBar';
import { useTheme } from '../contexts/ThemeContext';

const SafeSearchBar = SearchBar as unknown as React.FC<SearchBarBaseProps>;

const dummyData = [
  {
    flavor: 'coconut princess',
    address: 'warszawa, plac bema 3',
    tags: ['sorbet', 'wege'],
    likes: 321,
    dislikes: 11,
    id: 1,
  },
  {
    flavor: 'coconut princess',
    address: 'warszawa, plac bema 3',
    tags: ['sorbet', 'wege'],
    likes: 321,
    dislikes: 11,
    id: 2,
  },
  {
    flavor: 'coconut princess',
    address: 'warszawa, plac bema 3',
    tags: ['sorbet', 'wege'],
    likes: 321,
    dislikes: 11,
    id: 3,
  },
  {
    flavor: 'coconut princess',
    address: 'warszawa, plac bema 3',
    tags: ['sorbet', 'wege'],
    likes: 321,
    dislikes: 11,
    id: 4,
  },
];

const HomePage = () => {
  const { setScheme, isDark, colors } = useTheme();
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
          Suggestions
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
      <ScrollView showsVerticalScrollIndicator={false}>
        {dummyData.map((item) => (
          <SuggestionItem
            key={item.id}
            flavor={item.flavor}
            address={item.address}
            likes={item.likes}
            dislikes={item.dislikes}
            tags={item.tags}
          />
        ))}
        <Icon
          style={{ alignSelf: 'center' }}
          name="ice-cream"
          size={160}
          color="#B2B2B2"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default HomePage;
