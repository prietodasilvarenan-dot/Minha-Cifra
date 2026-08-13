import { StyleSheet } from "react-native";

export const getBarStyles = (isDark: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDark ? "#001B44" : "#006BFF",
    },
    content: {
      flexGrow: 1,
      paddingHorizontal: 20,
      paddingTop: 15,
      paddingBottom: 20,
    },
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
    balanceCard: {
      width: "100%",
      backgroundColor: isDark ? "#101E36" : "#F7F9FC",
      borderRadius: 24,
      paddingHorizontal: 22,
      paddingVertical: 18,
      marginBottom: 14,
    },
    balanceLabel: {
      color: isDark ? "#AEBBD0" : "#6B7280",
      fontSize: 14,
      fontWeight: "600",
    },
    balanceValue: {
      marginTop: 5,
      color: isDark ? "#FFFFFF" : "#001B44",
      fontSize: 30,
      fontWeight: "900",
      flexShrink: 1,
    },
    graphCard: {
      flex: 1,
      width: "100%",
      minHeight: 460,
      backgroundColor: isDark ? "#101E36" : "#F7F9FC",
      borderRadius: 24,
      paddingHorizontal: 18,
      paddingTop: 20,
      paddingBottom: 20,
      marginBottom: 14,
    },
    graphTitle: {
      color: isDark ? "#FFFFFF" : "#001B44",
      fontSize: 19,
      fontWeight: "800",
      marginBottom: 15,
      flexShrink: 1,
    },
    graphArea: {
      flex: 1,
      minHeight: 320,
      width: "100%",
      marginTop: 10,
      marginBottom: 10,
    },
    summary: {
      flexDirection: "row",
      justifyContent: "space-between",
      gap: 10,
      width: "100%",
    },
    summaryCard: {
      flex: 1,
      minWidth: 0,
      backgroundColor: isDark ? "#162844" : "#FFFFFF",
      borderRadius: 18,
      padding: 14,
    },
    summaryLabel: {
      color: isDark ? "#AEBBD0" : "#6B7280",
      fontSize: 12,
      marginBottom: 5,
      flexShrink: 1,
    },
    summaryValue: {
      color: isDark ? "#FFFFFF" : "#001B44",
      fontSize: 16,
      fontWeight: "800",
      flexShrink: 1,
    },
    chartContainer: {
      flex: 1,
      width: "100%",
      justifyContent: "center",
      paddingHorizontal: 10,
      paddingVertical: 10,
    },

    monthGroup: {
      flex: 1,
      width: "100%",
      alignItems: "center",
    },

    barsRow: {
      flex: 1,
      width: "100%",
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "center",
      gap: 20,
    },

    monthLabel: {
      marginTop: 12,
      fontWeight: "600",
      fontSize: 15,
    },

    noDataContainer: {
      flex: 1,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    noDataLabel: {
      color: isDark ? "#FFFFFF" : "#001B44",
    },
  });
