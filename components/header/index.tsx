import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../../contexts/ThemeContext';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

export interface IHeader {
  navigation: NavigationProp<ParamListBase>;
}

const Header: React.FC<IHeader> = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        height: 50,
        backgroundColor: colors.primary,
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 10,
          justifyContent: 'center',
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            left: 0,
          }}
        >
          <Icon name="arrow-back-outline" size={25} color={colors.text} />
          <Text
            style={{ fontWeight: 'bold', fontSize: 17, color: colors.text }}
          >
            Back
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 15,
            color: colors.text,
          }}
        >
          COCONUT PRINCESS
        </Text>
      </View>
    </View>
  );
};

export default Header;
