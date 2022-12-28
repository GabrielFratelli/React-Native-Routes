import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer"; // importação do stack, instalação: yarn add @react-navigation/native-stack
import { ScreenA } from "../screens/ScreenA";
import { ScreenB } from "../screens/ScreenB";

const { Screen, Navigator } = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Navigator>
      {/* TELA 1 */}
      <Screen
        name="screenA" // nome da rota
        component={ScreenA} // nome do componente que será renderizado
        options={{
          drawerLabel: "Home",
          drawerIcon: () => <MaterialIcons name="home" size={22} />,
        }}
      />
      {/* TELA 2 */}
      <Screen
        name="screenB" // nome da rota
        component={ScreenB} // nome do componente que será renderizado
        options={{
          drawerLabel: "Logout",
          drawerIcon: () => <MaterialIcons name="logout" size={22} />,
        }}
      />
    </Navigator>
  );
}
