import { View, FlatList, Text } from "react-native";

import { Input } from "@/components/Input";
import { MenuButton } from "@/components/MenuButtom";
import { Avatar } from "@/components/Avatar";
import { EMAILS } from "@/utils/email";
import { Email } from "@/components/Email";
import { FloatButton } from "@/components/FloatButton";

export default function Index() {
  return (
    <View className="flex-1 p-4 bg-gray-900">
      <Input>
        <MenuButton />
        <Input.InputField placeholder="Pesquisar no Email" />
        <Avatar
          source={{ uri: "https://github.com/joao911.png" }}
          size="small"
        />
      </Input>

      <FlatList
        data={EMAILS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Email data={item} />}
        contentContainerClassName="gap-6"
        ListHeaderComponent={() => (
          <Text className="mt-6 text-sm text-gray-400 uppercase font-subtitle">
            Entrada
          </Text>
        )}
      />
      <FloatButton icon="edit" />
    </View>
  );
}
