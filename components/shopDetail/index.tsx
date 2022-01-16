import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../../contexts/ThemeContext';
import { IShop } from '../../screens/ShopDetailScreen';
import IceCreamItem from '../iceCreamItem';

interface IShopDetail {
  shop: IShop | null;
}

const ShopDetail: React.FC<IShopDetail> = ({ shop }) => {
  const { colors } = useTheme();

  const { address } = shop || {};

  return (
    <View
      style={{
        backgroundColor: colors.primary,
        minHeight: 350,
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
          {`${address?.city.concat(' • ')} ${address?.street} ${
            address?.apartment
          }`}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 10,
        }}
      >
        <Icon name="ice-cream" size={15} color="#0A9FDF" />
        <Text style={{ color: colors.text }}>Ice creams and flavours:</Text>
      </View>
      <FlatList
        data={shop?.iceCreams}
        renderItem={({ item }) => <IceCreamItem iceCreams={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ShopDetail;
