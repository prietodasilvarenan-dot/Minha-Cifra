import { TERMOS_DE_USO } from "@/src/constants/strings";
import { router } from "expo-router";
import React from "react";
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
          Termos de Uso
        </Text>

        <Text style={{ color: "white" }}>{TERMOS_DE_USO.text}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
