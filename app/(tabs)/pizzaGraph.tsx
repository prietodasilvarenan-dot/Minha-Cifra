import { ThemedText } from "@/src/components/expo/themed-text";
import { ThemedView } from "@/src/components/expo/themed-view";
import React from "react";
import { Alert, TouchableOpacity, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Circle } from "react-native-svg";
import { pizza, useGraphicFilter } from "@/src/hooks/useGraphicFilter";

export default function PizzaGraph() {
    const { 
        currentMonthLabel, currentYearLabel, filteredGraphic, 
        nextMonth, prevMonth 
    } = useGraphicFilter(pizza);

    const colors = [
        "#FF3B30", 
        "#FF9500", 
        "#FFCC00", 
        "#34C759", 
        "#30B0C7", 
        "#007AFF", 
        "#5856D6", 
        "#AF52DE", 
    ]
    
    const totalValue = filteredGraphic.reduce((sum, item) => sum + item.value, 0);

    const handleCategoryDetails = (category: string, value: number) => {
        const percent = totalValue > 0 ? ((value / totalValue) * 100).toFixed(1) : "0";
        Alert.alert(
            "Detalhes da Categoria", 
            `${category}: R$ ${value.toFixed(2)} (${percent}%)`
        );
    };

    const radius = 35; 
    const circumference = 2 * Math.PI * radius;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ThemedView style={styles.container}>
                <ThemedText type="title">Distribuição de Gastos</ThemedText>
                
                <View style={styles.controlContainer}>
                    <TouchableOpacity onPress={prevMonth} style={styles.navButton}>
                        <ThemedText type="subtitle">-</ThemedText>
                    </TouchableOpacity>
                    
                    <ThemedText type="subtitle" style={styles.monthTitle}>
                        {currentMonthLabel} {currentYearLabel}
                    </ThemedText>
                    
                    <TouchableOpacity onPress={nextMonth} style={styles.navButton}>
                        <ThemedText type="subtitle">+</ThemedText>
                    </TouchableOpacity>
                </View>

                <View style={styles.chartWrapper}>
                    {filteredGraphic.length > 0 && totalValue > 0 ? (
                        <Svg width="160" height="160" viewBox="0 0 160 160">
                            {(() => {
                            let accumulated = 0;

                            return filteredGraphic.map((item, index) => {
                                const percentage = item.value / totalValue;
                                const strokeLength = circumference * percentage;

                                const circle = (
                                    <Circle
                                        key={item.id}
                                        cx="80"
                                        cy="80"
                                        r={radius}
                                        fill="transparent"
                                        stroke={colors[index % colors.length]}
                                        strokeWidth={radius * 2}
                                        strokeDasharray={`${strokeLength} ${circumference}`}
                                        strokeDashoffset={-accumulated}
                                        strokeLinecap="butt"
                                        transform="rotate(-90 80 80)"
                                    />
                                );

                            accumulated += strokeLength;

                            return circle;

                                });
                            })()}
                        </Svg>
                    ) : (
                        <View style={styles.noDataContainer}>
                            <ThemedText type="default">Sem gastos registrados neste mês.</ThemedText>
                        </View>
                    )}
                </View>

                <View style={styles.legendSection}>
                    <ThemedText type="defaultSemiBold" style={styles.legendTitle}>
                        Legenda e Valores
                    </ThemedText>

                    {filteredGraphic.map((item, index) => {
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
                                    R$ {item.value.toFixed(2)} ({percent}%)
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
    container: { padding: 20 },
    controlContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
    },
    navButton: { paddingHorizontal: 20, paddingVertical: 5 },
    monthTitle: { minWidth: 120, textAlign: 'center' },
    chartWrapper: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20,
        height: 160,
    },
    noDataContainer: {
        height: 160,
        justifyContent: 'center',
        alignItems: 'center',
    },
    legendSection: { marginTop: 10 },
    legendTitle: { marginBottom: 15 },
    legendItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#E5E5EA",
    },
    legendLeft: { flexDirection: "row", alignItems: "center", gap: 10 },
    colorBadge: { width: 14, height: 14, borderRadius: 7 },
    footerInstruction: { marginTop: 25 },
    instructionText: { fontSize: 12, fontStyle: "italic", color: "#8E8E93" },
});