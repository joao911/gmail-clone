import React from "react";
import { Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { useNavigation, DrawerActions } from "@react-navigation/native";

export const MenuButton: React.FC = () => {
  const navigate = useNavigation();

  return (
    <Pressable onPress={() => navigate.dispatch(DrawerActions.openDrawer())}>
      <MaterialIcons name="menu" size={22} color={colors.white} />
    </Pressable>
  );
};
