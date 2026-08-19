import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Header } from "@/src/components/common/header";
import BalanceCard from "@/src/components/graphs/BalanceCard";
import MonthNavigator from "@/src/components/graphs/MonthNavigator";
import { GraphBarLayout } from "@/src/components/graphs/GraphBarLayout";
import { GraphPieLayout } from "@/src/components/graphs/GraphPieLayout";
import { getBarStyles } from "@/src/components/styles/stylesBar";
import { useTheme } from "@/src/context/ThemeContext";
import { useFinancialDashboard } from "@/src/hooks/useFinancialDashboard";

export default function FinancialDashboard() {
  const { isDark } = useTheme();
  const barStyles = getBarStyles(isDark);

  const {
    balance,
    currentPrevMonth,
    currentMonthLabel,
    currentNextMonth,
    currentYearLabel,
    nextMonth,
    prevMonth,
    barData,
    pizzaData,
    maxValue,
    receitas,
    despesas,
    investimentos,
  } = useFinancialDashboard();

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

        <BalanceCard balance={balance} />

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
