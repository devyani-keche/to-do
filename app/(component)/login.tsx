import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";


const users: Record<string, string> = {
  GG: "gunjan1",
  devyani: "devyani1",
  shayan: "shayan1",
  dhruv: "dhruv1",
};

interface LoginProps {
  onLogin: () => void;
  setCurrentUser: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function Login({ onLogin, setCurrentUser }: LoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (users[username] === password) {
      setError("");
      setCurrentUser(username); // Update current user
      onLogin(); // Notify parent of successful login
    } else {
      setError("Invalid username or password");
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 16,backgroundColor:"#FFFF" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  input: { borderWidth: 1, padding: 8, marginVertical: 8, borderRadius: 4, width: "80%" },
  error: { color: "red", marginVertical: 8 },
  button: {
    backgroundColor: "orange",
    padding: 12,
    borderRadius: 25,
    alignItems: "center",
    width: "80%",
    marginTop: 16,
  },
  buttonText: { color: "white", fontWeight: "bold", fontSize: 16 },
});
