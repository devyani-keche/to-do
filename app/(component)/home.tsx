import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, FlatList } from "react-native";

interface Todo {
  id: string;
  task: string;
  deadline: string;
}

export default function HomeScreen({ currentUser }: { currentUser: string }) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState("");
  const [deadline, setDeadline] = useState("");

  const addTodo = () => {
    if (newTask && deadline) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now().toString(), task: newTask, deadline },
      ]);
      setNewTask("");
      setDeadline("");
    }
  };

  const sortedTodos = [...todos].sort(
    (a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
  );

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
        placeholder="Deadline (YYYY-MM-DD)"
        value={deadline}
        onChangeText={setDeadline}
      />
      <Button title="Add Task" onPress={addTodo} />
      <Text style={styles.subtitle}>Upcoming Tasks:</Text>
      <FlatList
        data={sortedTodos}
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
  container: { flex: 1, padding: 16, backgroundColor: "#FFFFFF" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  subtitle: { fontSize: 18, fontWeight: "bold", marginTop: 16 },
  input: {
    borderWidth: 1,
    padding: 8,
    marginVertical: 8,
    borderRadius: 4,
    borderColor: "#CCCCCC",
  },
  todoItem: {
    padding: 8,
    marginVertical: 4,
    backgroundColor: "#F0F0F0",
    borderRadius: 4,
  },
});
