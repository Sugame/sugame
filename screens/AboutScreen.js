import React, {useState} from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';

import MainContainer from '../components/Container'
import Content from '../components/Content'
import AppName from '../components/AppName'

import colors from '../constants/colors'

const AboutScreen = props => {
    return(
        <MainContainer style={styles.mainContainer}>
            {/* top part */}
            <View style={styles.topName}>
                <AppName style={styles.greeting}>Welcome, summoner!</AppName>
                {/* <View style={styles.logoContainer}> */}
                    <Image 
                        source={require('../assets/sugame-logo.png')} 
                        resizeMode="contain"
                        style={{...styles.logo, ...props.style}}
                    />
                {/* </View> */}
            </View>
            
            {/* main text */}
            <View style={styles.mainContent}> 
                <Text style={styles.textContent}><AppName style={styles.appName}>Sugame</AppName> is an application designed for League of Legends players to create builds.</Text>
                <Text style={styles.textContent}><AppName style={styles.appName}>Sugame</AppName> also lets you shuffle the build completely! Have fun with it but, please, don't use the build you got in a ranked game.</Text>
                <TouchableOpacity
                    style={styles.genericButton}
                    onPress={()=>{
                        props.navigation.navigate({
                        routeName: 'Browser'
                        })}
                    }>
                    <Text style={styles.buttonText}>Let's start browsing!</Text>
                </TouchableOpacity> 
                <Text style={styles.notAff}>SUGAME is not affiliated with Riot Games.</Text>
            </View>

        </MainContainer>
    )
}

const styles = StyleSheet.create({
    genericButton: {
        backgroundColor: colors.primaryContent,
        padding: 15,
        borderRadius: 100
    },
    buttonText: {
        fontSize: 25,
        color: colors.background,
        fontFamily: 'app-name',
        textAlign: 'center'
    },
    topName: {
        flex:1, 
        width: '100%',
        height: '100%',
        flexDirection: 'column-reverse',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        marginBottom: 5,
        width: '60%',
        height: '60%',
    },
    greeting: {
        fontSize: 25, 
        textAlign: 'center'
    },
    mainContent: {
        flex: 4,
        marginTop: 20
    },
    textContent: {
        fontFamily: 'content-text',
        color: colors.background,
        fontSize: 15,
        lineHeight: 30,
        backgroundColor: colors.primaryContent,
        padding: 20,
        marginBottom: 20,
        borderRadius: 15
    },
    appName: {
        color: colors.background,
        fontSize: 17
    },
    notAff: {
        marginTop: 40,
        textAlign: 'center',
        fontFamily: 'content-text',
        color: colors.navigationColor,
        fontSize: 15,
        lineHeight: 30,
        backgroundColor: colors.primaryContent,
        padding: 5,
        marginBottom: 20
    }
})

export default AboutScreen