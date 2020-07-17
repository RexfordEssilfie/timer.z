import React from 'react';
import { StyleSheet, ScrollView, Dimensions } from 'react-native'

import { Colors } from "../constants"

import PageTitle from '../components/PageTitle';
import TimerCard from '../components/TimerCard';

export default function Home({ timers }) {

    function renderTimers() {
        return Object.keys(timers).map(key => {
            const { name, totalDuration, started } = timers[key];
            return <TimerCard
                key={name}
                name={name}
                started={started}
                totalDuration={totalDuration}
            />
        })
    }
    return (
        <ScrollView style={styles.container}>
            <PageTitle text="Timer.z" underlineLength={70} />
            {renderTimers()}
        </ScrollView>
    )
}


export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.lightblue,
        paddingTop: 30,
        display: "flex",
        flexGrow: 1,
        paddingLeft: 10,
        paddingRight: 10,
        minHeight: Dimensions.get('screen').height
    }
})
