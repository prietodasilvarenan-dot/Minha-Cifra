import { ThemedText } from "@/src/components/expo/themed-text";
import React from "react";
import { Alert, TouchableOpacity, View, StyleSheet, SafeAreaView } from "react-native";

export default function BarGraph() {
    interface Bar {
        month: string;
        earn: number;
        lost: number;
        investments: number;
    }

    const bars: Bar[] = [
        { month: "Jan", earn: 4000, lost: 3000, investments: 500 },
        { month: "Fev", earn: 2000, lost: 3500, investments: 100 },
        { month: "Mar", earn: 5000, lost: 2000, investments: 6000 },
    ];

    const maxVal = Math.max(...bars.flatMap(b => [b.earn, b.lost, b.investments]));

    const handleDetails = (category: string, month: string, value: number) => {
        Alert.alert("Detalhes", `${category} em ${month}: R$ ${value.toFixed(2)}`);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ThemedText type="title" style={styles.title}>Resumo Financeiro</ThemedText>

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
                {bars.map((item, index) => (
                    <View key={index} style={styles.monthGroup}>
                        
                        {/* sub-container com as 3 barras lado a lado */}
                        <View style={styles.barsRow}>
                            {/* barra de ganhos (earn) */}
                            <TouchableOpacity 
                                style={[styles.bar, { 
                                    height: maxVal > 0 ? (item.earn / maxVal) * 140 : 0, 
                                    backgroundColor: '#4CD964' 
                                }]} 
                                onPress={() => handleDetails("Ganhos", item.month, item.earn)}
                            />

                            {/* barra de gastos (lost) */}
                            <TouchableOpacity 
                                style={[styles.bar, { 
                                    height: maxVal > 0 ? (item.lost / maxVal) * 140 : 0, 
                                    backgroundColor: '#FF3B30' 
                                }]} 
                                onPress={() => handleDetails("Gastos", item.month, item.lost)}
                            />

                            {/* barra de investimentos */}
                            <TouchableOpacity 
                                style={[styles.bar, { 
                                    height: maxVal > 0 ? (item.investments / maxVal) * 140 : 0, 
                                    backgroundColor: '#5AC8FA' 
                                }]} 
                                onPress={() => handleDetails("Investimentos", item.month, item.investments)}
                            />
                        </View>

                        {/* nome do mes abaixo do grupo de barras */}
                        <ThemedText style={styles.monthLabel}>{item.month}</ThemedText>
                    </View>
                ))}
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: '100%',
        height: 200,
        borderRadius: 12,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    monthGroup: {
        alignItems: 'center',
        flex: 1,
    },
    barsRow: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: 4,
        height: 140, 
    },
    bar: {
        width: 20,
    },
    monthLabel: {
        fontSize: 14,
        fontWeight: '600',
        marginTop: 8,
    },
});