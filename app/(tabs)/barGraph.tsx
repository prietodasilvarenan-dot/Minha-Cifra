import { ThemedText } from "@/src/components/expo/themed-text";
import GraphBars from "@/src/components/graphs/GraphBars";
import GraphLegend from "@/src/components/graphs/GraphLegend";
import MonthNavigator from "@/src/components/graphs/MonthNavigator";
import { getBarStyles } from "@/src/components/styles/stylesBar";
import { useTheme } from "@/src/context/ThemeContext";
import { bars, useGraphicFilter } from "@/src/hooks/useGraphicFilter";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

export default function BarGraph() {
  const { isDark } = useTheme();
  const styles = getBarStyles(isDark);

  const {
    currentPrevMonth,
    currentMonthLabel,
    currentNextMonth,
    currentYearLabel,
    filteredGraphic,
    maxVal,
    nextMonth,
    prevMonth,
  } = useGraphicFilter(bars);
  const graphic = filteredGraphic[0];

  const receitas = graphic?.earn ?? 0;
  const despesas = graphic?.lost ?? 0;
  const investimentos = graphic?.investments ?? 0;

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
            prevMonth={currentPrevMonth}
            month={currentMonthLabel}
            nextMonth={currentNextMonth}
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
            <Text style={styles.summaryValue}>R$ {receitas}</Text>
          </View>

          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Despesas</Text>
            <Text style={styles.summaryValue}>R$ {despesas}</Text>
          </View>

          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Economia</Text>
            <Text style={styles.summaryValue}>R$ {investimentos}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
