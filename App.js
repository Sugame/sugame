import React, {useState} from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { AppLoading } from 'expo'

import * as Font from 'expo-font'

import SugameNavigator from './navigation/SugameNavigator'

const fetchFonts = () => {
  return Font.loadAsync({
    'content-text': require('./assets/fonts/Montserrat-Regular.ttf'),
    'app-name': require('./assets/fonts/Montserrat-SemiBold.ttf')
  })
}

export default function App() {
  const  [dataLoaded, setDataLoaded] = useState(false)

  if (!dataLoaded) {
    return <AppLoading 
        startAsync={fetchFonts} 
        onFinish={()=> setDataLoaded(true)}
        // onError={(err) => console.log(err)}
      />
  }

  return(
    <SugameNavigator />
  )
}