import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Box, Input, HStack, Divider, Center, VStack} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import CircleIcon from 'react-native-vector-icons/Entypo';
import {enableLatestRenderer} from 'react-native-maps';

enableLatestRenderer();
const Home = () => {
  return (
    <>
      <MapView
        style={styles.mapContainer}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        loadingEnabled={true}
        moveOnMarkerPress={false}
        showsMyLocationButton
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <View style={styles.searchCon}>
          <TouchableOpacity>

         
        <Box style={styles.boxCon} shadow={6}>
          <HStack space={4} alignItems="center" marginBottom={3}>
            <Icon name="caretdown" size={13} />
            <Text>Current Location </Text>
            <CloseIcon name='close' size={13} style={{paddingLeft: 100}}/>
          </HStack>
          <Center>
            <Divider w="85%" />
          </Center>
          <HStack space={4} alignItems="center" marginTop={3}>
            <CircleIcon name="circle" color="red" size={13} />
            <Text>Destination</Text>
            <CloseIcon name='close' size={13} style={{paddingLeft: 138}}/>
          </HStack>
        </Box>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
  },
  searchCon: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
  },
  boxCon: {
    backgroundColor: 'white',
    padding: 30,
    // flexDirection: 'row',
    // height: 50,
    // width: 100
  },
});
