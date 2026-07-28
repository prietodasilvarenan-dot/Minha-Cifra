import { ThemedText } from "@/src/components/expo/themed-text";
import { StyleSheet, View } from "react-native";
import { BAR_COLORS } from "./colors";

export default function GraphLegend() {
    return (
        <View style={styles.legendContainer}>

            <View style={styles.legendItem}>
                <View
                    style={[
                        styles.legendBox,
                        { backgroundColor: BAR_COLORS.earn },
                    ]}
                />
                <ThemedText style={styles.legendText}>
                    Ganhos
                </ThemedText>
            </View>

            <View style={styles.legendItem}>
                <View
                    style={[
                        styles.legendBox,
                        { backgroundColor: BAR_COLORS.lost },
                    ]}
                />
                <ThemedText style={styles.legendText}>
                    Gastos
                </ThemedText>
            </View>

            <View style={styles.legendItem}>
                <View
                    style={[
                        styles.legendBox,
                        { backgroundColor: BAR_COLORS.investments },
                    ]}
                />
                <ThemedText style={styles.legendText}>
                    Investimentos
                </ThemedText>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
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
        fontWeight: "600",
    },
});