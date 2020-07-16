import React from 'react';
import { StyleSheet, ScrollView } from 'react-native'

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
        flexGrow: 1,
        backgroundColor: Colors.lightblue
    }
})
