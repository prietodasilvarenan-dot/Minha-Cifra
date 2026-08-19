import React from "react";
import { Switch, Text, View } from "react-native";

import { getConfigStyles } from "@/src/components/styles/stylesConfig";

type SettingsToggleItemProps = {
  label: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
  isDark: boolean;
};

export default function SettingsToggleItem({
  label,
  value,
  onValueChange,
  isDark,
}: SettingsToggleItemProps) {
  const styles = getConfigStyles(isDark);

  return (
    <View style={styles.item}>
      <Text style={styles.text}>{label}</Text>
      <Switch value={value} onValueChange={onValueChange} />
    </View>
  );
}
