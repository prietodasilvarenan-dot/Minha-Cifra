import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { getProfileStyles } from "@/src/components/styles/stylesProfile";

type ProfileSettingsButtonProps = {
  isDark: boolean;
  onPress: () => void;
};

export default function ProfileSettingsButton({
  isDark,
  onPress,
}: ProfileSettingsButtonProps) {
  const styles = getProfileStyles(isDark);

  return (
    <TouchableOpacity style={styles.settingsButton} onPress={onPress}>
      <Text style={styles.settingsText}>Configurações</Text>
    </TouchableOpacity>
  );
}
