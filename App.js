import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Dimensions
} from 'react-native';

import Home from "./screens/Home"
import AddTimer from "./screens/AddTimer"

import { Colors } from "./constants"
import { DEFAULT_TIMERS } from './utils';

const App = () => {

  const [timers, setTimers] = React.useState(DEFAULT_TIMERS);

  function startTimer(timerName) {
    const newTimers = timer;
    const timer = newTimer[timerName]

    timer.intervalId = setInterval(() => {
      timer.timeLeft = 0
    })
    console.log(newTimers);
  }


  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>

        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>

        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lightblue,
    paddingTop: 30,
    display: "flex",
    flexGrow: 1,
    paddingLeft: 10,
    paddingRight: 10,
    minHeight: Dimensions.get('screen').height
  },
  body: {
    backgroundColor: Colors.lightblue,
  },
});

export default App;
