import { StyleSheet } from "react-native";

export const getHeaderStyle = (isDark: boolean) =>
  StyleSheet.create({
    header: {
      marginBottom: 15,
      alignItems: "flex-start",
    },
    title: {
      color: "#FFFFFF",
      fontSize: 32,
      fontWeight: "900",
      letterSpacing: 0.5,
      textAlign: "left",
      flexShrink: 1,
    },
    subtitle: {
      marginTop: 5,
      color: isDark ? "#B8C7DD" : "#DCEAFF",
      fontSize: 15,
      textAlign: "left",
      flexShrink: 1,
    },
  });
