import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ToDoScreen from "../(component)/todo";
import OthersToDoScreen from "../(component)/others-todo";
import LoginScreen from "../(component)/login";

const Tab = createBottomTabNavigator();

export default function Index() {
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  const handleLogin = () => {
    console.log("User logged in!");
  };

  if (!currentUser) {
    return <LoginScreen onLogin={handleLogin} setCurrentUser={setCurrentUser} />;
  }


  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" options={{ headerShown: true }}>
        {() => <ToDoScreen currentUser={currentUser} />}
      </Tab.Screen>
      <Tab.Screen name="My To-Do" options={{ headerShown: true }}>
        {() => <ToDoScreen currentUser={currentUser} />}
      </Tab.Screen>
      <Tab.Screen name="Others' To-Do" options={{ headerShown: true }}>
        {() => <OthersToDoScreen currentUser={currentUser} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
