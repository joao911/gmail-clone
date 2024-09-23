import React from "react";
import { Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

export const MenuButton: React.FC = () => {
  return (
    <Pressable>
      <MaterialIcons name="menu" size={22} color={colors.white} />
    </Pressable>
  );
};
