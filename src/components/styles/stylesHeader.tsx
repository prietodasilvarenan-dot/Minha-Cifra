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

export const getArrowHeaderStyle = (isDark: boolean) =>
  StyleSheet.create({
    header: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 0,
      paddingTop: 0,
      paddingBottom: 15,
      backgroundColor: isDark ? "#001B44" : "#006BFF",
      gap: 12,
    },
    backButton: {
      padding: 4,
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      color: "#FFFFFF",
      fontSize: 34,
      fontWeight: "900",
      letterSpacing: 0.5,
      flexShrink: 1,
    },
  });
