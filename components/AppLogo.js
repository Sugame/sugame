import React from 'react'
import { Text, StyleSheet, View, Image } from 'react-native';

import AppName from '../components/AppName'

import colors from '../constants/colors'

const AppLogo = props => {
    return (
        <View>
            {/* logo image */}
            <View style={styles.logoContainer}>
                <Image 
                    source={require('../assets/sugame-logo.png')} 
                    resizeMode="contain"
                    style={{...styles.logo, ...props.style}}
                />
            </View>
            {/* App name */}
            <AppName style={styles.appName}>Sugame</AppName>
            <Text style={styles.catchPhrase}>Build. Have Fun. Don't int.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logoContainer: {
        marginTop: 100,
        alignItems: 'center'
    },
    logo: {
        width: '65%',
        height: '65%',
    },
    appName: {
        marginTop: -100
    },
    catchPhrase: {
        marginTop: 1,
        fontSize: 22,
        fontFamily: 'content-text',
        color: colors.secondaryContent
    }
})

export default AppLogo