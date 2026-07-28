import { ThemedText } from "@/src/components/expo/themed-text";
import { Alert, StyleSheet, View } from "react-native";
import GraphBar from "./GraphBar";
import { BAR_COLORS } from "./colors";

interface Props {
    data: any[];
    maxValue: number;
}

export default function GraphBars({
    data,
    maxValue,
}: Props) {

    function handleDetails(
        category: string,
        year: number,
        month: string,
        value: number
    ) {
        Alert.alert(
            "Detalhes",
            `${category} em ${month}/${year}: R$ ${value.toFixed(2)}`
        );
    }

    if (!data.length) {
        return (
            <View style={styles.noDataContainer}>
                <ThemedText>
                    Sem dados para este mês.
                </ThemedText>
            </View>
        );
    }

    return (
        <View style={styles.chartContainer}>
            {data.map((item) => (
                <View
                    key={`${item.month}-${item.year}`}
                    style={styles.monthGroup}
                >
                    <View style={styles.barsRow}>

                        <GraphBar
                            value={item.earn}
                            maxValue={maxValue}
                            maxHeight={250}
                            barWidth={45}
                            color={BAR_COLORS.earn}
                            onPress={() =>
                                handleDetails(
                                    "Ganhos",
                                    item.year,
                                    item.month,
                                    item.earn
                                )
                            }
                        />

                        <GraphBar
                            value={item.lost}
                            maxValue={maxValue}
                            maxHeight={250}
                            barWidth={45}
                            color={BAR_COLORS.lost}
                            onPress={() =>
                                handleDetails(
                                    "Gastos",
                                    item.year,
                                    item.month,
                                    item.lost
                                )
                            }
                        />

                        <GraphBar
                            value={item.investments}
                            maxValue={maxValue}
                            maxHeight={250}
                            barWidth={45}
                            color={BAR_COLORS.investments}
                            onPress={() =>
                                handleDetails(
                                    "Investimentos",
                                    item.year,
                                    item.month,
                                    item.investments
                                )
                            }
                        />

                    </View>

                    <ThemedText style={styles.monthLabel}>
                        {item.month}
                    </ThemedText>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
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
});