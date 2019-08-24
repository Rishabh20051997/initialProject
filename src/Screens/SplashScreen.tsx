import React, { Component } from 'react'
import { Text, View, StyleSheet} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { colors } from '../Common'

export class splashScreen extends Component{

 UNSAFE_componentWillMount(){
     
 }

 render(){
     return(
        <LinearGradient colors={[colors.THEME_COLOR, '#3b5998', '#192f6a']} style={styles.linearGradient}>
        <Text style={styles.buttonText}>
          Sign in with Facebook
        </Text>
      </LinearGradient>
     )
 }
}

var styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5
    },
    buttonText: {
      fontSize: 18,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
  });