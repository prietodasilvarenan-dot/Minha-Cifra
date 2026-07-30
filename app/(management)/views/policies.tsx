import { POLITICAS } from "@/src/constants/strings";
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TermsOfUseScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={{ color: "white" }}>
          <TouchableOpacity
            onPress={() => router.push("/(management)/configuration")}
          >
            {"⟵ "}
          </TouchableOpacity>
          Politicas de privacidade
        </Text>

        <Text style={{ color: "white" }}>{POLITICAS.text}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
