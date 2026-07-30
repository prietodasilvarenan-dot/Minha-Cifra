import { POLITICAS } from "@/src/constants/strings";
import React from "react";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TermsOfUseScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={{ color: "white" }}>Politicas de privacidade</Text>

        <Text style={{ color: "white" }}>{POLITICAS.text}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
