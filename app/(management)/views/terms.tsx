import { TERMOS_DE_USO } from "@/src/constants/strings";
import React from "react";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TermsOfUseScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={{ color: "white" }}>Termos de Uso</Text>

        <Text style={{ color: "white" }}>{TERMOS_DE_USO.text}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
