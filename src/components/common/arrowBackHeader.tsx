import React from "react";
import { Text, View } from "react-native";
import { useTheme } from "@/src/context/ThemeContext";
import { getHeaderStyle } from "@/src/components/styles/stylesHeader"; 
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";

type HeaderProps = {
  title: string;
  //subtitle: string;
};

export const ArrowBackHeader = ({ title }: HeaderProps) => {
  const { isDark } = useTheme();
  const headerStyle = getHeaderStyle(isDark);

  return (
    <View style={headerStyle.header}>
      <TouchableOpacity onPress={() => router.back()}>
        <Feather name="arrow-left" size={24} color="white"/>
      </TouchableOpacity>

      <Text style={headerStyle.title}>
        {title}
      </Text>
    </View>
  );
};
