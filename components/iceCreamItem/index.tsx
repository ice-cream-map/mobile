import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';

interface IceCreamItem {
  iceCreams: {
    id: number;
    name: string;
    positiveVotes: number;
    votes: number;
    voted: string | null;
    flavours: Array<string>;
  };
}

const IceCreamItem: React.FC<IceCreamItem> = ({ iceCreams }) => {
  const { colors } = useTheme();

  return (
    <View>
      <Text style={{ marginHorizontal: 15, color: colors.text }}>
        {iceCreams.name}
      </Text>
      <FlatList
        data={iceCreams.flavours}
        renderItem={({ item }) => (
          <Text style={{ marginHorizontal: 100, color: colors.text }}>
            • {item}
          </Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default IceCreamItem;
