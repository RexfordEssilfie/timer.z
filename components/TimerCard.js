import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

import play from "../assets/play.png"
import pause from "../assets/pause.png"


export default function TimerCard({ name, totalDuration }) {

    const [timeLeft, setTimeLeft] = useState(totalDuration)
    const [timerIsStarted, setTimerIsStarted] = useState(false)



    useEffect(() => {
        let intervalId = null
        if (timerIsStarted) {
            intervalId = setInterval(() => {
                setTimeLeft(timeLeft => timeLeft - 1)
            }, 1000)
        }
        return cleanup = () => {
            clearInterval(intervalId)
        }
    }, [timerIsStarted])

    function startTimer() {
        setTimerIsStarted(true)
    }

    function stopTimer() {
        setTimerIsStarted(false)
    }

    function parseTime(timeInSeconds) {
        const hours = Math.floor(timeInSeconds / 3600)
        const minutes = Math.floor(timeInSeconds / 60) - (hours * 60)
        const seconds = Math.floor(timeInSeconds - (hours * 3600) - (minutes * 60))

        function prefixZero(num) {
            if (num < 10) return `0${num}`
            return `${num}`
        }

        const timeString = `${prefixZero(hours)}:${prefixZero(minutes)}:${prefixZero(seconds)}`
        return timeString
    }

    function renderTimerWithButton() {
        const timeToDisplay = timeLeft < totalDuration ? timeLeft : totalDuration;

        return (
            <View style={styles.timerAndButton}>
                <Pressable onPress={() => { timerIsStarted ? stopTimer(name) : startTimer(name) }}>
                    {
                        timerIsStarted ? <Image style={styles.playPauseButton} source={pause} />
                            : <Image style={styles.playPauseButton} source={play} />
                    }

                </Pressable>
                <Text style={styles.timer}>{parseTime(timeToDisplay)}</Text>
            </View>
        )
    }


    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name || "Laundry"}</Text>
            {renderTimerWithButton()}
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: Colors.white,
        color: Colors.black,
        height: 100,
        paddingLeft: 25,
        paddingRight: 23,
        borderRadius: 10,
        shadowColor: Colors.black,
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        paddingTop: 23,
        paddingBottom: 23,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10
    },

    name: {
        fontSize: 24,

    },

    timer: {
        fontSize: 36,
        fontWeight: "400"
    },

    playPauseButton: {
        width: 24,
        height: 24,
        marginRight: 12
    },

    timerAndButton: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    }
})