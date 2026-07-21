import { ThemedText } from "@/src/components/expo/themed-text";
import { StyleSheet, View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { GRAPH_COLORS } from "./colors";

interface GraphicItem {
    id: number;
    title: string;
    value: number;
}

interface Props {
    data: GraphicItem[];
}

export default function PieChart({ data }: Props) {
    const radius = 35;
    const circumference = 2 * Math.PI * radius;

    const total = data.reduce((sum, item) => sum + item.value, 0);

    if (!data.length || total === 0) {
        return (
            <View style={styles.noDataContainer}>
                <ThemedText>Sem gastos registrados neste mês.</ThemedText>
            </View>
        );
    }

    let accumulated = 0;

    return (
        <View style={styles.chartWrapper}>
            <Svg width="160" height="160" viewBox="0 0 160 160">
                {data.map((item, index) => {
                    const strokeLength = circumference * (item.value / total);

                    const circle = (
                        <Circle
                            key={item.id}
                            cx="80"
                            cy="80"
                            r={radius}
                            fill="transparent"
                            stroke={GRAPH_COLORS[index % GRAPH_COLORS.length]}
                            strokeWidth={radius * 2}
                            strokeDasharray={`${strokeLength} ${circumference}`}
                            strokeDashoffset={-accumulated}
                            transform="rotate(-90 80 80)"
                        />
                    );

                    accumulated += strokeLength;

                    return circle;
                })}
            </Svg>
        </View>
    );
}

const styles = StyleSheet.create({
    chartWrapper: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
        height: 160,
    },
    noDataContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: 160,
    },
});