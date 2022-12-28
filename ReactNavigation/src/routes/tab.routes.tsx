import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // importação do stack, instalação: yarn add @react-navigation/native-stack
import { ScreenA } from "../screens/ScreenA";
import { ScreenB } from "../screens/ScreenB";

const { Screen, Navigator } = createBottomTabNavigator();
export function TabRoutes() {
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      }}
    >
      {/* TELA 1 */}
      <Screen
        name="screenA" // nome da rota
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
        component={ScreenA} // nome do componente que será renderizado
      />
      {/* TELA 2 */}
      <Screen
        name="screenB" // nome da rota
        options={{
          tabBarLabel: "New Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add" color={color} size={size} />
          ),
        }}
        component={ScreenB} // nome do componente que será renderizado
      />
    </Navigator>
  );
}
