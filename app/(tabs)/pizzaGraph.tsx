import { ThemedText } from "@/src/components/expo/themed-text";
import { ThemedView } from "@/src/components/expo/themed-view";
import React from "react";
import { Alert, TouchableOpacity, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Circle } from "react-native-svg";

export default function PizzaGraph() {
    interface Values {
        id: number;
        title: string;
        value: number;
    }

    const values: Values[] = [
        { id: 1, title: "Alimentação", value: 400 },
        { id: 2, title: "Transporte", value: 2000 },
        { id: 3, title: "Lazer", value: 400 },
        { id: 4, title: "Carro", value: 4000 },
        { id: 5, title: "Teclado", value: 100 },
    ];

    const colors = ["#FF3B30", "#FFCC00", "#4CD964", "#4d3897", "#ff1188"];

    const totalValue = values.reduce((sum, item) => sum + item.value, 0);

    const handleCategoryDetails = (category: string, value: number) => {
        const percent = totalValue > 0 ? ((value / totalValue) * 100).toFixed(1) : "0";
        Alert.alert(
            "Detalhes da Categoria", 
            `${category}: R$ ${value.toFixed(2)} (${percent}%)`
        );
    };

    const radius = 35;
    const circumference = 2 * Math.PI * radius;
    let accumulatedPercent = 0;

    return (
        <SafeAreaView>
            <ThemedView style={styles.container}>
                <ThemedText type="title">Distribuição de Gastos</ThemedText>
                
                <ThemedText type="default" style={styles.subtitle}>
                    Veja o impacto percentual de cada categoria no seu orçamento mensal total.
                </ThemedText>

                {/* 2. AREA DO GRÁFICO DE PIZZA */}
                <View style={styles.chartWrapper}>
                    <Svg width="160" height="160" viewBox="0 0 140 140">
                        {(() => {
                            let currentAccumulated = 1;
                            
                            return values.map((item, index) => {
                                const percentage = totalValue > 0 ? item.value / totalValue : 0;
                                const strokeLength = circumference * percentage;
                                const strokeOffset = circumference - (circumference * currentAccumulated);
                                
                                currentAccumulated += percentage;

                                return (
                                    <Circle
                                        key={item.id}
                                        cx="70"
                                        cy="70" 
                                        r={radius}
                                        fill="transparent"
                                        stroke={colors[index % colors.length]}
                                        strokeWidth="70"
                                        strokeDasharray={`${strokeLength} ${circumference}`}
                                        strokeDashoffset={strokeOffset}
                                        transform="rotate(-90 70 70)"
                                    />
                                );
                            });
                        })()}
                    </Svg>
                </View>



                {/* 3. LEGENDA E VALORES INTERATIVOS */}
                <View style={styles.legendSection}>
                    <ThemedText type="defaultSemiBold" style={styles.legendTitle}>
                        Legenda e Valores
                    </ThemedText>

                    {values.map((item, index) => {
                        const percent = totalValue > 0 ? ((item.value / totalValue) * 100).toFixed(1) : 0;
                        const color = colors[index % colors.length];

                        return (
                            <TouchableOpacity
                                key={item.id}
                                style={styles.legendItem}
                                onPress={() => handleCategoryDetails(item.title, item.value)}
                            >
                                <View style={styles.legendLeft}>
                                    <View style={[styles.colorBadge, { backgroundColor: color }]} />
                                    <ThemedText type="default">{item.title}</ThemedText>
                                </View>
                                
                                <ThemedText type="defaultSemiBold">
                                    R$ {item.value} ({percent}%)
                                </ThemedText>
                            </TouchableOpacity>
                        );
                    })}
                </View>

                <View style={styles.footerInstruction}>
                    <ThemedText style={styles.instructionText}>
                        * Toque em uma categoria da lista para auditar os lançamentos associados.
                    </ThemedText>
                </View>
            </ThemedView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    headerPlaceholder: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subtitle: {
        marginTop: 5,
        marginBottom: 20,
        opacity: 0.8,
    },
    chartWrapper: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20,
    },
    legendSection: {
        marginTop: 10,
    },
    legendTitle: {
        marginBottom: 15,
    },
    legendItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#E5E5EA",
    },
    legendLeft: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    colorBadge: {
        width: 14,
        height: 14,
        borderRadius: 7,
    },
    footerInstruction: {
        marginTop: 25,
    },
    instructionText: {
        fontSize: 12,
        fontStyle: "italic",
        color: "#8E8E93",
    },
});