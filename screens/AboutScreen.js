import React, {useState} from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

import MainContainer from '../components/Container'
import Content from '../components/Content'

const AboutScreen = props => {
    return(
        <MainContainer>
            <View style={styles.aboutContainer}>
                <Content>So... What's the deal with Sugame?</Content>
            </View>
            <TouchableOpacity
                style={styles.genericButton}
                onPress={()=>{
                    props.navigation.navigate({
                    routeName: 'Browser'
                    })}
                }>
                <Text style={styles.buttonText}>Let's browse!</Text>
            </TouchableOpacity> 
        </MainContainer>
    )
}

const styles = StyleSheet.create({
    aboutContainer: {
        marginTop: 20
    }
})

export default AboutScreen