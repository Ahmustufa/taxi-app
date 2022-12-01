import {View, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import React from 'react';
import {VStack, Text, Center, Divider} from 'native-base';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import GradientButton from '../components/GradientButton';
import bg from "../assets/bg.png"

const OtpVerification = ({route, navigation}) => {
  const {number} = route.params;
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.container}>
      <VStack space={5}>
          <Text fontSize="3xl" bold textAlign="center">
            Verify Code
          </Text>
          <Text textAlign="center">
            Please check your message and {'\n'} enter the verification doe we just sent you {'\n'} {number}
          </Text>
          <Center>
          <OTPInputView
            clearInputs
            editable
            style={{height: 100, backgroundColor: 'transparent', width: '70%'}}
            pinCount={4}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
          <Divider
            my="2"
            _light={{
              bg: 'muted.800',
            }}
            _dark={{
              bg: 'muted.50',
            }}
          />
          <Text marginBottom={5}>
            Didn't receive a code? <Text color="orange.600" onPress={()=> navigation.navigate('SEND CODE')}>Try again</Text>
          </Text>
        </Center>
          <TouchableOpacity onPress={()=> navigation.navigate('VERIFIED')}>
              <GradientButton text="VERIFY" />
          </TouchableOpacity>
      </VStack>
      </ImageBackground>
    </View>
  );
};

export default OtpVerification;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: 'black',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 3,
    color: 'black',
  },

  underlineStyleHighLighted: {
    borderColor: 'black',
    // backgroundColor: "black"
  },
});
