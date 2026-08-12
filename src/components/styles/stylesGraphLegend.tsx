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
  });
