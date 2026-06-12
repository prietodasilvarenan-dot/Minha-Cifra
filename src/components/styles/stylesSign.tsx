import { Platform, StyleSheet } from "react-native";

export const getStyles = (isDark: boolean) =>
    StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            paddingHorizontal: 24,
            backgroundColor: "transparent",
        },

        card: {
            backgroundColor: isDark
                ? "rgba(28,28,30,0.95)"
                : "rgba(255,255,255,0.95)",

            borderRadius: 24,

            paddingHorizontal: 22,
            paddingVertical: 28,

            ...Platform.select({
                ios: {
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 8,
                    },
                    shadowOpacity: 0.15,
                    shadowRadius: 18,
                },
                android: {
                    elevation: 10,
                },
            }),
        },

        header: {
            position: "absolute",

            top: 80,

            left: 0,
            right: 0,

            alignItems: "center",
        },

        title: {
            fontSize: 42,
            fontWeight: "800",
            textAlign: "center",
            fontFamily: "sans-serif",
            marginBottom: 30,
            marginTop: 0,
            color: "#FFFFFF",
            letterSpacing: 1,
        },

        subtitle: {
            textAlign: "center",
            marginBottom: 25,

            color: isDark ? "#BBBBBB" : "#5A6472",
            fontSize: 14,
        },

        input: {
            height: 48,
            borderWidth: 1,
            borderColor: isDark
                ? "#555555"
                : "#D1D5DB",
            borderRadius: 14,
            paddingHorizontal: 15,
            marginBottom: 14,
            backgroundColor: isDark
                ? "#1F1F1F"
                : "#FFFFFF",

            color: isDark
                ? "#FFFFFF"
                : "#111827",
            fontSize: 15,
        },

        inputFocused: {
            borderColor: "#0b55f3",
            borderWidth: 2,

            backgroundColor: isDark
                ? "#252525"
                : "#FFFFFF",

            ...Platform.select({
                ios: {
                    shadowColor: "#0b55f3",
                    shadowOffset: {
                        width: 0,
                        height: 0,
                    },
                    shadowOpacity: 0.35,
                    shadowRadius: 6,
                },

                android: {
                    elevation: 5,
                },
            }),
        },
        buttonAuth: {
            height: 50,
            borderRadius: 14,
            backgroundColor: "#002d8f",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,

            ...Platform.select({
                ios: {
                    shadowColor: "#002d8f",
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.3,
                    shadowRadius: 10,
                },
                android: {
                    elevation: 6,
                },
            }),
        },

        textButtonAuth: {
            color: "#FFFFFF",
            fontSize: 16,
            fontWeight: "700",
        },

        link: {
            marginTop: 18,
            textAlign: "center",

            color: "#60A5FA",

            fontSize: 14,
            fontWeight: "600",
        },
    });