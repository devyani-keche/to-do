import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, FlatList } from "react-native";

interface Todo {
  id: string;
  task: string;
  deadline: string;
}

export default function ToDoScreen({ currentUser }: { currentUser: string }) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState("");
  const [deadline, setDeadline] = useState("");

  const addTodo = () => {
    if (newTask && deadline) {
      setTodos([...todos, { id: Date.now().toString(), task: newTask, deadline }]);
      setNewTask("");
      setDeadline("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {currentUser}!</Text>
      <TextInput
        style={styles.input}
        placeholder="New Task"
        value={newTask}
        onChangeText={setNewTask}
      />
      <TextInput
        style={styles.input}
        placeholder="Deadline (e.g., 2025-03-14)"
        value={deadline}
        onChangeText={setDeadline}
      />
      <Button title="Add Task" onPress={addTodo} />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.todoItem}>
            {item.task} - {item.deadline}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  input: { borderWidth: 1, padding: 8, marginVertical: 8, borderRadius: 4 },
  todoItem: { padding: 8, marginVertical: 4, backgroundColor: "#f0f0f0" },
});
