import React, { useState } from "react";
import { Alert, TouchableOpacity, View } from "react-native";

// Componentes do seu template Expo
import ParallaxScrollView from "@/src/components/expo/parallax-scroll-view";
import { ThemedText } from "@/src/components/expo/themed-text";
import { ThemedView } from "@/src/components/expo/themed-view";

export default function PizzaGraph() {
    // Exemplo de dados mockados (Depois virão das despesas salvas no seu MariaDB)
    const [mockData, setMockData] = useState([
        { id: 1, category: "Alimentação", value: 450.00, color: "#DC3545", percentage: 45 },
        { id: 2, category: "Transporte", value: 250.00, color: "#0D6EFD", percentage: 25 },
        { id: 3, category: "Lazer", value: 200.00, color: "#FFC107", percentage: 20 },
        { id: 4, category: "Moradia", value: 100.00, color: "#198754", percentage: 10 },
    ]);

    const handleCategoryDetails = (category: string, value: number) => {
        Alert.alert("Detalhes da Categoria", `${category}: R$ ${value.toFixed(2)}`);
    };

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: "#FFE8D6", dark: "#6D4C41" }}
            headerImage={
                <View>
                    <ThemedText>📊</ThemedText>
                </View>
            }>

            <ThemedView>
                <ThemedText type="title">Distribuição de Gastos</ThemedText>
            </ThemedView>

            <ThemedText type="default">
                Veja o impacto percentual de cada categoria no seu orçamento mensal total.
            </ThemedText>

            {/* Espaço reservado para o componente de biblioteca gráfica (Ex: react-native-svg-charts ou react-native-chart-kit) */}
            <View>
                <ThemedText type="defaultSemiBold">Gráfico de Proporção</ThemedText>
                {/* O componente visual do gráfico em si entrará neste bloco através das suas estilizações ou libs externas */}
            </View>

            {/* Legenda Analítica / Lista de Categorias */}
            <View>
                <ThemedText type="subtitle">Legenda e Valores</ThemedText>

                {mockData.map((item) => (
                    <TouchableOpacity 
                        key={item.id} 
                        onPress={() => handleCategoryDetails(item.category, item.value)}
                    >
                        <View>
                            {/* Bloco indicador de cor */}
                            <View /> 
                            
                            <ThemedText type="default">{item.category}</ThemedText>
                        </View>

                        <View>
                            <ThemedText type="defaultSemiBold">R$ {item.value.toFixed(2)}</ThemedText>
                            <ThemedText>({item.percentage}%)</ThemedText>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>

            <View>
                <ThemedText>
                    * Toque em uma categoria da lista para auditar os lançamentos associados.
                </ThemedText>
            </View>

        </ParallaxScrollView>
    );
}