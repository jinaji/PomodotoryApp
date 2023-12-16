import React, { useEffect, useRef, useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Circle } from "react-native-svg";

export const Pomodotory = () => {
  const [time, setTime] = useState("00 : 00");
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(1);
  const [timer, setTimer] = useState<any>(null);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (sec < 0) {
      setMin((min) => min - 1);
      setSec(59);
    }
    setTime(`${min > 9 ? min : "0" + min} : ${sec > 9 ? sec : "0" + sec}`);

    if (min === 0 && sec === 0) {
      clearInterval(timer!);
      setTime("00 : 00");
      setTimer(null);
    }
  }, [min, sec]);

  const buttonHandler = (props: string) => {
    console.log(timer);
    if (props === "START" && timer === null) {
      const newTimer = setInterval(() => {
        setSec((sec) => sec - 1);
      }, 1000);

      setTimer(() => newTimer);
    }
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: styles.dotory.color,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View>
        <Text style={styles.title}>Pomodotory</Text>
      </View>
      <AnimatedCircularProgress
        size={330}
        width={15}
        fill={100 - ((min * 60 + sec) / 1500) * 100}
        tintColor={`${styles.white.color}`}
        backgroundColor={`${styles.subColor.color}`}
        padding={10}
        rotation={0}
      />
      <Text
        style={{
          ...styles.title,
          position: "absolute",
        }}
      >
        {time}
      </Text>
      <View id="text-section" style={{ flexDirection: "row", gap: 20 }}>
        <Text style={{ ...styles.title, fontSize: 20 }}>Pomodoro</Text>
        <Text style={{ ...styles.title, fontSize: 20 }}>Short Break</Text>
        <Text style={{ ...styles.title, fontSize: 20 }}>Long Break</Text>
      </View>
      <View
        id="button-section"
        style={{
          flexDirection: "row",
          gap: 20,
        }}
      >
        <Pressable
          style={styles.stateButton}
          onPress={() => {
            buttonHandler("START");
          }}
        >
          <Text style={styles.stateButtonText}>start</Text>
        </Pressable>
        <Pressable
          style={styles.stateButton}
          onPress={() => {
            buttonHandler("PAUSE");
          }}
        >
          <Text style={styles.stateButtonText}>start</Text>
        </Pressable>
        <Pressable
          style={styles.stateButton}
          onPress={() => {
            buttonHandler("STOP");
          }}
        >
          <Text style={styles.stateButtonText}>start</Text>
        </Pressable>
      </View>
      <View id="cycle-section">
        <Text style={{ ...styles.title, fontSize: 20 }}>Cycle : #{cycle}</Text>
      </View>
      <View id="go-to">
        <Text style={{ ...styles.title, fontSize: 20 }}>Go to ...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  dotory: {
    color: "#B5815B",
  },
  subColor: {
    color: "#F4C58D",
  },
  highlight: {
    color: "#FAB754",
  },
  white: {
    color: "#fff",
  },
  title: {
    color: "#fff",
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 30,
    fontStyle: "italic",
    textShadowRadius: 2,
    textShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2, opacity: 0.1 },
  },
  stateButton: {
    backgroundColor: "#F4C58D",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 100,
    elevation: 3,
  },
  stateButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
