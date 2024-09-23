import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

import { colors } from "@/styles/colors";

interface FloatButtonProps extends TouchableOpacityProps {
  icon?: keyof typeof MaterialIcons.glyphMap;
}

export const FloatButton: React.FC<FloatButtonProps> = ({ icon, ...rest }) => {
  return (
    <TouchableOpacity
      className="absolute flex-row items-center gap-1 px-4 py-3 bg-gray-600 rounded-full bottom-4 right-4"
      activeOpacity={0.6}
      {...rest}
    >
      {icon && (
        <MaterialIcons name={icon} size={22} color={colors.orange[500]} />
      )}
      <Text className="text-orange-500 font-subtitle">Escrever</Text>
    </TouchableOpacity>
  );
};
