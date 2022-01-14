import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  FlatList,
} from 'react-native';
import Header from '../components/header';
import Icon from 'react-native-vector-icons/Ionicons';
import ShopDetail from '../components/shopDetail';
import Rating from '../components/rating';
import { useTheme } from '../contexts/ThemeContext';
import { RouteProp } from '@react-navigation/native';
import axios from 'axios';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';

export interface IShop {
  id: number;
  name: string;
  url: string;
  photoUrl: string;
  address: {
    city: string;
    zipcode: string;
    street: string;
    apartment: string;
  };
  iceCreams: Array<IiceCreams>;
}

interface IiceCreams {
  id: number;
  name: string;
  tags: Array<string>;
  flavours: Array<string>;
  voted: string;
  votes: number;
  positiveVotes: number;
}

interface IShopDetailScreen {
  route: RouteProp<{ params: { id: number } }>;
  navigation: NavigationProp<ParamListBase>;
}

const ShopDetailScreen: React.FC<IShopDetailScreen> = ({
  route,
  navigation,
}) => {
  const { colors } = useTheme();
  const { id } = route.params;
  const [shop, setShop] = useState<IShop | null>(null);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    const getShop = async () => {
      try {
        const resp = await axios.get(`http://10.0.2.2:8080/api/v1/shops/${id}`);
        const data = resp.data;
        if (data) {
          setShop(data);
        }
      } catch (err) {
        return Promise.reject(err);
      }
    };
    getShop();
  }, [isUpdate]);

  return (
    <SafeAreaView
      style={{ ...styles.container, backgroundColor: colors.background }}
    >
      <Header navigation={navigation} />
      <FlashMessage
        statusBarHeight={40}
        position="bottom"
        style={{ alignItems: 'center' }}
      />
      <FlatList
        ListHeaderComponent={<ShopDetail shop={shop} />}
        data={shop?.iceCreams}
        renderItem={({ item }) => (
          <Rating
            name={item.name}
            votes={item.votes}
            positiveVotes={item.positiveVotes}
            id={item.id}
            setIsUpdate={setIsUpdate}
            isUpdate={isUpdate}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={
          <Icon
            style={{ alignSelf: 'center' }}
            name="ice-cream"
            size={160}
            color="#B2B2B2"
          />
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default ShopDetailScreen;
