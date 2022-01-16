import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import Header from '../components/header';
import Map from '../components/map';
import InfoModal from '../components/modals/infoModal';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import axios from 'axios';
import { RouteProp } from '@react-navigation/native';

interface IMapScreen {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<{ params: { search: string } }>;
}

export interface IShops {
  id: number;
  name: string;
  photoUrl: string;
  url: string;
  memberAddress: {
    apartment: string;
    city: string;
    latitude: string;
    longitude: string;
    street: string;
    zipcode: string;
  };
}

const MapScreen: React.FC<IMapScreen> = ({ navigation, route }) => {
  const [infoModalVisible, setInfoModalVisible] = useState(false);
  const [shops, setShops] = useState<Array<IShops>>([]);
  const [id, setId] = useState(0);

  const { search } = route.params;

  useEffect(() => {
    const getShop = async () => {
      try {
        const resp = await axios.get(`http://10.0.2.2:8080/api/v1/shops`);
        const data = resp.data;
        if (data) {
          setShops(
            data.filter(
              (item: IShops) =>
                item.memberAddress.city.toLowerCase() === search.toLowerCase(),
            ),
          );
        }
      } catch (err) {
        return Promise.reject(err);
      }
    };
    getShop();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Map
        setInfoModalVisible={setInfoModalVisible}
        shops={shops}
        setId={setId}
        search={search}
      />
      <InfoModal
        infoModalVisible={infoModalVisible}
        setInfoModalVisible={setInfoModalVisible}
        id={id}
        navigation={navigation}
      />
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

export default MapScreen;
