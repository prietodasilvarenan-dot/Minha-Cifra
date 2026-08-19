import { getConfigStyles } from "@/src/components/styles/stylesConfig";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface ConfigButtonProps {
  text: string;
  onPress: () => void;
  isDark: boolean;
}

export default function ConfigButton({
  text,
  onPress,
  isDark,
}: ConfigButtonProps) {
  const styles = getConfigStyles(isDark);

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
