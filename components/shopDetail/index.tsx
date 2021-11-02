import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../../contexts/ThemeContext';

const ShopDetail = () => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        backgroundColor: colors.primary,
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
        <Text style={{ color: colors.text }}>Address:</Text>
        <Text style={{ marginHorizontal: 5, color: colors.text }}>
          Plac Bema 3
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 10,
        }}
      >
        <Icon name="ice-cream" size={15} color="#0A9FDF" />
        <Text style={{ color: colors.text }}>Flavors:</Text>
      </View>
      <View
        style={{
          marginLeft: 100,
        }}
      >
        <Text style={{ marginHorizontal: 5, color: colors.text }}>
          • Śmietanka
        </Text>
        <Text style={{ marginHorizontal: 5, color: colors.text }}>
          • Czekolada
        </Text>
        <Text style={{ marginHorizontal: 5, color: colors.text }}>
          • Sorbet: Truskawka
        </Text>
        <Text style={{ marginHorizontal: 5, color: colors.text }}>
          • Princessa kokosowa
        </Text>
        <Text style={{ marginHorizontal: 5, color: colors.text }}>
          • Kinder Country{' '}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 10,
        }}
      >
        <Icon name="time" size={15} color="#0A9FDF" />
        <Text style={{ color: colors.text }}>Opening hours:</Text>
      </View>
      <View
        style={{
          marginLeft: 100,
        }}
      >
        <Text style={{ marginHorizontal: 5, color: colors.text }}>
          • Sunday: 11:00 - 21:00
        </Text>
        <Text style={{ marginHorizontal: 5, color: colors.text }}>
          • Monday: 11:00 - 21:00
        </Text>
        <Text style={{ marginHorizontal: 5, color: colors.text }}>
          • Tuesday: 11:00 - 21:00
        </Text>
        <Text style={{ marginHorizontal: 5, color: colors.text }}>
          • Wednesday: 11:00 - 21:00
        </Text>
        <Text style={{ marginHorizontal: 5, color: colors.text }}>
          • Thursday: 11:00 - 21:00
        </Text>
        <Text style={{ marginHorizontal: 5, color: colors.text }}>
          • Friday: 11:00 - 21:00
        </Text>
        <Text style={{ marginHorizontal: 5, color: colors.text }}>
          • Saturday: 11:00 - 21:00
        </Text>
      </View>
    </View>
  );
};

export default ShopDetail;
