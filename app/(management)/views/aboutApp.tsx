import { SOBREAPP } from "@/src/constants/strings";
import { getStaticStyle } from "@/src/components/styles/stylesStatic";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/src/context/ThemeContext";
import { ArrowBackHeader } from "@/src/components/common/arrowBackHeader";

export default function AboutApp() {
  const { isDark } = useTheme();
  const styles = getStaticStyle(isDark);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <ArrowBackHeader
          title="Sobre o app"
          route="/(management)/configuration"
        />

        <View style={styles.card}>
          <Text style={styles.textContent}>{SOBREAPP.text}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
