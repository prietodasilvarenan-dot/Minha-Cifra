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
  const radius = 55;
  const size = 240;
  const center = size / 2;
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
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {data.map((item, index) => {
          const strokeLength = circumference * (item.value / total);

          const circle = (
            <Circle
              key={item.id}
              cx={center}
              cy={center}
              r={radius}
              fill="transparent"
              stroke={GRAPH_COLORS[index % GRAPH_COLORS.length]}
              strokeWidth={radius * 2}
              strokeDasharray={`${strokeLength} ${circumference}`}
              strokeDashoffset={-accumulated}
              transform={`rotate(-90 ${center} ${center})`}
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
    marginVertical: 10,
    height: 240,
  },

  noDataContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 240,
  },
});
