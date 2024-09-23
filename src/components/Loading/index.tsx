import React from "react";
import { View, ActivityIndicator } from "react-native";

// import { Container } from './styles';

export const Loading: React.FC = () => {
  return (
    <ActivityIndicator className="flex-1 items-center justify-center bg-gray-900" />
  );
};
