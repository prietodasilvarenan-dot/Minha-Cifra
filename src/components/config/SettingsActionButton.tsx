import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { getConfigStyles } from "@/src/components/styles/stylesConfig";

type SettingsActionButtonProps = {
  label: string;
  isDark: boolean;
  variant?: "danger" | "default";
  onPress: () => void;
};

export default function SettingsActionButton({
  label,
  isDark,
  variant = "default",
  onPress,
}: SettingsActionButtonProps) {
  const styles = getConfigStyles(isDark);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, variant === "danger" && styles.logout]}
    >
      <Text
        style={variant === "danger" ? styles.logoutText : styles.buttonText}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
