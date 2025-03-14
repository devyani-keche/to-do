import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

interface Todo {
  id: string;
  task: string;
  deadline: string;
}

interface ToDoScreenProps {
  currentUser: string;
  todos: Todo[];
}

export default function ToDoScreen({ currentUser, todos }: ToDoScreenProps) {
  const sortedTodos = [...todos].sort(
    (a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={sortedTodos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.todoItem}>
            {item.task} - {item.deadline}
          </Text>
        )}
        ListEmptyComponent={<Text style={styles.emptyMessage}>No tasks available!</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#FFFFFF" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  todoItem: {
    padding: 8,
    marginVertical: 4,
    backgroundColor: "#F0F0F0",
    borderRadius: 4,
  },
  emptyMessage: { fontSize: 16, color: "#888888", textAlign: "center", marginTop: 20 },
});
