import { NavigationContainer } from "@react-navigation/native"; // ele permite compartilhar com a minha aplicação inteira todas as rotas disponíveis

import { StackRoutes } from "./stack.routes";
import { TabRoutes } from "./tab.routes";
import { DrawerRoutes } from "./drawer.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
      <TabRoutes />
      <DrawerRoutes />
    </NavigationContainer>
  );
}
