import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  ActivityIndicator,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../../contexts/ThemeContext';
import { darkMapStyle } from '../../utils/mapStyle';
import { IShops } from '../../screens/MapScreen';
import axios from 'axios';
import { GOOGLE_API_KEY } from '@env';

interface IMap {
  setInfoModalVisible: Dispatch<SetStateAction<boolean>>;
  shops: Array<IShops>;
  setId: (arg1: number) => void;
  search: string;
}

interface ICoordinate {
  lat: number;
  lng: number;
}

const Map: React.FC<IMap> = ({ setInfoModalVisible, shops, setId, search }) => {
  const { isDark } = useTheme();
  const [coordinate, setCoordinate] = useState<ICoordinate>({
    lat: 27.891005,
    lng: -81.847359,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCoordinate = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${search}&key=${GOOGLE_API_KEY}`,
        );
        const data = res.data;
        if (data.results[0].geometry.location) {
          setCoordinate(data.results[0].geometry.location);
          setIsLoading(false);
        }
      } catch (err) {
        setIsLoading(false);
        return Promise.reject(err);
      }
    };
    getCoordinate();
  }, []);

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" color="#1EB3F2" />
      ) : (
        <MapView
          style={styles.map}
          region={{
            latitude: coordinate.lat,
            longitude: coordinate.lng,
            latitudeDelta: 0.3,
            longitudeDelta: 0.9,
          }}
          customMapStyle={isDark ? darkMapStyle : []}
        >
          {shops
            ?.filter((marker) => marker.memberAddress.latitude !== null)
            .map((marker) => (
              <Marker
                key={marker.id}
                coordinate={{
                  latitude: parseFloat(marker.memberAddress.latitude),
                  longitude: parseFloat(marker.memberAddress.longitude),
                }}
                pinColor="#0A9FDF"
                onPress={() => {
                  setInfoModalVisible(true);
                  setId(marker.id);
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Icon
                    style={{ marginLeft: 5 }}
                    name="ice-cream"
                    size={30}
                    color="#1EB3F2"
                  />
                  <Text style={{ color: '#0A9FDF', fontWeight: 'bold' }}>
                    {marker.name}
                  </Text>
                </View>
              </Marker>
            ))}
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Map;
