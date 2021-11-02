import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
} from 'react-native';
import Header from '../components/header';
import Icon from 'react-native-vector-icons/Ionicons';
import ShopDetail from '../components/shopDetail';
import Rating from '../components/rating';
import { useTheme } from '../contexts/ThemeContext';

const dummyData = [
  {
    id: 1,
    name: 'Kinder Country',
    likes: 234,
    dislikes: 21,
  },
  {
    id: 2,
    name: 'Vanilla',
    likes: 234,
    dislikes: 214,
  },
  {
    id: 3,
    name: 'Cookies & Cream',
    likes: 5211,
    dislikes: 322,
  },
  {
    id: 4,
    name: 'Buttered Pecan',
    likes: 522,
    dislikes: 34,
  },
  {
    id: 5,
    name: 'Strawberry',
    likes: 44,
    dislikes: 1,
  },
];

const ShopDetailPage = () => {
  const { colors } = useTheme();

  return (
    <SafeAreaView
      style={{ ...styles.container, backgroundColor: colors.background }}
    >
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ShopDetail />
        {dummyData.map((item) => (
          <Rating
            key={item.id}
            name={item.name}
            likes={item.likes}
            dislikes={item.dislikes}
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

export default ShopDetailPage;
