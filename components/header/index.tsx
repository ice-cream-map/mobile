import React, { Dispatch, SetStateAction } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export interface Props {
  setFiltersModalVisible: Dispatch<SetStateAction<boolean>>;
}

const Header: React.FC<Props> = ({ setFiltersModalVisible }) => {
  return (
    <View
      style={{
        height: 47,
        backgroundColor: 'white',
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
          <Icon name="arrow-back-outline" size={25} />
          <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Back</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 15 }}>COCONUT PRINCESS</Text>
        <TouchableOpacity onPress={() => setFiltersModalVisible(true)}>
          <Icon name="filter" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
