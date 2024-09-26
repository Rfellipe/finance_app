import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Transactions from "./src/pages/Transactions";
import Boxes from "./src/pages/Boxes";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.navigation,
          headerStyle: styles.navigation,
          headerTitleStyle: styles.text,
        }}
      >
        <Tab.Screen name="Home" component={Transactions} />
        <Tab.Screen name="Boxes" component={Boxes} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#17153B",
    alignItems: "center",
    justifyContent: "center",
  },

  navigation: {
    backgroundColor: "#2E236C",
    borderTopColor: "#2E236C",
  },

  text: {
    color: "#C8ACD6",
  },
});
