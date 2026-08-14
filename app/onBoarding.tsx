import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import LogoHeader from "@/src/components/sign/LogoHeader";
import { getOnboardingStyles } from "@/src/components/styles/stylesOnBoarding";
import { useTheme } from "@/src/context/ThemeContext";

export default function WelcomeScreen() {
  const { isDark } = useTheme();
  const styles = getOnboardingStyles(isDark);

  const handleNavigateToSignIn = () => {
    router.push("/(auth)/signIn");
  };

  const handleNavigateToSignUp = () => {
    router.push("/(auth)/signUp");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.heroSection}>
          <LogoHeader isDark={isDark} />
        </View>
        <View style={styles.textSection}>
          <Text style={styles.subtitle}>
            Sua plataforma completa para o seu gerenciamento!
          </Text>
        </View>

        <View style={styles.cardActions}>
          <TouchableOpacity
            style={styles.buttonPrimary}
            onPress={handleNavigateToSignIn}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonPrimaryText}>Entrar na minha conta</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonSecondary}
            onPress={handleNavigateToSignUp}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonSecondaryText}>Criar nova conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
