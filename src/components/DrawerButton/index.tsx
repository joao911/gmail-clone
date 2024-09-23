import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, Pressable } from "react-native";

import { colors } from "@/styles/colors";
import { clsx } from "clsx";
export function DrawerButton() {
  const isDivider = true;
  const isFocused = true;

  return (
    <View>
      <Pressable
        className={clsx("py-2 w-full", {
          "border-b ml-10 border-gray-600": isDivider,
        })}
      >
        <View
          className={clsx("flex-row items-center gap-4 h-14 px-6 -ml-2", {
            "-ml-14": isDivider,
          })}
        >
          <MaterialIcons
            name="email"
            size={20}
            color={isFocused ? colors.orange[500] : colors.gray[400]}
          />
          <Text
            className={clsx("flex-1 text-white font-subtitle text-base", {
              "text-orange-300": isFocused,
            })}
          >
            Meus email
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
