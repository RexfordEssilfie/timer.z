import React from 'react';
import {
  Text,
  StyleSheet,
  StatusBar,
  Dimensions
} from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from "./screens/HomeScreen"
import AddTimerScreen from "./screens/AddTimerScreen"

import { Colors } from "./constants"
import { DEFAULT_TIMERS } from './utils';

const App = () => {

  const [timers, setTimers] = React.useState(DEFAULT_TIMERS);

  function addTimer(timer) {
    setTimers(timers => { return { ...timers, [timer.name]: timer } })
    console.log(timers)
  }

  const Tab = createBottomTabNavigator()

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              return <Text style={{ color: color, fontSize: 17, fontWeight: "500" }}>{route.name}</Text>;
            },
          })}
          tabBarOptions={{
            showLabel: false,
            tabStyle: { display: "flex", justifyContent: "center", backgroundColor: Colors.white, height: 70 },
            activeTintColor: Colors.pink,
            inactiveTintColor: Colors.grey,
          }}
        >
          <Tab.Screen name="Home">
            {props => <HomeScreen {...props} timers={timers} />}
          </Tab.Screen>

          <Tab.Screen name="Add Timer">
            {props => <AddTimerScreen {...props} handleSubmit={addTimer} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.white,
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
