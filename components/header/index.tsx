import React, { Dispatch, SetStateAction } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../../contexts/ThemeContext';

export interface Props {
  setFiltersModalVisible: Dispatch<SetStateAction<boolean>>;
  showFilters?: boolean;
}

const Header: React.FC<Props> = ({ setFiltersModalVisible, showFilters }) => {
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
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 10,
        }}
      >
        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center' }}
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
            marginRight: showFilters ? 0 : '25%',
            color: colors.text,
          }}
        >
          COCONUT PRINCESS
        </Text>
        {showFilters && (
          <TouchableOpacity onPress={() => setFiltersModalVisible(true)}>
            <Icon color={colors.text} name="filter" size={25} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;
