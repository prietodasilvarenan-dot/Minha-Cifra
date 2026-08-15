import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Header } from "@/src/components/common/header";
import MonthNavigator from "@/src/components/graphs/MonthNavigator";
import { GraphBarLayout } from "@/src/components/graphs/GraphBarLayout";
import { GraphPieLayout } from "@/src/components/graphs/GraphPieLayout";

import { getBarStyles } from "@/src/components/styles/stylesBar";

import { useFinance } from "@/src/context/FinanceContext";
import { useTheme } from "@/src/context/ThemeContext";

import { bars, useGraphicFilter } from "@/src/hooks/useGraphicFilter";

export default function FinancialDashboard() {
  const { isDark } = useTheme();

  const barStyles = getBarStyles(isDark);

  const { balance, itemsLost } = useFinance();

  const {
    currentPrevMonth,
    currentMonthLabel,
    currentNextMonth,
    currentYearLabel,

    filteredGraphic: barFilteredGraphic,

    maxVal,

    nextMonth: nextBarMonth,
    prevMonth: prevBarMonth,
  } = useGraphicFilter(bars);

  const {
    filteredGraphic: lostFilteredGraphic,

    nextMonth: nextLostMonth,
    prevMonth: prevLostMonth,
  } = useGraphicFilter(itemsLost);

  const handlePrevMonth = () => {
    prevBarMonth();
    prevLostMonth();
  };

  const handleNextMonth = () => {
    nextBarMonth();
    nextLostMonth();
  };

  const barGraphic = barFilteredGraphic[0];

  const receitas = barGraphic?.earn ?? 0;
  const despesas = barGraphic?.lost ?? 0;
  const investimentos = barGraphic?.investments ?? 0;

  const pizzaData = lostFilteredGraphic.map((item) => ({
    id: item.id,
    title: item.tag,
    value: item.value,
  }));

  return (
    <SafeAreaView style={barStyles.container}>
      <ScrollView
        contentContainerStyle={barStyles.content}
        showsVerticalScrollIndicator={false}
      >
        <Header
          title="Resumo Financeiro"
          subtitle="Acompanhe sua movimentação financeira"
        />

        <View style={barStyles.balanceCard}>
          <Text style={barStyles.balanceLabel}>Saldo atual</Text>

          <Text style={barStyles.balanceValue}>
            {`R$ ${balance.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`}
          </Text>
        </View>

        <MonthNavigator
          prevMonth={currentPrevMonth}
          month={currentMonthLabel}
          nextMonth={currentNextMonth}
          year={currentYearLabel}
          onPrev={handlePrevMonth}
          onNext={handleNextMonth}
        />

        <GraphBarLayout
          data={barFilteredGraphic}
          maxValue={maxVal}
          receitas={receitas}
          despesas={despesas}
          investimentos={investimentos}
        />

        <GraphPieLayout data={pizzaData} />
      </ScrollView>
    </SafeAreaView>
  );
}
