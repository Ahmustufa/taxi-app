import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../screens/Signup';
import SignupForm from '../screens/SignupForm';
import Signin from '../screens/Signin'
import PhoneNumber from '../screens/PhoneNumber';
import OtpVerification from '../screens/OtpVerification';
import OtpVerified from '../screens/OtpVerified';
import Home from '../screens/passenger/Home'
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SIGN UP" component={Signup} />
        <Stack.Screen name="SIGNUP" component={SignupForm} />
        <Stack.Screen name="SIGN IN" component={Signin} />
        <Stack.Screen name="SEND CODE" component={PhoneNumber}/>
        <Stack.Screen name="VERIFICATION" component={OtpVerification}/>
        <Stack.Screen name="VERIFIED" component={OtpVerified}/>
        <Stack.Screen name='Home' options={{title: "ADD ROUTE",headerLeft: ()=>false }} component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;