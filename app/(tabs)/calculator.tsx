import { ThemedText } from "@/src/components/expo/themed-text";
import { ThemedView } from "@/src/components/expo/themed-view";
import React, { useState } from "react";
//import { Alert, TextInput, TouchableOpacity, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Calculator() {
    const [salario, setSalario] = useState(0);
    const [salarioCopy, setSalarioCopy] = useState(0);
    const [inss, setInss] = useState(0);
    const [imposto, setImposto] = useState(0);
    const [desconto, setDesconto] = useState(0);

    const aliquotaInss = (inss / salario) * 100;
    const aliquotaIr = (imposto / salario) * 100;
    const totalDescontos = imposto + inss;
    const percentual = (totalDescontos / salario) * 100;
    const salarioLiquido = salario - inss - imposto;

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

        if (salarioBruto > 1621.00) {
            inss += (salarioBruto - 1621.00) * 0.09;
            salarioBruto = 1621.00;
        }
        inss += salarioBruto * 0.075;

        return Number(inss.toFixed(2));
    }

    function calculateImposto(salarioBruto: number, inss: number): number {
        let baseOriginal = salarioBruto - inss;
        let baseCalculo = baseOriginal;
        let imposto = 0;
        let desconto = 0;

        if (baseOriginal <= 5000) {
            return 0;
        }

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
            desconto = 978.62 - (0.133145 * baseOriginal);
            imposto = Math.max(0, imposto - desconto);
            setDesconto(Number(desconto.toFixed(2)));
        }

        return Number(imposto.toFixed(2));
    }

    function handleCalculate(salarioBruto: number) {
        setInss(0);
        setImposto(0);
        setDesconto(0);

        const valorInss = calculateInss(salarioBruto);
        const valorImposto = calculateImposto(salarioBruto, valorInss);

        setInss(valorInss);
        setImposto(valorImposto);
        setSalarioCopy(salario);
    }

    return (
        <SafeAreaView>
            <ThemedView>
                <ThemedText>Calculadora de Imposto de Renda</ThemedText>
            </ThemedView>

            <ThemedView>
                <ThemedText>Salario Bruto</ThemedText>
                <TextInput
                    keyboardType="numeric"
                    value={salario.toString()}
                    onChangeText={text => setSalario(Number(text.replace(",", ".")))} />
                <TouchableOpacity onPress={() => handleCalculate(salario)}>Calcular</TouchableOpacity>
            </ThemedView>

            <ThemedView>
                <ThemedText>Salário Bruto: R$ {salarioCopy}</ThemedText>

                <ThemedText>INSS: R$ {inss}</ThemedText>
                <ThemedText>Base de Cálculo: R$ {salarioCopy - inss}</ThemedText>

                <ThemedText>Imposto Bruto: R$ {imposto}</ThemedText>
                <ThemedText>Desconto Legal: R$ {desconto}</ThemedText>
                <ThemedText>IRRF: R$ {Number(imposto - desconto,).toFixed(2)}</ThemedText>

                <ThemedText>Total de Descontos: R$ {totalDescontos}</ThemedText>
                <ThemedText>Salário Líquido: R$ {salarioLiquido}</ThemedText>

                <ThemedText>Alíquota INSS: {Number(aliquotaInss).toFixed(3)}%</ThemedText>
                <ThemedText>Alíquota IR: {aliquotaIr}%</ThemedText>
                <ThemedText>Carga Tributária: {Number(percentual).toFixed(3)}%</ThemedText>
            </ThemedView>
        </SafeAreaView>
    );
}