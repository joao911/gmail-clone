import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "../Avatar";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { EmailDataProps } from "@/utils/email";

interface EmailProps {
  data: EmailDataProps;
}

export const Email: React.FC<EmailProps> = ({ data }) => {
  return (
    <View className="flex-row w-full gap-4">
      <Avatar source={{ uri: data.avatar }} />

      <View className="flex-1">
        <View className="flex-row items-center gap-1">
          {data.marker && (
            <MaterialIcons
              name="label-important"
              size={16}
              color={colors.yellow[600]}
            />
          )}

          <Text className="flex-1 text-lg text-gray-400 font-subtitle">
            {data.name}
          </Text>

          <Text className="text-sm text-gray-400 font-body">{data.date}</Text>
        </View>

        <Text
          className="text-base text-gray-400 font-body"
          numberOfLines={1}
          lineBreakMode="tail"
        >
          {data.subject}
        </Text>

        <View className="flex-row items-center gap-4">
          <Text
            className="flex-1 text-base text-gray-400 font-body"
            numberOfLines={1}
            lineBreakMode="tail"
          >
            {data.message}
          </Text>

          <MaterialIcons
            name={data.start ? "star" : "star-outline"}
            size={22}
            color={data.start ? colors.blue[600] : colors.gray[400]}
          />
        </View>
      </View>
    </View>
  );
};
