import { View, Text, Image, ScrollView } from "react-native";
import { DrawerContentComponentProps } from "@react-navigation/drawer";

import { DrawerButton } from "@/components/DrawerButton";

export function DrawerContent(drawerProps: DrawerContentComponentProps) {
  return (
    <View className="flex-1 overflow-hidden bg-gray-600">
      <View className="w-full pb-6 mt-20 border-b border-gray-500">
        <Image
          source={require("@/assets/logo.png")}
          className="ml-5 w-28"
          resizeMode="contain"
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 42,
        }}
      >
        <View className="mt-1">
          {drawerProps.state.routes.map((route, index) => {
            const isFocused = drawerProps.state.index === index;
            const options = drawerProps.descriptors[route.key].options;
            console.log("options", options);
            if (options.title === undefined) {
              return;
            }
            return <DrawerButton key={route.key} />;
          })}
        </View>

        <DrawerButton />
      </ScrollView>
    </View>
  );
}
