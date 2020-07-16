import React, { useRef } from 'react'
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';


import PageTitle from "../components/PageTitle"
import { Colors } from '../constants'

export default function AddTimer({ handleSubmit }) {

    const [chosenDuration, setChosenDuration] = React.useState(new Date(0, 0, 0, 0, 0, 0, 0))
    const [timerName, setTimerName] = React.useState("");
    const textRef = useRef(null)

    function submitTimer() {

        console.log(chosenDuration.toDateString())
        const hours = chosenDuration.getHours()
        const minutes = chosenDuration.getMinutes()
        const seconds = chosenDuration.getSeconds()

        const timeInSeconds = (hours * 3600) + (minutes * 60) + seconds

        const timer = {
            name: timerName,
            totalDuration: timeInSeconds,
            started: true
        }

        console.log(timer)
        handleSubmit(timer);
    }

    function handleChange(text) {
        setTimerName(text);
        textRef.current.focus()
    }


    return (
        <View>
            <PageTitle text="Add Timer" />

            <View style={styles.form}>

                <View style={styles.field}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput ref={textRef}
                        style={styles.timerName}
                        placeholder="My Special Timer"
                        value={timerName}
                        onChangeText={handleChange} />
                </View>


                <View style={styles.field}>
                    <Text style={styles.label}>Duration</Text>
                    <DateTimePicker value={chosenDuration || new Date()} mode="countdown" onChange={(event, date) => setChosenDuration(new Date(date))} />
                </View>

                <View style={styles.actionButtons}>
                    <Pressable onPress={() => submitTimer()}>
                        <View style={[styles.buttonContainer, styles.startButton]}>
                            <Text style={styles.button}>Start</Text>
                        </View>
                    </Pressable>
                </View>



            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    form: {
        paddingLeft: 10
    },

    field: {
        marginBottom: 40
    },

    timerName: {
        fontSize: 24,
        paddingLeft: 10,
        paddingTop: 10
    },

    label: {
        fontSize: 22,
        fontWeight: "600",
        color: "#8F8F8F"
    },

    actionButtons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20
    },

    startButton: {
        backgroundColor: Colors.green,
    },

    saveButton: {
        backgroundColor: Colors.orange,
    },

    button: {
        fontWeight: "600",
        fontSize: 20,
    },

    buttonContainer: {
        borderRadius: 100,
        paddingTop: 9,
        paddingBottom: 9,
        paddingLeft: 30,
        paddingRight: 30,
    }

})