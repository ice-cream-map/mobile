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
import { useTheme } from '../../../contexts/ThemeContext';

interface Props {
  filtersModalVisible: boolean;
  setFiltersModalVisible: Dispatch<SetStateAction<boolean>>;
}

const FiltersModal: React.FC<Props> = ({
  filtersModalVisible,
  setFiltersModalVisible,
}) => {
  const { colors } = useTheme();

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
          <View
            style={{ ...styles.container, backgroundColor: colors.primary }}
          >
            <Text
              style={{
                fontWeight: 'bold',
                textTransform: 'uppercase',
                marginLeft: 30,
                color: colors.text,
              }}
            >
              filters:
            </Text>
            <View style={styles.inputWrapper}>
              <Text style={{ color: colors.text }}>City:</Text>
              <Input
                containerStyle={{
                  backgroundColor: colors.background,
                  borderRadius: 15,
                  height: 35,
                  width: 195,
                  marginHorizontal: 10,
                }}
                inputContainerStyle={{
                  borderBottomWidth: 0,
                }}
                inputStyle={{ fontSize: 14, color: colors.text }}
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
