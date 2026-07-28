import { StyleSheet } from "react-native";

export const getConfigStyles = (isDark: boolean) =>
    StyleSheet.create({
        container: {
            flex: 1,
            padding: 20,
            backgroundColor: isDark
                ? "#001B44"
                : "#006BFF",
        },
        title: {
            color: "#FFFFFF",
            fontSize: 32,
            fontWeight: "900",
            letterSpacing: 0.5,
            marginBottom: 30,
        },
        item: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 16,
            borderBottomWidth: 1,
            borderBottomColor: isDark
                ? "#243653"
                : "#DCEAFF",
        },
        text: {
            color: "#FFFFFF",
            fontSize: 16,
            fontWeight: "600",
        },
        button: {
            paddingVertical: 18,
            borderBottomWidth: 1,
            borderBottomColor: isDark
                ? "#243653"
                : "#DCEAFF",
        },
        buttonText: {
            color: "#FFFFFF",
            fontSize: 16,
            fontWeight: "600",
        },
        logout: {
            marginTop: 30,
        },
        logoutText: {
            color: "#f00202",
            fontSize: 16,
            fontWeight: "600",
        },
    });