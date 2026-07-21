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
        justifyContent: "center",
        alignItems: "flex-end",
        width: "100%",
        height: 200,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    monthGroup: {
        alignItems: "center",
        width: "100%",
    },
    barsRow: {
        flexDirection: "row",
        alignItems: "flex-end",
        gap: 15,
        height: 140,
    },
    monthLabel: {
        marginTop: 8,
        fontWeight: "600",
    },
    noDataContainer: {
        width: "100%",
        height: 140,
        justifyContent: "center",
        alignItems: "center",
    },
});