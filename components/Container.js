import React from 'react'
import { View, StyleSheet } from 'react-native';

import colors from '../constants/colors'

const MainContainer = props => {
    return (
        <View style={{...styles.screen, ...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        alignItems: 'center',
        backgroundColor: colors.background
    }
})

export default MainContainer