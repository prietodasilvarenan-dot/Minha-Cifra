import ParallaxScrollView from "@/src/components/expo/parallax-scroll-view";
import { ThemedText } from "@/src/components/expo/themed-text";
import { ThemedView } from "@/src/components/expo/themed-view";
import React, { useState } from "react";
import { Alert, TextInput, TouchableOpacity, View } from "react-native";

export default function Calculator() {
    const [income, setIncome] = useState("");
    const [deductions, setDeductions] = useState("");
    const [result, setResult] = useState<{ tax: number; effectiveRate: number } | null>(null);

    const calculateTax = () => {
        const rawIncome = parseFloat(income);
        const rawDeductions = parseFloat(deductions) || 0;

        if (isNaN(rawIncome) || rawIncome <= 0) {
            Alert.alert("Erro", "Por favor, insira um rendimento válido.");
            return;
        }

        const calculationBase = Math.max(0, rawIncome - rawDeductions);
        let taxValue = 0;

        if (calculationBase <= 2259.20) {
            taxValue = 0;
        } else if (calculationBase <= 2828.65) {
            taxValue = (calculationBase * 0.075) - 169.44;
        } else if (calculationBase <= 3751.05) {
            taxValue = (calculationBase * 0.15) - 381.44;
        } else if (calculationBase <= 4664.68) {
            taxValue = (calculationBase * 0.225) - 662.77;
        } else {
            taxValue = (calculationBase * 0.275) - 896.00;
        }

        taxValue = Math.max(0, taxValue);
        const rate = (taxValue / rawIncome) * 100;

        setResult({
            tax: taxValue,
            effectiveRate: rate
        });
    };

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: "#D1E7DD", dark: "#0F5132" }}
            headerImage={
                <View>
                    <ThemedText>💼</ThemedText>
                </View>
            }>

            <ThemedView>
                <ThemedText type="title">Simulador Fiscal</ThemedText>
            </ThemedView>

            <ThemedText type="default">
                Calcule uma estimativa do seu imposto com base no seu rendimento e deduções declaradas.
            </ThemedText>

            <View>
                <ThemedText type="defaultSemiBold">Rendimento Mensal Bruto (R$)</ThemedText>
                <TextInput
                    placeholder="Ex: 4500.00"
                    placeholderTextColor="#888"
                    keyboardType="numeric"
                    value={income}
                    onChangeText={setIncome}
                />

                <ThemedText type="defaultSemiBold">Deduções Legais Opcionais (R$)</ThemedText>
                <TextInput
                    placeholder="Ex: 500.00 (Previdência, Dependentes...)"
                    placeholderTextColor="#888"
                    keyboardType="numeric"
                    value={deductions}
                    onChangeText={setDeductions}
                />

                <TouchableOpacity onPress={calculateTax}>
                    <ThemedText>Calcular Estimativa</ThemedText>
                </TouchableOpacity>
            </View>

            {result !== null && (
                <ThemedView>
                    <ThemedText type="subtitle">Resultado Analítico</ThemedText>
                    
                    <View>
                        <ThemedText type="default">Imposto Estimado:</ThemedText>
                        <ThemedText type="defaultSemiBold">
                            R$ {result.tax.toFixed(2)}
                        </ThemedText>
                    </View>

                    <View>
                        <ThemedText type="default">Alíquota Efetiva Real:</ThemedText>
                        <ThemedText type="defaultSemiBold">
                            {result.effectiveRate.toFixed(2)}%
                        </ThemedText>
                    </View>
                </ThemedView>
            )}

        </ParallaxScrollView>
    );
}