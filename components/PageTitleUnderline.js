import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'


export default function Underline({ width }) {

    function getWidth() {
        const defaultWidth = 70;
        return width ? width : defaultWidth
    }
    return (
        <View style={styles.container}>
            <View style={[styles.underline, { width: getWidth() }]}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center"
    },

    underline: {
        backgroundColor: Colors.black,
        height: 2.5,
        borderRadius: 100,
        width: 70,
        textAlign: "center",
        marginTop: 5
    }
})