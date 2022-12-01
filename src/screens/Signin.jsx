import {View, Text, StyleSheet, ScrollView, ImageBackground, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import {VStack, Input, Box, Center} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import FeatherIcon from 'react-native-vector-icons/Feather';
import bg from "../assets/bg.png"
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useForm, Controller} from 'react-hook-form';
import GradientButton from '../components/GradientButton';
import { NativeIconAPI } from 'react-native-vector-icons/dist/lib/create-icon-set';

const SignIn = ({navigation}) => {
  const [message, setMessage] = useState("")
  const {
    control,
    watch,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = async (data)=>{
    try {
      const value = await AsyncStorage.getItem('user')
      const jsonValue = JSON.parse(value)
      console.log(jsonValue.email);
      if(data.email === jsonValue.email && data.password === jsonValue.password){
        console.log("success");
        navigation.navigate('Home')
      }
      else {
        setMessage('Invalid username or password')
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <ScrollView contentContainerStyle={styles.container} >
       <ImageBackground source={bg} resizeMode="cover" style={styles.container}>
        <Box style={styles.box}>
          <VStack space={3}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                variant="outline"
                style={styles.input}
                onBlur={onBlur}
                type='email'
                onChangeText={onChange}
                value={value}
                size="2xl"
                placeholder="Email"
                InputLeftElement={<FontistoIcon name="email" size={18} style={styles.inputIcon} />}
              />
            )}
            name="email"
          />
          {errors.email && <Text style={{color: 'red'}}>This email does not exist.</Text>}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                variant="outline"
                style={styles.input}
                onBlur={onBlur}
                type='password'
                onChangeText={onChange}
                value={value}
                size="2xl"
                placeholder="Password"
                InputLeftElement={<FeatherIcon name="lock" size={18} style={styles.inputIcon} />}
              />
            )}
            name="password"
          />
          {errors.password && <Text style={{color: 'red'}}>Not a valid password</Text>}
            
            <Center>
              <Text>{message}</Text>
            </Center>
            <TouchableOpacity onPress={handleSubmit(onSubmit)}>
              <GradientButton text="SIGN IN"/>
            </TouchableOpacity>
            <Center marginTop={10}>
              <Text style={styles.text}>
                By signing up you have agreed to our
              </Text>
              <Text>Terms of use Privacy Policy</Text>
            </Center>
          </VStack>
        </Box>
        </ImageBackground>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: 'white',
  },
  box: {
    marginHorizontal: 30,
  },
  inputIcon: {
    marginLeft: 10,
  },
  text: {
    paddingBottom: 10,
    color: 'grey',
  },
  inputCon: {},
});
