import React, { ReactNode } from "react";
import { View, TextInput, TextInputProps } from "react-native";

import { colors } from "@/styles/colors";

// import { Container } from './styles';
interface InputProps {
  children: ReactNode;
}
function Input({ children }: InputProps) {
  return (
    <View className="flex-row items-center w-full gap-4 p-4 mt-12 bg-gray-800 rounded-lg h-14">
      {children}
    </View>
  );
}

function InputField({ ...rest }: TextInputProps) {
  return (
    <TextInput
      className="flex-1 text-base font-normal text-white"
      placeholderTextColor={colors.gray[400]}
      cursorColor={colors.blue[600]}
      {...rest}
    />
  );
}

Input.InputField = InputField;
export { Input };
