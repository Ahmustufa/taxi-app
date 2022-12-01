import {View, Text, StyleSheet, Button, TouchableOpacity, ImageBackground} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Box, Center, VStack} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import GradientButton from '../components/GradientButton';
import bg from "../assets/bg.png"
const Signup = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.container}>
      <Box style={styles.box}>
        <VStack space={4}>
            
          <Icon.Button
            name="facebook"
            backgroundColor="#3b5998"
            size={40}
            style={styles.center}
            onPress={this.loginWithFacebook}>
            SIGN UP WITH FACEBOOK
          </Icon.Button>
        <TouchableOpacity onPress={()=> navigation.navigate('SIGNUP')}>
          <GradientButton text="SIGN UP" />
          </TouchableOpacity> 
          <Center>
            <Text onPress={()=> navigation.navigate('SIGN IN')}>Already have an account?</Text>
          </Center>
        </VStack>
      </Box>
      </ImageBackground>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  box: {
    marginHorizontal: 25,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

