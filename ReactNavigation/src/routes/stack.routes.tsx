import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // importação do stack, instalação: yarn add @react-navigation/native-stack
import { ScreenA } from "../screens/ScreenA";
import { ScreenB } from "../screens/ScreenB";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      {/* TELA 1 */}
      <Screen
        name="screenA" // nome da rota
        options={{
          title: "Home",
          headerTitleAlign: "center",
        }}
        component={ScreenA} // nome do componente que será renderizado
      />
      {/* TELA 2 */}
      <Screen
        name="screenB" // nome da rota
        options={{
          title: "New Home",
          headerTitleAlign: "center",
        }}
        component={ScreenB} // nome do componente que será renderizado
      />
    </Navigator>
  );
}
