import React, {useState} from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';

import MainContainer from '../components/Container'
import AppName from '../components/AppName'

import colors from '../constants/colors'

const HomeScreen = props => {

  return(
    <MainContainer>
      {/* logo image */}
      <View style={styles.logoContainer}>
        <Image 
          source={require('../assets/sugame-logo.png')} 
          resizeMode="contain"
          style={styles.logo}
        />
      </View>
      {/* App name */}
      <AppName style={styles.appName}>Sugame</AppName>
      <Text style={styles.catchPhrase}>Build. Have Fun. Don't int.</Text>

      {/* Buttons View */}
      <View style={styles.buttonsGroup}>
        <Button title="go to the about" onPress={()=>{
          props.navigation.navigate({
            routeName: 'About'
          })
        }}/>
        <Button title="go to the browser" onPress={()=>{
          props.navigation.navigate({
            routeName: 'Browser'
          })
        }}/>
      </View>
    </MainContainer>
  )
}

const styles = StyleSheet.create({
  logoContainer: {
    marginVertical: 15,
    width: '45%',
    height: '45%',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  appName: {
    marginTop: -100
  },
  catchPhrase: {
    marginVertical: 0,
    fontSize: 22,
    fontFamily: 'content-text',
    color: colors.secondaryContent
  },
  buttonsGroup: {
    marginVertical: 60
  }
})

export default HomeScreen