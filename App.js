import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { NativeBaseProvider } from 'native-base'
import StackNavigation from './src/navigation/StackNavigation'
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  useEffect(()=>{
    SplashScreen.hide();
  }, [])
  return (
    <NativeBaseProvider>
      <StackNavigation/>
    </NativeBaseProvider>
  )
}

export default App