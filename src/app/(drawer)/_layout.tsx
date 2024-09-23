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
      {/* <Drawer.Screen
        name="config"
        options={
          {
            title: "Com estrela",
            iconName: "star-outline",
            notifications: 3,
            isDivider: true,
          } as CustomOptions
        }
      /> */}
      {/* <Drawer.Screen
        name="postned"
        options={
          {
            title: "Com estrela",
            iconName: "schedule",
            notifications: 3,
            isDivider: true,
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="important"
        options={
          {
            title: "Importante",
            iconName: "label-important-outline",
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="send"
        options={
          {
            title: "Enviado",
            iconName: "send",
          } as CustomOptions
        }
      /> */}
      {/* <Drawer.Screen
        name="programed"
        options={
          {
            title: "Programado",
            iconName: "schedule-send",
          } as CustomOptions
        }
      /> */}
      {/* <Drawer.Screen
        name="exit-box"
        options={
          {
            title: "Caixa de saída",
            iconName: "outbox",
          } as CustomOptions
        }
      /> */}
      {/* <Drawer.Screen
        name="sketch"
        options={
          {
            title: "Rascunho",
            iconName: "note",
          } as CustomOptions
        }
      /> */}

      {/* <Drawer.Screen
        name="all-email"
        options={
          {
            title: "Todos os e-mails",
            iconName: "email",
          } as CustomOptions
        }
      /> */}

      {/* <Drawer.Screen
        name="span"
        options={
          {
            title: "Spam",
            iconName: "info-outline",
          } as CustomOptions
        }
      /> */}

      {/* <Drawer.Screen
        name="trash"
        options={
          {
            title: "Lixeira",
            iconName: "delete-outline",
            isDivider: true,
          } as CustomOptions
        }
      /> */}
      {/* <Drawer.Screen
        name="read"
        options={
          {
            title: "Lixeira",
            iconName: "label-important-outline",
            sectionTitle: "Marcadores",
          } as CustomOptions
        }
      /> */}
      {/* <Drawer.Screen
        name="help"
        options={
          {
            title: "Lixeira",
            iconName: "label-important-outline",
            isDivider: true,
          } as CustomOptions
        }
      /> */}
      {/* <Drawer.Screen
        name="general"
        options={
          {
            title: "Criar novo",
            iconName: "add",
            isDivider: true,
          } as CustomOptions
        }
      /> */}
      <Drawer.Screen
        name="stars"
        options={
          {
            title: "Com estrela",
            iconName: "star-outline",
            isDivider: true,
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="important"
        options={
          {
            title: "Importante",
            iconName: "label-important-outline",
            isDivider: true,
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="send"
        options={
          {
            title: "Enviados",
            iconName: "send",
            isDivider: true,
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="programed"
        options={
          {
            title: "Enviados",
            iconName: "schedule-send",
            isDivider: true,
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="exit-box"
        options={
          {
            title: "Caixa de saída",
            iconName: "outbox",
            isDivider: true,
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="sketch"
        options={
          {
            title: "Rascunho",
            iconName: "note",
            isDivider: true,
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="all-email"
        options={
          {
            title: "Todos emails",
            iconName: "email",
            isDivider: true,
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="span"
        options={
          {
            title: "Span",
            iconName: "info-outline",
            isDivider: true,
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="trash"
        options={
          {
            title: "Lixeira",
            iconName: "delete-outline",
            isDivider: true,
            sectionTitle: "Marcadores",
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="new-marker"
        options={
          {
            title: "Criar novo",
            iconName: "add",
            isDivider: true,
          } as CustomOptions
        }
      />
    </Drawer>
  );
}
