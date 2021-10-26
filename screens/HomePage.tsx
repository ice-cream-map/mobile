import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Platform,
  Text,
  ScrollView,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import SuggestionItem from '../components/suggestionItem';
import { SearchBarBaseProps } from 'react-native-elements/dist/searchbar/SearchBar';

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
  return (
    <SafeAreaView style={styles.container}>
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
        containerStyle={{ height: 100 }}
        inputContainerStyle={{ borderRadius: 30, backgroundColor: '#eee' }}
      />
      <Text
        style={{
          fontSize: 21,
          fontWeight: 'bold',
          marginTop: 30,
          marginBottom: 30,
          marginLeft: 20,
        }}
      >
        Suggestions
      </Text>
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
    backgroundColor: '#eee',
  },
});

export default HomePage;
