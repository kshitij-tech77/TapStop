import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Background stays at the bottom */}
      <LinearGradient
        colors={["#1a1a2e", "#16213e"]}
        style={styles.background}
      />

      <SafeAreaView style={styles.content}>
        <Text style={styles.title}>TapStop</Text>

        <TouchableOpacity style={styles.mainButton} activeOpacity={0.7}>
          <Text style={styles.buttonText}>TAP</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Ready to get started?</Text>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 48,
    fontWeight: "900",
    color: "#fff",
    marginBottom: 40,
    letterSpacing: 2,
  },
  mainButton: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#0f3460",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: "#e94560",
    elevation: 20, // Android shadow
    shadowColor: "#e94560", // iOS shadow
    shadowOpacity: 0.5,
    shadowRadius: 15,
  },
  buttonText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    color: "#888",
    marginTop: 30,
    fontSize: 16,
  },
});
