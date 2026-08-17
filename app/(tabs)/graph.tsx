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

import { useGraphicFilter } from "@/src/hooks/useGraphicFilter";

export default function FinancialDashboard() {
  const { isDark } = useTheme();
  const barStyles = getBarStyles(isDark);

  const { balance, itemsEarn, itemsInvestments, itemsLost } = useFinance();

  const {
    currentPrevMonth,
    currentMonthLabel,
    currentNextMonth,
    currentYearLabel,

    nextMonth,
    prevMonth,
  } = useGraphicFilter();

  const earnFiltered = itemsEarn.filter(
    (item) =>
      item.month === currentMonthLabel && item.year === currentYearLabel,
  );

  const investmentsFiltered = itemsInvestments.filter(
    (item) =>
      item.month === currentMonthLabel && item.year === currentYearLabel,
  );

  const lostFiltered = itemsLost.filter(
    (item) =>
      item.month === currentMonthLabel && item.year === currentYearLabel,
  );

  const receitas = earnFiltered.reduce((acc, item) => acc + item.value, 0);

  const despesas = lostFiltered.reduce((acc, item) => acc + item.value, 0);

  const investimentos = investmentsFiltered.reduce(
    (acc, item) => acc + item.value,
    0,
  );

  const barData = [
    {
      year: currentYearLabel,
      month: currentMonthLabel,
      earn: receitas,
      lost: despesas,
      investments: investimentos,
    },
  ];

  const pizzaData = lostFiltered.map((item) => ({
    id: item.id,
    title: item.tag,
    value: item.value,
  }));

  const maxValue = Math.max(receitas, despesas, investimentos, 1);

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
          onPrev={prevMonth}
          onNext={nextMonth}
        />

        <GraphBarLayout
          data={barData}
          maxValue={maxValue}
          receitas={receitas}
          despesas={despesas}
          investimentos={investimentos}
        />

        <GraphPieLayout data={pizzaData} />
      </ScrollView>
    </SafeAreaView>
  );
}
