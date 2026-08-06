import { SOBRENOS } from "@/src/constants/strings";
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AboutApp() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={{ color: "white" }}>
          <TouchableOpacity
            onPress={() => router.push("/(management)/configuration")}
          >
            {"⟵ "}
          </TouchableOpacity>
          Sobre nós
        </Text>

        <Text style={{ color: "white" }}>{SOBRENOS.text}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
