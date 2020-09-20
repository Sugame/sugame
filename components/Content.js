import React from 'react'
import { Text, StyleSheet } from 'react-native';

import colors from '../constants/colors'

const Content = props => {
    return (
        <Text style={{...styles.contentText, ...props.style}}>
            {props.children}
        </Text>
    )
}

const styles = StyleSheet.create({
    contentText: {
        fontSize: 20,
        color: colors.primaryContent,
        fontFamily: 'content-text',
    }
})

export default Content