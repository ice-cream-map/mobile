import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  flavor: string;
  address: string;
  tags: Array<string>;
  likes: number;
  dislikes: number;
}

const SuggestionItem: React.FC<Props> = ({
  flavor,
  address,
  tags,
  likes,
  dislikes,
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.infoContainerItem}>
          <Icon
            style={{ marginHorizontal: 5 }}
            name="ice-cream"
            size={15}
            color="#1EB3F2"
          />
          <Text>{flavor}</Text>
        </View>
        <View style={styles.infoContainerItem}>
          <Icon
            style={{ marginHorizontal: 5 }}
            name="location"
            size={15}
            color="#1EB3F2"
          />
          <Text>{address}</Text>
        </View>
        <View style={styles.infoContainerItem}>
          <Icon
            style={{ marginHorizontal: 5 }}
            name="bookmark"
            size={15}
            color="#1EB3F2"
          />
          <Text>{tags.join(' • ')}</Text>
        </View>
      </View>
      <View style={styles.thumbsContainer}>
        <View style={styles.thumbWrapper}>
          <Icon
            style={{ marginRight: 5 }}
            name="thumbs-up"
            size={15}
            color="#1EB3F2"
          />
          <Text>{likes}</Text>
        </View>
        <View style={styles.thumbWrapper}>
          <Icon
            style={{ marginRight: 5 }}
            name="thumbs-down"
            size={15}
            color="#1EB3F2"
          />
          <Text>{dislikes}</Text>
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
    height: 120,
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
  thumbsContainer: {
    height: '100%',
    flexDirection: 'column',
    width: 71,
    marginRight: 20,
    justifyContent: 'space-evenly',
  },
  thumbWrapper: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
  },
});

export default SuggestionItem;