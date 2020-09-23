import React from 'react'
import { ScrollView, StyleSheet } from 'react-native';

import colors from '../constants/colors'

const MainContainer = props => {
    return (
        <ScrollView contentContainerStyle={{...styles.screen, ...props.style}}>
            {props.children}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
        padding: 20,
        alignItems: 'center',
        backgroundColor: colors.background,
    }
})

export default MainContainer