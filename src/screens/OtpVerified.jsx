import {View, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import React from 'react';
import {Text, VStack} from 'native-base';
import GradientButton from '../components/GradientButton';
import bg from "../assets/bg.png"

const OtpVerified = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.container}>
        <VStack space={5}>
      <Text fontSize="3xl" bold textAlign="center">
        Verified
      </Text>
      <Text textAlign="center">
          You have successfully verified your phone {'\n'} number. Please use your number as your {'\n'} username when logging in.
      </Text>
      <TouchableOpacity onPress={()=> navigation.navigate('SIGN IN')} style={{marginHorizontal: 20}}>
          <GradientButton text="Login" />
      </TouchableOpacity>
        </VStack>
        </ImageBackground>
    </View>
  );
};

export default OtpVerified;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
});
