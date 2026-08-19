import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { getOnboardingStyles } from "@/src/components/styles/stylesOnBoarding";

type AuthActionButtonsProps = {
  isDark: boolean;
  onSignIn: () => void;
  onSignUp: () => void;
};

export default function AuthActionButtons({
  isDark,
  onSignIn,
  onSignUp,
}: AuthActionButtonsProps) {
  const styles = getOnboardingStyles(isDark);

  return (
    <View style={styles.cardActions}>
      <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={onSignIn}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonPrimaryText}>Entrar na minha conta</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={onSignUp}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonSecondaryText}>Criar nova conta</Text>
      </TouchableOpacity>
    </View>
  );
}
