import { getConfigStyles } from "@/src/components/styles/stylesConfig";
import React from "react";
import { Text, TouchableOpacity, View, useColorScheme } from "react-native";

interface ConfigButtonProps {
  text: string;
  onPress: () => void;
}

export default function ConfigButton({ text, onPress }: ConfigButtonProps) {
  const isDark = useColorScheme() === "dark";

  const styles = getConfigStyles(isDark);

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
