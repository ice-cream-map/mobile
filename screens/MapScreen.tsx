import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import Header from '../components/header';
import Map from '../components/map';
import FiltersModal from '../components/modals/filtersModal';
import InfoModal from '../components/modals/infoModal';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface IMapScreen {
  navigation: NavigationProp<ParamListBase>;
}

const MapScreen: React.FC<IMapScreen> = ({ navigation }) => {
  const [infoModalVisible, setInfoModalVisible] = useState(false);
  const [filtersModalVisible, setFiltersModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        navigation={navigation}
        setFiltersModalVisible={setFiltersModalVisible}
        showFilters
      />
      <Map setInfoModalVisible={setInfoModalVisible} />
      <InfoModal
        infoModalVisible={infoModalVisible}
        setInfoModalVisible={setInfoModalVisible}
      />
      <FiltersModal
        filtersModalVisible={filtersModalVisible}
        setFiltersModalVisible={setFiltersModalVisible}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#eee',
  },
});

export default MapScreen;
