import { getCalcStyles } from "@/src/components/styles/stylesCalc";
import { useTheme } from "@/src/context/ThemeContext";
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Calculator() {
  const { isDark } = useTheme();
  const styles = getCalcStyles(isDark);

  const [salario, setSalario] = useState(0);
  const [salarioCopy, setSalarioCopy] = useState(0);
  const [inss, setInss] = useState(0);
  const [imposto, setImposto] = useState(0);
  const [desconto, setDesconto] = useState(0);
  const [focused, setFocused] = useState(false);

  const aliquotaInss = salarioCopy > 0 ? (inss / salarioCopy) * 100 : 0;
  const aliquotaIr = salarioCopy > 0 ? (imposto / salarioCopy) * 100 : 0;
  const totalDescontos = imposto + inss;
  const percentual = salarioCopy > 0 ? (totalDescontos / salarioCopy) * 100 : 0;
  const salarioLiquido = salarioCopy - inss - imposto;

  function calculateInss(salarioBruto: number): number {
    const teto = 8475.55;
    salarioBruto = Math.min(salarioBruto, teto);

    let inss = 0;

    if (salarioBruto > 4354.28) {
      inss += (salarioBruto - 4354.28) * 0.14;
      salarioBruto = 4354.28;
    }
    if (salarioBruto > 2902.85) {
      inss += (salarioBruto - 2902.85) * 0.12;
      salarioBruto = 2902.85;
    }
    if (salarioBruto > 1621.0) {
      inss += (salarioBruto - 1621.0) * 0.09;
      salarioBruto = 1621.0;
    }
    inss += salarioBruto * 0.075;

    return Number(inss.toFixed(2));
  }

  function calculateImposto(salarioBruto: number, inss: number): number {
    const baseOriginal = salarioBruto - inss;
    let baseCalculo = baseOriginal;
    let imposto = 0;
    let descontoCalculado = 0;

    if (baseOriginal <= 5000) return 0;

    if (baseCalculo > 4664.69) {
      imposto += (baseCalculo - 4664.69) * 0.275;
      baseCalculo = 4664.69;
    }
    if (baseCalculo > 3751.06) {
      imposto += (baseCalculo - 3751.06) * 0.225;
      baseCalculo = 3751.06;
    }
    if (baseCalculo > 2826.66) {
      imposto += (baseCalculo - 2826.66) * 0.15;
      baseCalculo = 2826.66;
    }
    if (baseCalculo > 2428.81) {
      imposto += (baseCalculo - 2428.81) * 0.075;
    }

    if (baseOriginal <= 7350) {
      descontoCalculado = 978.62 - 0.133145 * baseOriginal;
      imposto = Math.max(0, imposto - descontoCalculado);
      setDesconto(Number(descontoCalculado.toFixed(2)));
    }

    return Number(imposto.toFixed(2));
  }

  function handleCalculate(salarioBruto: number) {
    const valorInss = calculateInss(salarioBruto);
    const valorImposto = calculateImposto(salarioBruto, valorInss);

    setInss(valorInss);
    setImposto(valorImposto);
    setSalarioCopy(salarioBruto);
  }

  function formatCurrency(value: number) {
    return value.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Calculadora de{"\n"}Imposto de Renda</Text>
          <Text style={styles.subtitle}>
            Calcule seus descontos e veja seu salário líquido
          </Text>
        </View>

        <View style={styles.inputCard}>
          <Text style={styles.inputLabel}>Salário Bruto</Text>

          <TextInput
            keyboardType="numeric"
            value={salario === 0 ? "" : salario.toString()}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChangeText={(text) => setSalario(Number(text.replace(",", ".")))}
            placeholder="Digite seu salário"
            placeholderTextColor={isDark ? "#888" : "#999"}
            selectionColor="#2563EB"
            style={[styles.input, focused && styles.inputFocused]}
          />

          <TouchableOpacity
            style={styles.calculateButton}
            onPress={() => handleCalculate(salario)}
          >
            <Text style={styles.calculateButtonText}>Calcular</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.resultCard}>
          <Text style={styles.resultTitle}>Resultado do cálculo</Text>

          <View style={styles.resultItem}>
            <Text style={styles.resultLabel}>Salário Bruto</Text>
            <Text style={styles.resultValue}>R$ {salarioCopy}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.resultItem}>
            <Text style={styles.resultLabel}>INSS</Text>
            <Text style={styles.resultValue}>R$ {inss}</Text>
          </View>

          <View style={styles.resultItem}>
            <Text style={styles.resultLabel}>Base de Cálculo</Text>
            <Text style={styles.resultValue}>
              R$ {formatCurrency(salarioCopy - inss)}
            </Text>
          </View>

          <View style={styles.resultItem}>
            <Text style={styles.resultLabel}>Imposto Bruto</Text>
            <Text style={styles.resultValue}>R$ {formatCurrency(imposto)}</Text>
          </View>

          <View style={styles.resultItem}>
            <Text style={styles.resultLabel}>Desconto Legal</Text>
            <Text style={styles.resultValue}>
              R$ {formatCurrency(desconto)}
            </Text>
          </View>

          <View style={styles.resultItem}>
            <Text style={styles.resultLabel}>IRRF</Text>
            <Text style={styles.resultValue}>R$ {formatCurrency(imposto)}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.highlightItem}>
            <Text style={styles.highlightLabel}>Total de Descontos</Text>
            <Text style={styles.highlightValue}>
              R$ {formatCurrency(totalDescontos)}
            </Text>
          </View>

          <View style={styles.highlightItem}>
            <Text style={styles.highlightLabel}>Salário Líquido</Text>
            <Text style={styles.netSalary}>
              R$ {formatCurrency(salarioLiquido)}
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.resultItem}>
            <Text style={styles.resultLabel}>Alíquota INSS</Text>
            <Text style={styles.resultValue}>{aliquotaInss.toFixed(3)}%</Text>
          </View>

          <View style={styles.resultItem}>
            <Text style={styles.resultLabel}>Alíquota IR</Text>
            <Text style={styles.resultValue}>{aliquotaIr.toFixed(3)}%</Text>
          </View>

          <View style={styles.resultItem}>
            <Text style={styles.resultLabel}>Carga Tributária</Text>
            <Text style={styles.resultValue}>{percentual.toFixed(3)}%</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
