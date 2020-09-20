import React, {useState} from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';

import MainContainer from '../components/Container'
import AppLogo from '../components/AppLogo'

import colors from '../constants/colors'

const HomeScreen = props => {

  return(
    <MainContainer>
      <AppLogo />
      {/* Buttons View */}
      <View style={styles.buttonsGroup}>
        <TouchableOpacity
        style={styles.genericButton}
          onPress={()=>{
            props.navigation.navigate({
              routeName: 'About'
            })}
          }>
          <Text style={styles.buttonText}>What is this app?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.genericButton}
          onPress={()=>{
            props.navigation.navigate({
              routeName: 'Browser'
            })}
          }>
          <Text style={styles.buttonText}>Let's browse!</Text>
        </TouchableOpacity> 
      </View>
    </MainContainer>
  )
}

const styles = StyleSheet.create({
  buttonsGroup: {
    marginTop: -100
  },
  genericButton: {
    backgroundColor: colors.primaryContent,
    marginVertical: 10,
    padding: 15,
    borderRadius: 100
  },
  buttonText: {
    fontSize: 25,
    color: colors.background,
    fontFamily: 'content-text',
    textAlign: 'center'
  }
})

export default HomeScreen