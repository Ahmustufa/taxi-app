import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome';
const GradientButton = (props) => {
  return (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['red', 'orange']} style={{height: 50, justifyContent: "center", alignItems: "center"}}>
            <Icon
              backgroundColor="transparent"
              size={15}
              color="white"
              >
              {props.text}
            </Icon>
          </LinearGradient>
  )
}

export default GradientButton
const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
        justifyContent: 'center',
      },
})