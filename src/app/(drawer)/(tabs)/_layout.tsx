import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.gray[600],
          borderRightWidth: 0,
          minHeight: 74,
        },
        tabBarItemStyle: {
          paddingBottom: 34,
          paddingTop: 14,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.orange[500],
        tabBarInactiveTintColor: colors.gray[400],
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="email" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="chat-bubble" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="meeting"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="videocam" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
