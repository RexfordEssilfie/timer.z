import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Dimensions
} from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from "./screens/HomeScreen"
import AddTimerScreen from "./screens/AddTimerScreen"

import { Colors } from "./constants"
import { DEFAULT_TIMERS } from './utils';

const App = () => {

  const [timers, setTimers] = React.useState(DEFAULT_TIMERS);

  function addTimer(timer) {
    setTimers(timers => { return { ...timers, timer } })
    console.log(timers)
  }

  const Stack = createStackNavigator()

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Add Timer">
          <Stack.Screen name="Home">
            {props => <HomeScreen {...props} timers={timers} />}
          </Stack.Screen>

          <Stack.Screen name="Add Timer">
            {props => <AddTimerScreen {...props} handleSubmit={addTimer} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
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
