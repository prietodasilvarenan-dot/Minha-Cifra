import { StyleSheet } from "react-native";

export const getStaticStyle = (isDark: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDark ? "#001B44" : "#006BFF",
    },
    content: {
      flexGrow: 1,
      paddingHorizontal: 20,
      paddingTop: 15,
      paddingBottom: 30,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
    },
    backButton: {
      marginRight: 12,
      paddingVertical: 4,
      paddingRight: 8,
    },
    backButtonText: {
      color: "#FFFFFF",
      fontSize: 24,
      fontWeight: "700",
    },
    title: {
      color: "#FFFFFF",
      fontSize: 28,
      fontWeight: "900",
      letterSpacing: 0.5,
      flexShrink: 1,
    },
    card: {
      width: "100%",
      backgroundColor: isDark ? "#101E36" : "#F7F9FC",
      borderRadius: 24,
      paddingHorizontal: 20,
      paddingVertical: 22,
      marginBottom: 14,
    },
    textContent: {
      color: isDark ? "#DCEBFF" : "#1E293B",
      fontSize: 15,
      lineHeight: 24,
      fontWeight: "400",
    },
  });
