import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ToDoScreen from "../(component)/todo";
import OthersToDoScreen from "../(component)/others-todo";
import LoginScreen from "../(component)/login";
import HomeScreen from "../(component)/home";
import { IconSymbol } from "@/components/ui/IconSymbol";

const Tab = createBottomTabNavigator();

export default function Index() {
  const [currentUser, setCurrentUser] = useState<string | null>(null); // Initial state is null

  const handleLogin = () => {
    console.log("User logged in!");
  };

  // Render the login screen if the user is not logged in
  if (!currentUser) {
    return <LoginScreen onLogin={handleLogin} setCurrentUser={setCurrentUser} />;
  }

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute", // Fix tab bar positioning
          height: 60, // Adjust height as needed
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        headerShown: true, // Ensure the header is shown as required
      }}
    >
      {/* Home Screen */}
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      >
        {() => <HomeScreen currentUser={currentUser} />}
      </Tab.Screen>

      {/* My To-Do */}
      <Tab.Screen
        name="My To-Do"
        options={{
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="checklist" color={color} />
          ),
        }}
      >
        {() => <ToDoScreen currentUser={currentUser} todos={[]} />}
      </Tab.Screen>

      {/* Others' To-Do */}
      <Tab.Screen
        name="Others' To-Do"
        options={{
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="person.3.fill" color={color} />
          ),
        }}
      >
        {() => <OthersToDoScreen currentUser={currentUser} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
