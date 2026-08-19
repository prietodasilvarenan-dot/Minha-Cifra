import { StyleSheet } from "react-native";

export const getEditProfileStyles = (isDark: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDark ? "#001B44" : "#006BFF",
    },
    content: {
      flexGrow: 1,
      paddingHorizontal: 20,
      paddingTop: 15,
      paddingBottom: 28,
    },
    card: {
      width: "100%",
      backgroundColor: isDark ? "#101E36" : "#F7F9FC",
      borderRadius: 24,
      paddingHorizontal: 22,
      paddingVertical: 22,
      marginBottom: 20,
    },
    photoSection: {
      alignItems: "center",
      marginBottom: 18,
    },
    avatarButton: {
      width: 100,
      height: 100,
      borderRadius: 50,
      overflow: "hidden",
      backgroundColor: isDark ? "#162844" : "#E5E7EB",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 2,
      borderColor: isDark ? "#8FC5FF" : "#006BFF",
    },
    avatar: {
      width: "100%",
      height: "100%",
      borderRadius: 50,
    },
    avatarPlaceholder: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: isDark ? "#162844" : "#E5E7EB",
      alignItems: "center",
      justifyContent: "center",
    },
    avatarText: {
      color: isDark ? "#8FC5FF" : "#006BFF",
      fontSize: 28,
      fontWeight: "800",
      textAlign: "center",
    },
    photoAction: {
      marginTop: 10,
      paddingVertical: 6,
    },
    photoActionText: {
      color: isDark ? "#8FC5FF" : "#006BFF",
      fontSize: 14,
      fontWeight: "700",
    },
    formSection: {
      gap: 12,
    },
    optionCard: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      backgroundColor: isDark ? "#162844" : "#FFFFFF",
      borderRadius: 16,
      paddingHorizontal: 16,
      paddingVertical: 14,
      borderWidth: 1,
      borderColor: isDark ? "#243653" : "#E5E7EB",
    },
    optionTextWrap: {
      flex: 1,
      marginRight: 12,
    },
    optionLabel: {
      color: isDark ? "#AEBBD0" : "#6B7280",
      fontSize: 12,
      fontWeight: "700",
      marginBottom: 4,
    },
    optionValue: {
      color: isDark ? "#FFFFFF" : "#001B44",
      fontSize: 15,
      fontWeight: "700",
    },
    optionArrow: {
      color: isDark ? "#8FC5FF" : "#006BFF",
      fontSize: 24,
      fontWeight: "700",
      lineHeight: 24,
    },
    primaryButton: {
      marginTop: 18,
      height: 52,
      borderRadius: 14,
      backgroundColor: isDark ? "#8FC5FF" : "#006BFF",
      justifyContent: "center",
      alignItems: "center",
    },
    primaryButtonText: {
      color: isDark ? "#001B44" : "#FFFFFF",
      fontSize: 16,
      fontWeight: "800",
    },
  });
