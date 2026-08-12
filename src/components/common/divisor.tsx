import React from "react";
import { Text, View, useColorScheme } from "react-native";

import { getSignStyles } from "../styles/stylesSign";

export const DivisorLabel = () => {
  const isDark = useColorScheme() === "dark";
  const styles = getSignStyles(isDark);

  return (
    <View style={styles.divisorContainer}>
      <View style={styles.divisor} />

      <Text style={styles.divisorText}>OU</Text>

      <View style={styles.divisor} />
    </View>
  );
};
