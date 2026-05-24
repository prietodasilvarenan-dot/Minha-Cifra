import { HelloWave } from "@/src/components/expo/hello-wave";
import ParallaxScrollView from "@/src/components/expo/parallax-scroll-view";
import { ThemedText } from "@/src/components/expo/themed-text";
import { ThemedView } from "@/src/components/expo/themed-view";
import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
    const [userData, setUserData] = useState({ name: "Renan" });
    const [financials, setFinancials] = useState({
        balance: 1250.00,
        incomeMonth: 2500.00,
        expenseMonth: 450.00,
        topCategory: "Alimentação"
    });

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
            headerImage={
                <View>
                    <ThemedText>🏠</ThemedText>
                </View>
            }>

            <ThemedView>
                <ThemedText type="title">Olá, {userData.name}!</ThemedText>
                <HelloWave />
            </ThemedView>

            <ThemedText type="default">
                Aqui está o panorama geral das suas finanças hoje.
            </ThemedText>

            <ScrollView>
                
                <View>
                    <ThemedText type="defaultSemiBold">Saldo Geral</ThemedText>
                    <ThemedText type="subtitle">R$ {financials.balance.toFixed(2)}</ThemedText>
                    
                    <View>
                        <ThemedText>▲ Entradas no mês: R$ {financials.incomeMonth.toFixed(2)}</ThemedText>
                    </View>

                    <TouchableOpacity>
                        <ThemedText type="defaultSemiBold">Ajustar Saldo</ThemedText>
                    </TouchableOpacity>
                </View>

                <View>
                    <ThemedText type="defaultSemiBold">Despesas Mensais</ThemedText>
                    <ThemedText type="subtitle">R$ {financials.expenseMonth.toFixed(2)}</ThemedText>
                    
                    <View>
                        <ThemedText >▼ Maior consumo: {financials.topCategory}</ThemedText>
                    </View>

                    <TouchableOpacity>
                        <ThemedText type="defaultSemiBold">Lançar Despesa</ThemedText>
                    </TouchableOpacity>
                </View>

                <View>
                    <ThemedText type="subtitle">Análise e Impostos</ThemedText>

                    <TouchableOpacity onPress={() => router.push("/calculator")}>
                        <ThemedText type="default">💼 Simular Imposto de Renda</ThemedText>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => router.push("/pizzaGraph")}>
                        <ThemedText type="default">📊 Ver Proporção por Categorias</ThemedText>
                    </TouchableOpacity>
                </View>

            </ScrollView>

        </ParallaxScrollView>
    );
}