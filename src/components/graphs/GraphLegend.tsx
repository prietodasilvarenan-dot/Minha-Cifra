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
                    Invest.
                </ThemedText>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    legendContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 25,
        gap: 15,
    },
    legendItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    legendBox: {
        width: 12,
        height: 12,
        borderRadius: 3,
    },
    legendText: {
        fontSize: 12,
    },
});