import React, { Dispatch, SetStateAction } from 'react';
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

interface Props {
  infoModalVisible: boolean;
  setInfoModalVisible: Dispatch<SetStateAction<boolean>>;
}

const InfoModal: React.FC<Props> = ({
  infoModalVisible,
  setInfoModalVisible,
}) => {
  return (
    <Modal
      animationType="slide"
      visible={infoModalVisible}
      onRequestClose={() => setInfoModalVisible(false)}
      transparent={true}
    >
      <TouchableOpacity
        activeOpacity={0}
        onPress={() => setInfoModalVisible(false)}
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          backgroundColor: 'rgba(0,0,0,0.7)',
        }}
      >
        <TouchableWithoutFeedback>
          <View style={styles.container}>
            <View style={styles.wrapper}>
              <EntypoIcon
                style={{ marginLeft: 5 }}
                name="shop"
                size={30}
                color="#1EB3F2"
              />
              <Text>Polish Lody</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontWeight: 'bold' }}>Address:</Text>
              <Text>Plac Bema</Text>
            </View>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'flex-end',
              }}
            >
              <Text>More</Text>
              <AntDesignIcon
                style={{ marginLeft: 5 }}
                name="arrowright"
                size={30}
                color="#1EB3F2"
              />
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    height: 120,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InfoModal;
