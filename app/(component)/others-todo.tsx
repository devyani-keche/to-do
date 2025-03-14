import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function OthersToDoScreen({ currentUser }: { currentUser: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Others' To-Do Lists</Text>
      <Text>As {currentUser}, you can view tasks from other users here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 16 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
});
