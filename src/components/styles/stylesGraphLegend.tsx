import { StyleSheet } from "react-native";

export const getGraphLegendStyle = (isDark: boolean) =>
  StyleSheet.create({
    legendContainer: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      width: "100%",
      marginTop: 15,
      marginBottom: 10,
    },

    legendItem: {
      flexDirection: "row",
      alignItems: "center",
      gap: 7,
    },

    legendBox: {
      width: 15,
      height: 15,
      borderRadius: 4,
    },

    legendText: {
      fontSize: 13,
      color: isDark ? "#AEBBD0" : "#070808",
      fontWeight: "600",
    },
    legendPieItem: {
      flexDirection: "row",
      color: isDark ? "#AEBBD0" : "#070808",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: "#E5E5EA",
    },
    labelItem:{
      color: isDark ? "#FFFFFF" : "#001B44",
    },
    legendLeft: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
    colorBadge: {
      width: 14,
      height: 14,
      borderRadius: 7,
    },
  });
