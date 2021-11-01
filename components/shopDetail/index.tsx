import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ShopDetail = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        minHeight: 350,
        marginTop: 50,
        padding: 10,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 10,
        }}
      >
        <Icon name="location" size={15} color="#0A9FDF" />
        <Text>Address:</Text>
        <Text style={{ marginHorizontal: 5 }}>Plac Bema 3</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 10,
        }}
      >
        <Icon name="ice-cream" size={15} color="#0A9FDF" />
        <Text>Flavors:</Text>
      </View>
      <View
        style={{
          marginLeft: 100,
        }}
      >
        <Text style={{ marginHorizontal: 5 }}>• Śmietanka</Text>
        <Text style={{ marginHorizontal: 5 }}>• Czekolada</Text>
        <Text style={{ marginHorizontal: 5 }}>• Sorbet: Truskawka</Text>
        <Text style={{ marginHorizontal: 5 }}>• Princessa kokosowa</Text>
        <Text style={{ marginHorizontal: 5 }}>• Kinder Country </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 10,
        }}
      >
        <Icon name="time" size={15} color="#0A9FDF" />
        <Text>Opening hours:</Text>
      </View>
      <View
        style={{
          marginLeft: 100,
        }}
      >
        <Text style={{ marginHorizontal: 5 }}>• Sunday: 11:00 - 21:00</Text>
        <Text style={{ marginHorizontal: 5 }}>• Monday: 11:00 - 21:00</Text>
        <Text style={{ marginHorizontal: 5 }}>• Tuesday: 11:00 - 21:00</Text>
        <Text style={{ marginHorizontal: 5 }}>• Wednesday: 11:00 - 21:00</Text>
        <Text style={{ marginHorizontal: 5 }}>• Thursday: 11:00 - 21:00</Text>
        <Text style={{ marginHorizontal: 5 }}>• Friday: 11:00 - 21:00</Text>
        <Text style={{ marginHorizontal: 5 }}>• Saturday: 11:00 - 21:00</Text>
      </View>
    </View>
  );
};

export default ShopDetail;
