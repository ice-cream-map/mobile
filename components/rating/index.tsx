import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../../contexts/ThemeContext';

interface Props {
  name: string;
  likes: number;
  dislikes: number;
}

const Rating: React.FC<Props> = ({ name, likes, dislikes }) => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        backgroundColor: '#0A9FDF',
        height: 70,
        marginTop: 50,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      }}
    >
      <View style={{ width: '50%' }}>
        <Text style={{ color: 'white', fontSize: 20 }}>{name}</Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: colors.background,
          width: 75,
          height: 35,
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <Icon
          style={{ marginRight: 5 }}
          name="thumbs-up-outline"
          size={25}
          color="#21B049"
        />
        <Text style={{ color: colors.text }}>{likes}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: colors.background,
          width: 75,
          height: 35,
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <Icon
          style={{ marginRight: 5 }}
          name="thumbs-down-outline"
          size={25}
          color="#EE3636"
        />
        <Text style={{ color: colors.text }}>{dislikes}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Rating;
