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
      paddingTop: 18,
      paddingBottom: 28,
    },
    card: {
      width: "100%",
      backgroundColor: isDark ? "#101E36" : "#F7F9FC",
      borderRadius: 24,
      paddingHorizontal: 20,
      paddingVertical: 22,
      marginBottom: 20,
    },
    photoSection: {
      alignItems: "center",
      marginBottom: 18,
    },
    avatarButton: {
      width: 110,
      height: 110,
      borderRadius: 55,
      overflow: "hidden",
      borderWidth: 3,
      borderColor: isDark ? "#8FC5FF" : "#006BFF",
      backgroundColor: isDark ? "#162844" : "#E5E7EB",
      justifyContent: "center",
      alignItems: "center",
    },
    avatar: {
      width: "100%",
      height: "100%",
    },
    avatarPlaceholder: {
      width: 110,
      height: 110,
      borderRadius: 55,
      backgroundColor: isDark ? "#162844" : "#E5E7EB",
      alignItems: "center",
      justifyContent: "center",
    },
    avatarText: {
      color: isDark ? "#8FC5FF" : "#006BFF",
      fontSize: 32,
      fontWeight: "800",
    },
    photoAction: {
      marginTop: 12,
      paddingVertical: 8,
    },
    photoActionText: {
      color: isDark ? "#8FC5FF" : "#006BFF",
      fontSize: 14,
      fontWeight: "700",
    },
    formSection: {
      gap: 16,
    },
    field: {
      gap: 8,
    },
    label: {
      color: isDark ? "#AEBBD0" : "#475569",
      fontSize: 13,
      fontWeight: "700",
    },
    input: {
      width: "100%",
      height: 52,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: isDark ? "#243653" : "#DCE3ED",
      backgroundColor: isDark ? "#162844" : "#FFFFFF",
      color: isDark ? "#FFFFFF" : "#001B44",
      paddingHorizontal: 16,
      fontSize: 15,
      fontWeight: "600",
    },
    planRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: isDark ? "#162844" : "#FFFFFF",
      borderRadius: 14,
      paddingHorizontal: 16,
      paddingVertical: 14,
      marginTop: 6,
    },
    planLabel: {
      color: isDark ? "#AEBBD0" : "#6B7280",
      fontSize: 14,
      fontWeight: "700",
    },
    planValue: {
      color: isDark ? "#FFFFFF" : "#001B44",
      fontSize: 15,
      fontWeight: "800",
    },
    secondaryAction: {
      marginTop: 8,
      alignItems: "center",
      paddingVertical: 10,
    },
    secondaryActionText: {
      color: isDark ? "#8FC5FF" : "#006BFF",
      fontSize: 14,
      fontWeight: "700",
    },
    primaryButton: {
      marginTop: 14,
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
