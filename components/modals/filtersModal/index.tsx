import React, { Dispatch, SetStateAction } from 'react';
import {
  Modal,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { Input } from 'react-native-elements';

interface Props {
  filtersModalVisible: boolean;
  setFiltersModalVisible: Dispatch<SetStateAction<boolean>>;
}

const FiltersModal: React.FC<Props> = ({
  filtersModalVisible,
  setFiltersModalVisible,
}) => {
  return (
    <Modal
      animationType="slide"
      visible={filtersModalVisible}
      onRequestClose={() => setFiltersModalVisible(false)}
      transparent={true}
    >
      <TouchableOpacity
        activeOpacity={0}
        onPress={() => setFiltersModalVisible(false)}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <TouchableWithoutFeedback>
          <View style={styles.container}>
            <Text
              style={{
                fontWeight: 'bold',
                textTransform: 'uppercase',
                marginLeft: 30,
              }}
            >
              filters:
            </Text>
            <View style={styles.inputWrapper}>
              <Text>City:</Text>
              <Input
                containerStyle={{
                  backgroundColor: '#EEEEEE',
                  borderRadius: 15,
                  height: 35,
                  width: 195,
                  marginHorizontal: 10,
                }}
                inputContainerStyle={{
                  borderBottomWidth: 0,
                }}
                inputStyle={{ fontSize: 14 }}
              />
            </View>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity onPress={() => setFiltersModalVisible(false)}>
                <Text style={styles.text}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.text}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 270,
    height: 180,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    justifyContent: 'center',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingTop: 50,
  },
  text: {
    fontWeight: 'bold',
    color: '#1EB3F2',
    textTransform: 'uppercase',
    paddingHorizontal: 20,
  },
});

export default FiltersModal;
