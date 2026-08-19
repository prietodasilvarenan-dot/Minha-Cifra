import { Header } from "@/src/components/common/header";
import CalculationResultCard from "@/src/components/calculator/CalculationResultCard";
import SalaryInputCard from "@/src/components/calculator/SalaryInputCard";
import { getCalcStyles } from "@/src/components/styles/stylesCalc";
import { useTheme } from "@/src/context/ThemeContext";
import { useCalculator } from "@/src/hooks/useCalculator";
import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Calculator() {
  const { isDark } = useTheme();
  const styles = getCalcStyles(isDark);

  const {
    salario,
    setSalario,
    salarioCopy,
    inss,
    imposto,
    desconto,
    focused,
    setFocused,
    handleCalculate,
    result,
  } = useCalculator();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Header
          title="Calculadora de Imposto de Renda"
          subtitle="Calcule seus descontos e veja seu salário líquido"
        />

        <SalaryInputCard
          salario={salario}
          focused={focused}
          onChangeSalario={(value) => {
            if (Number.isNaN(value)) return;
            setSalario(value);
          }}
          onFocus={setFocused}
          onCalculate={() => handleCalculate(salario)}
        />

        <CalculationResultCard
          salarioCopy={salarioCopy}
          inss={inss}
          imposto={imposto}
          desconto={desconto}
          totalDescontos={result.totalDescontos}
          salarioLiquido={result.salarioLiquido}
          aliquotaInss={result.aliquotaInss}
          aliquotaIr={result.aliquotaIr}
          percentual={result.percentual}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
