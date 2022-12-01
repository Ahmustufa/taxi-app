import {View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import {VStack, Input, Box, Center, Pressable} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {color} from 'native-base/lib/typescript/theme/styled-system';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useForm, Controller} from 'react-hook-form';
import GradientButton from '../components/GradientButton';
import bg from "../assets/bg.png"

const SignupForm = ({navigation}) => {
  const {
    control,
    watch,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
  const onSubmit = async data => {
    try {
      const jsonData = JSON.stringify(data)
      console.log(jsonData)
      await AsyncStorage.setItem('user', jsonData)
     navigation.navigate('SEND CODE')
    } catch (error) {
      console.log(error);
    }
  };
  const password = watch('password')
  return (
    <ScrollView contentContainerStyle={styles.container}>
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
                onChangeText={onChange}
                value={value}
                size="2xl"
                placeholder="User Name"
                InputLeftElement={<Icon name="user" size={18} style={styles.inputIcon} />}
              />
            )}
            name="userName"
          />
          {errors.userName && <Text style={{color: 'red'}}>This Field is required.</Text>}
          <Controller
            control={control}
            rules={{
              required: true,
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
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
          {errors.email && <Text style={{color: 'red'}}>Invalid email address.</Text>}
          <Controller
            control={control}
            rules={{
              required: true,
              minLength: 8,
              // pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
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
          {errors.password && <Text style={{color: 'red'}}>Please check the password field</Text>}
          <Controller
            control={control}
            rules={{
              required: true,
              minLength: 8,
              value: password
              // pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
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
                placeholder="Confirm Password"
                InputLeftElement={<FeatherIcon name="lock" size={18} style={styles.inputIcon} />}
              />
            )}
            name="confirmPassword"
          />
          {errors.confirmPassword && <Text style={{color: 'red'}}>Passwords did not match</Text>}

          {/* <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['red', 'orange']}
            style={{
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon.Button
              onPress={handleSubmit(onSubmit)}
              backgroundColor="transparent"
              size={30}
              style={styles.center}
              >
              SIGN UP WITH EMAIL
            </Icon.Button>
          </LinearGradient> */}
          <TouchableOpacity onPress={handleSubmit(onSubmit)}>
            <GradientButton text="SIGN UP WITH EMAIL"/>
          </TouchableOpacity>
          <Center marginTop={10}>
            <Text style={styles.text}>By signing up you have agreed to our</Text>
            <Text>Terms of use Privacy Policy</Text>
          </Center>
        </VStack>
      </Box>
      </ImageBackground>
    </ScrollView>
  );
};

export default SignupForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
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
