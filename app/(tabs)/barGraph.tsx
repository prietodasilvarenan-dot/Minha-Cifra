import React, { useState } from "react";
import { Alert, TouchableOpacity, View } from "react-native";

// Componentes do seu template Expo
import ParallaxScrollView from "@/src/components/expo/parallax-scroll-view";
import { ThemedText } from "@/src/components/expo/themed-text";
import { ThemedView } from "@/src/components/expo/themed-view";

export default function BarGraph() {
    // Exemplo de dados mockados (Histórico mensal para comparar evolução de gastos)
    const [monthlyData, setMonthlyData] = useState([
        { id: 1, month: "Jan", total: 850.00 },
        { id: 2, month: "Fev", total: 1100.00 },
        { id: 3, month: "Mar", total: 950.00 },
        { id: 4, month: "Abr", total: 1250.00 },
        { id: 5, month: "Mai", total: 1000.00 },
    ]);

    const handleMonthDetails = (month: string, total: number) => {
        Alert.alert("Resumo Mensal", `Total gasto em ${month}: R$ ${total.toFixed(2)}`);
    };

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: "#E2E3E5", dark: "#343A40" }}
            headerImage={
                <View>
                    <ThemedText>📉</ThemedText>
                </View>
            }>

            <ThemedView>
                <ThemedText type="title">Evolução Mensal</ThemedText>
            </ThemedView>

            <ThemedText type="default">
                Acompanhe o comparativo do seu volume total de despesas ao longo dos últimos meses.
            </ThemedText>

            {/* Espaço reservado para a renderização das barras gráficas (Ex: react-native-chart-kit) */}
            <View>
                <ThemedText type="defaultSemiBold">Gráfico de Histórico</ThemedText>
                {/* O componente visual das barras verticais ou horizontais entrará aqui via biblioteca ou CSS */}
            </View>

            {/* Detalhamento em Lista */}
            <View>
                <ThemedText type="subtitle">Valores Acumulados</ThemedText>

                {monthlyData.map((item) => (
                    <TouchableOpacity 
                        key={item.id} 
                        onPress={() => handleMonthDetails(item.month, item.total)}
                    >
                        <View>
                            <ThemedText type="default">{item.month}</ThemedText>
                        </View>

                        <View>
                            <ThemedText type="defaultSemiBold">R$ {item.total.toFixed(2)}</ThemedText>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>

            <View>
                <ThemedText>
                    * Gráficos de barras são ideais para auditar flutuações sazonais de faturamento e custos.
                </ThemedText>
            </View>

        </ParallaxScrollView>
    );
}