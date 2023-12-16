import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Pomodotory } from "./Pomodotory";
import styled, { css } from "styled-components/native";

const BlueButton = styled.Button`
  background-color: blue;
  color: white;
`;

export default function App() {
  return (
    <View style={styles.container}>
      <Pomodotory />
    </View>
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
