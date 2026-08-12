import { Feather } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";

interface Props {
  hidden: boolean;
  isDark: boolean;
  onPress: () => void;
}

export default function EyeButton({ hidden, isDark, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Feather
        name={hidden ? "eye-off" : "eye"}
        size={20}
        color={isDark ? "#fff" : "#000"}
      />
    </TouchableOpacity>
  );
}
