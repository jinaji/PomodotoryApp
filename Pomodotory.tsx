import { StyleSheet, Text, View } from "react-native";

export const Pomodotory = () => {
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
      <View style={{ backgroundColor: styles.highlight.color }}>
        <Text style={styles.white}>Pomodotory</Text>
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
});
