import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Slot } from "expo-router";
import Login from "./(component)/login";

export default function RootLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const [currentUser, setCurrentUser] = useState<string | null>(null); // Track the current user

  if (!isLoggedIn) {
    return (
      <Login
        onLogin={() => setIsLoggedIn(true)} // Toggle login state
        setCurrentUser={setCurrentUser} // Set the logged-in user
      />
    );
  }

  return (
    <View style={styles.container}>
      <Slot /> {/* Render screens for logged-in users */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
