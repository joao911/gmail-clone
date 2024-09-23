import { View, Text } from "react-native";

import { Input } from "@/components/Input";
import { MenuButton } from "@/components/MenuButtom";

export default function Index() {
  return (
    <View className="flex-1 p-4 bg-gray-900">
      <Input>
        <MenuButton />
        <Input.InputField placeholder="Pesquisar no Email" />
      </Input>
    </View>
  );
}
