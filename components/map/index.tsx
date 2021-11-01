import React, { Dispatch, SetStateAction } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';

const dummyData = [
  {
    id: 1,
    latitude: 51.206337,
    longitude: 16.163505,
    name: 'Polish Lody',
  },
  {
    id: 2,
    latitude: 51.203345679383496,
    longitude: 16.193997114407324,
    name: 'Nowe Horyzonty',
  },
  {
    id: 3,
    latitude: 51.20231942807269,
    longitude: 16.14285542532718,
    name: 'Super Lodziarnia',
  },
];

interface Props {
  setInfoModalVisible: Dispatch<SetStateAction<boolean>>;
}

const Map: React.FC<Props> = ({ setInfoModalVisible }) => {
  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 51.206337,
          longitude: 16.163505,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {dummyData.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            pinColor="#0A9FDF"
            onPress={() => setInfoModalVisible(true)}
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
