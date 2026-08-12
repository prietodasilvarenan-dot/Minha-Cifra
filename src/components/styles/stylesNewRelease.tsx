import { Platform, StyleSheet } from "react-native";

export const getNewReleaseStyles = (isDark: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDark ? "#001B44" : "#006BFF",
    },
    inputCard: {
      width: "100%",
      backgroundColor: isDark ? "#101E36" : "#F7F9FC",
      borderRadius: 24,
      paddingHorizontal: 20,
      paddingVertical: 20,
      marginBottom: 14,
    },

    header: {
      paddingHorizontal: 22,
      paddingTop: 25,
      paddingBottom: 35,
    },

    headerTitle: {
      fontSize: 26,
      fontWeight: "900",
      color: "#FFFFFF",
      fontFamily: "sans-serif",
    },

    subtitle: {
      marginTop: 6,
      fontSize: 14,
      color: "#DCEBFF",
    },

    content: {
      flex: 1,
      backgroundColor: isDark ? "#0B1933" : "#006BFF",
      padding: 20,
    },

    typeContainer: {
      flexDirection: "row",
      marginBottom: 20,
      gap: 12,
    },

    typeButton: {
      flex: 1,
      paddingVertical: 14,
      borderRadius: 14,
      backgroundColor: isDark ? "#122746" : "#FFFFFF",
      alignItems: "center",
      justifyContent: "center",
      ...Platform.select({
        ios: {
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 8,
          shadowOffset: { width: 0, height: 4 },
        },
        android: {
          elevation: 3,
        },
      }),
    },

    typeButtonEarnActive: {
      backgroundColor: "#2E7D32",
    },
    typeButtonInvestimentsActive: {
      backgroundColor: "#2e477d",
    },

    typeButtonLostActive: {
      backgroundColor: "#C62828",
    },

    typeText: {
      fontSize: 14,
      fontWeight: "800",
      color: isDark ? "#DCEBFF" : "#475569",
    },

    typeTextActive: {
      color: "#FFFFFF",
    },

    label: {
      fontSize: 14,
      fontWeight: "700",
      color: isDark ? "#AEBBD0" : "#475569",
      marginBottom: 8,
      marginTop: 14,
    },

    input: {
      backgroundColor: isDark ? "#122746" : "#FFFFFF",
      borderRadius: 14,
      paddingHorizontal: 16,
      paddingVertical: 12,
      fontSize: 15,
      color: isDark ? "#FFFFFF" : "#1E293B",
      ...Platform.select({
        ios: {
          shadowColor: "#000",
          shadowOpacity: 0.05,
          shadowRadius: 6,
          shadowOffset: { width: 0, height: 2 },
        },
        android: {
          elevation: 2,
        },
      }),
    },

    tagsContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 8,
      marginVertical: 8,
    },

    tagChip: {
      paddingHorizontal: 14,
      paddingVertical: 8,
      borderRadius: 20,
      backgroundColor: isDark ? "#101E36" : "#E2E8F0",
    },

    tagChipSelected: {
      backgroundColor: isDark ? "#8FC5FF" : "#006BFF",
    },

    addTagChip: {
      backgroundColor: "transparent",
      borderWidth: 1.5,
      borderColor: isDark ? "#8FC5FF" : "#006BFF",
      borderStyle: "dashed",
    },

    tagText: {
      fontSize: 13,
      fontWeight: "600",
      color: isDark ? "#DCEBFF" : "#475569",
    },

    tagTextSelected: {
      color: isDark ? "#001B44" : "#FFFFFF",
      fontWeight: "800",
    },

    addTagText: {
      fontSize: 13,
      fontWeight: "800",
      color: isDark ? "#8FC5FF" : "#006BFF",
    },

    saveButton: {
      height: 46,
      borderRadius: 10,
      backgroundColor: isDark ? "#8FC5FF" : "#006BFF",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 14,
      ...Platform.select({
        ios: {
          shadowColor: "#006BFF",
          shadowOpacity: 0.3,
          shadowRadius: 8,
          shadowOffset: {
            width: 0,
            height: 4,
          },
        },
        android: {
          elevation: 5,
        },
      }),
    },

    bgEarn: {
      backgroundColor: "#2E7D32",
    },

    bgLost: {
      backgroundColor: "#C62828",
    },

    saveButtonText: {
      fontSize: 15,
      fontWeight: "900",
      color: "#FFFFFF",
    },
  });
