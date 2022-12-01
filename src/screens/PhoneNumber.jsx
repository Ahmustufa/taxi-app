import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import React from 'react';
import PhoneInput from 'react-native-phone-number-input';
import {VStack} from 'native-base';
import GradientButton from '../components/GradientButton';
import { useState } from 'react';
import bg from "../assets/bg.png"

const PhoneNumber = ({navigation}) => {
    const [number, setNumber ] = useState("")
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.container}>
      <VStack space={4}>
        <PhoneInput defaultCode="PK" layout="first" withDarkTheme withShadow autoFocus onChangeText={(v)=> setNumber(v)}/>
        <TouchableOpacity onPress={()=> navigation.navigate('VERIFICATION', {number: number})}>
          <GradientButton text="CONTINUE"/>
        </TouchableOpacity>
      </VStack>
      </ImageBackground>
    </View>
  );
};

export default PhoneNumber;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
