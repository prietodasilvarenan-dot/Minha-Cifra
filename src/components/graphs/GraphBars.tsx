import { ThemedText } from "@/src/components/expo/themed-text";
import { Alert, View } from "react-native";
import GraphBar from "./GraphBar";
import { BAR_COLORS } from "./colors";
import { getBarStyles } from "@/src/components/styles/stylesBar";
import { useTheme } from "@/src/context/ThemeContext";

interface Props {
  data: any[];
  maxValue: number;
}

export default function GraphBars({ data, maxValue }: Props) {
  const { isDark } = useTheme();
  const styles = getBarStyles(isDark);

  function handleDetails(
    category: string,
    year: number,
    month: string,
    value: number,
  ) {
    Alert.alert(
      "Detalhes",
      `${category} em ${month}/${year}: R$ ${value.toFixed(2)}`,
    );
  }

  const hasData = data.some(
    (item) => item.earn > 0 || item.lost > 0 || item.investments > 0,
  );

  if (!hasData) {
    return (
      <View style={styles.noDataContainer}>
        <ThemedText style={styles.noDataLabel}>
          Sem dados para este mês.
        </ThemedText>
      </View>
    );
  }

  return (
    <View style={styles.chartContainer}>
      {data.map((item) => (
        <View key={`${item.month}-${item.year}`} style={styles.monthGroup}>
          <View style={styles.barsRow}>
            <GraphBar
              value={item.earn}
              maxValue={maxValue}
              maxHeight={250}
              barWidth={45}
              color={BAR_COLORS.earn}
              onPress={() =>
                handleDetails("Ganhos", item.year, item.month, item.earn)
              }
            />

            <GraphBar
              value={item.lost}
              maxValue={maxValue}
              maxHeight={250}
              barWidth={45}
              color={BAR_COLORS.lost}
              onPress={() =>
                handleDetails("Gastos", item.year, item.month, item.lost)
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
                  item.investments,
                )
              }
            />
          </View>
        </View>
      ))}
    </View>
  );
}
