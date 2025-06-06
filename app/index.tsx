import Test from "@/components/Test";
import { StatusBar, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-5xl text-primary font-bold">Welcome</Text>
      <StatusBar barStyle="dark-content" />
    </View>
  );
}
