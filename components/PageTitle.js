import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Underline from './PageTitleUnderline'
import { Colors } from 'react-native/Libraries/NewAppScreen'



export default function PageTitle({ text, underlineLength }) {

    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}>{text}</Text>
            <Underline width={underlineLength} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 50
    },

    pageTitle: {
        color: Colors.black,
        fontSize: 28,
        textAlign: "center"
    },
})