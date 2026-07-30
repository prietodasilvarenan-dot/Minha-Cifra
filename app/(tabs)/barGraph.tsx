import { ThemedText } from "@/src/components/expo/themed-text";
import GraphBars from "@/src/components/graphs/GraphBars";
import GraphLegend from "@/src/components/graphs/GraphLegend";
import MonthNavigator from "@/src/components/graphs/MonthNavigator";
import { getBarStyles } from "@/src/components/styles/stylesBar";
import { bars, useGraphicFilter } from "@/src/hooks/useGraphicFilter";
import {
  SafeAreaView,
  ScrollView,
  Text,
  useColorScheme,
  View,
} from "react-native";

export default function BarGraph() {
  const isDark = useColorScheme() === "dark";
  const styles = getBarStyles(isDark);

  const {
    currentMonthLabel,
    currentYearLabel,
    filteredGraphic,
    maxVal,
    nextMonth,
    prevMonth,
  } = useGraphicFilter(bars);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <ThemedText type="title" style={styles.title}>
            Resumo Financeiro
          </ThemedText>

          <Text style={styles.subtitle}>
            Acompanhe sua movimentação financeira
          </Text>
        </View>

        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Saldo atual</Text>

          <Text style={styles.balanceValue}>R$ 4.550,00</Text>
        </View>

        <View style={styles.graphCard}>
          <Text style={styles.graphTitle}>Movimentação financeira</Text>
          <MonthNavigator
            month={currentMonthLabel}
            year={currentYearLabel}
            onPrev={prevMonth}
            onNext={nextMonth}
          />
          <View style={styles.graphArea}>
            <GraphBars data={filteredGraphic} maxValue={maxVal} />
            <GraphLegend />
          </View>
        </View>

        <View style={styles.summary}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Receitas</Text>
            <Text style={styles.summaryValue}>R$ 6.500,00</Text>
          </View>

          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Despesas</Text>
            <Text style={styles.summaryValue}>R$ 1.950,00</Text>
          </View>

          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Economia</Text>
            <Text style={styles.summaryValue}>R$ 4.550,00</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
