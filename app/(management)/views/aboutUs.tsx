import { SOBRENOS } from "@/src/constants/strings";
import { getStaticStyle } from "@/src/components/styles/stylesStatic";
import { useTheme } from "@/src/context/ThemeContext";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowBackHeader } from "@/src/components/common/arrowBackHeader";

export default function AboutUs() {
  const { isDark } = useTheme();
  const styles = getStaticStyle(isDark);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <ArrowBackHeader
          title="Sobre nós"
          route="/(management)/configuration"
        />

        <View style={styles.card}>
          <Text style={styles.textContent}>{SOBRENOS.text}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
