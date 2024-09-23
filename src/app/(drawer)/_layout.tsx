import { DrawerContent } from "@/components/DrawerContent";
import { Drawer } from "expo-router/drawer";
import { CustomOptions } from "../../../types/navigation";
export default function DrawerLayout() {
  return (
    <Drawer
      defaultStatus="open"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: "75%",
        },
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="(tabs)"
        options={
          {
            title: "Caixa de entrada",
            iconName: "all-inbox",
            isDivider: true,
            notifications: 5,
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="config"
        options={
          {
            title: "Entrada",
            iconName: "inbox",
            notifications: 3,
            isDivider: true,
          } as CustomOptions
        }
      />
    </Drawer>
  );
}
