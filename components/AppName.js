import React from 'react'
import { Text, StyleSheet } from 'react-native';

import colors from '../constants/colors'

const AppName = props => {
    return (
        <Text style={{...styles.appName, ...props.style}}>
            {props.children}
        </Text>
    )
}

const styles = StyleSheet.create({
    appName: {
        fontSize: 60,
        color: colors.primaryContent,
        fontFamily: 'app-name',
        textTransform: 'uppercase'
    }
})

export default AppName