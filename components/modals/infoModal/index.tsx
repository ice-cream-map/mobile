import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
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
import axios from 'axios';
import { IShop } from '../../../screens/ShopDetailScreen';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface InfoModal {
  infoModalVisible: boolean;
  setInfoModalVisible: Dispatch<SetStateAction<boolean>>;
  id: number;
  navigation: NavigationProp<ParamListBase>;
}

const InfoModal: React.FC<InfoModal> = ({
  infoModalVisible,
  setInfoModalVisible,
  id,
  navigation,
}) => {
  const [shop, setShop] = useState<IShop | null>();

  useEffect(() => {
    if (id) {
      const getShop = async () => {
        try {
          const resp = await axios.get(
            `http://10.0.2.2:8080/api/v1/shops/${id}`,
          );
          const data = resp.data;
          if (data) {
            setShop(data);
          }
        } catch (err) {
          return Promise.reject(err);
        }
      };
      getShop();
    }
  }, [id]);

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
              <Text>{shop?.name}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontWeight: 'bold' }}>Address:</Text>
              <Text>{`${shop?.address.street} - ${shop?.address.apartment}`}</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('ShopDetailScreen', { id })}
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
