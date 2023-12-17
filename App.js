import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Pomodotory } from "./Pomodotory";
import { Todo } from "./Todo";
import styled, { css } from "styled-components/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

export default function App() {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: "tomato" }}
      >
        <Tab.Screen name="Pomodotory" component={Pomodotory} />
        <Tab.Screen name="Todo" component={Todo} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
