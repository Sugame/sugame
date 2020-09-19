import React, {useState} from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

import MainContainer from '../components/Container'

const AboutScreen = props => {
    return(
        <MainContainer>
            <Text>about SCREEN</Text>
            <Button title="go to the browser" onPress={()=>{
                props.navigation.navigate({
                    routeName: 'Browser'
                })
            }}/>
        </MainContainer>
    )
}

export default AboutScreen