import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.avatar_container}>
        <View>
          <Image
            style={{ marginBottom: 15 }}
            source={require("./assets/batman-avatar.png")}
          />
          <Text style={{ maxWidth: 140 }}>
            "You either die a hero, or live long enough to see yourself become
            the villian."
          </Text>
        </View>
      </View>
      <View style={styles.details_container}>
        <View style={styles.item}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.data}>Batman</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>City:</Text>
          <Text style={styles.data}>Gotham</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Fav Color:</Text>
          <Text style={styles.data}>Black</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Job:</Text>
          <Text style={styles.data}>Justice</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
  },
  avatar_container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.4,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  details_container: {
    backgroundColor: "white",
    flex: 0.6,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    flex: 0.25,
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  label: {
    flex: 0.9,
    color: "orange",
    fontSize: 32,
  },
  data: {
    fontSize: 32,
  },
});
