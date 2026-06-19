import { ThemedText } from "@/src/components/expo/themed-text";
import React, { useState } from "react";
import { Alert, TouchableOpacity, View, StyleSheet, SafeAreaView } from "react-native";

export default function BarGraph() {
    interface Values {
        year: number;
        month: string;
        earn: number;
        lost: number;
        investments: number;
    }

    const monthNames = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    
    const bars: Values[] = [
        { year: 2024, month: "Jan", earn: 4000, lost: 3000, investments: 500 },
        { year: 2024, month: "Jan", earn: 4000, lost: 3000, investments: 500 },
        { year: 2024, month: "Fev", earn: 2000, lost: 3500, investments: 100 },
        { year: 2024, month: "Mar", earn: 5000, lost: 2000, investments: 6000 },
        { year: 2024, month: "Dez", earn: 4000, lost: 3000, investments: 500 },
    ];

    const currentDate = new Date();
    const [currentMonthIndex, setCurrentMonthIndex] = useState(currentDate.getMonth());

    const [currentYearIndex, setCurrentYearIndex] = useState(currentDate.getFullYear());

    const filteredBars = bars.filter(b => b.month === monthNames[currentMonthIndex]);

    const maxVal = Math.max(...bars.flatMap(b => [b.earn, b.lost, b.investments]));

    const handleDetails = (category: string, month: string, value: number) => {
        Alert.alert("Detalhes", `${category} em ${month}: R$ ${value.toFixed(2)}`);
    };

    const nextMonth = () => {
        setCurrentMonthIndex((prev) => (prev === 11 ? 0 : prev + 1));
    };

    const prevMonth = () => {
        setCurrentMonthIndex((prev) => (prev === 0 ? 11 : prev - 1));
    };

    return (
        <SafeAreaView style={styles.container}>
            <ThemedText type="title" style={styles.title}>Resumo Financeiro</ThemedText>

            {/* controle de seleção do mes */}
            <View style={styles.controlContainer}>
                <TouchableOpacity onPress={prevMonth} style={styles.navButton}>
                    <ThemedText type="subtitle">-</ThemedText>
                </TouchableOpacity>
                
                <ThemedText type="subtitle" style={styles.monthTitle}>
                    {monthNames[currentMonthIndex]}
                </ThemedText>
                
                <TouchableOpacity onPress={nextMonth} style={styles.navButton}>
                    <ThemedText type="subtitle">+</ThemedText>
                </TouchableOpacity>
            </View>

            {/* legenda do grafico */}
            <View style={styles.legendContainer}>
                <View style={styles.legendItem}>
                    <View style={[styles.legendBox, { backgroundColor: '#4CD964' }]} />
                    <ThemedText style={styles.legendText}>Ganhos</ThemedText>
                </View>
                <View style={styles.legendItem}>
                    <View style={[styles.legendBox, { backgroundColor: '#FF3B30' }]} />
                    <ThemedText style={styles.legendText}>Gastos</ThemedText>
                </View>
                <View style={styles.legendItem}>
                    <View style={[styles.legendBox, { backgroundColor: '#5AC8FA' }]} />
                    <ThemedText style={styles.legendText}>Invest.</ThemedText>
                </View>
            </View>

            {/* area do grafico */}
            <View style={styles.chartContainer}>
                {filteredBars.length > 0 ? (
                    filteredBars.map((item, index) => (
                        <View key={index} style={styles.monthGroup}>
                            <View style={styles.barsRow}>
                                <TouchableOpacity 
                                    style={[styles.bar, { 
                                        height: maxVal > 0 ? (item.earn / maxVal) * 140 : 0, 
                                        backgroundColor: '#4CD964' 
                                    }]} 
                                    onPress={() => handleDetails("Ganhos", item.month, item.earn)}
                                />

                                <TouchableOpacity 
                                    style={[styles.bar, { 
                                        height: maxVal > 0 ? (item.lost / maxVal) * 140 : 0, 
                                        backgroundColor: '#FF3B30' 
                                    }]} 
                                    onPress={() => handleDetails("Gastos", item.month, item.lost)}
                                />

                                <TouchableOpacity 
                                    style={[styles.bar, { 
                                        height: maxVal > 0 ? (item.investments / maxVal) * 140 : 0, 
                                        backgroundColor: '#5AC8FA' 
                                    }]} 
                                    onPress={() => handleDetails("Investimentos", item.month, item.investments)}
                                />
                            </View>
                            <ThemedText style={styles.monthLabel}>{item.month}</ThemedText>
                        </View>
                    ))
                ) : (
                    <View style={styles.noDataContainer}>
                        <ThemedText>Sem dados para este mês.</ThemedText>
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
    },
    title: {
        marginBottom: 15,
    },
    controlContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    navButton: {
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    monthTitle: {
        minWidth: 60,
        textAlign: 'center',
    },
    legendContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 25,
        gap: 15,
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    legendBox: {
        width: 12,
        height: 12,
        borderRadius: 3,
    },
    legendText: {
        fontSize: 12,
    },
    chartContainer: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: '100%',
        height: 200,
        borderRadius: 12,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    monthGroup: {
        alignItems: 'center',
        width: '100%',
    },
    barsRow: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: 15, 
        height: 140, 
    },
    bar: {
        width: 35, 
        borderRadius: 4,
    },
    monthLabel: {
        fontSize: 14,
        fontWeight: '600',
        marginTop: 8,
    },
    noDataContainer: {
        width: '100%',
        height: 140,
        justifyContent: 'center',
        alignItems: 'center',
    }
});