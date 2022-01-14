import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../../contexts/ThemeContext';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface ISuggestionItem {
  id: number;
  address: {
    apartment: string;
    city: string;
    street: string;
    zipcode: string;
  };
  name: string;
  navigation: NavigationProp<ParamListBase>;
}

const SuggestionItem: React.FC<ISuggestionItem> = ({
  name,
  address,
  navigation,
  id,
}) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ShopDetailScreen', { id })}
      style={{ ...styles.container, backgroundColor: colors.primary }}
    >
      <View style={styles.infoContainer}>
        <View style={styles.infoContainerItem}>
          <Icon
            style={{ marginHorizontal: 5 }}
            name="ice-cream"
            size={15}
            color="#1EB3F2"
          />
          <Text style={{ color: colors.text }}>{name}</Text>
        </View>
        <View style={styles.infoContainerItem}>
          <Icon
            style={{ marginHorizontal: 5 }}
            name="location"
            size={15}
            color="#1EB3F2"
          />
          <Text style={{ color: colors.text }}>{`${address.city.concat(
            ' • ',
          )} ${address.street.concat(' • ')} ${address.apartment}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    width: '95%',
    height: 90,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  infoContainer: {
    height: '100%',
    justifyContent: 'space-evenly',
  },
  infoContainerItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SuggestionItem;
