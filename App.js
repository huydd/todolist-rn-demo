import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Home from "./src/screens/Home";
import User from "./src/screens/User";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      {/* <User /> */}
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
