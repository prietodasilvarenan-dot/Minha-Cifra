import { ThemedText } from "@/src/components/expo/themed-text";
import { ThemedView } from "@/src/components/expo/themed-view";
import LegendList from "@/src/components/LegendList";
import MonthNavigator from "@/src/components/MonthNavigator";
import PieChart from "@/src/components/PieChart";
import { pizza, useGraphicFilter } from "@/src/hooks/useGraphicFilter";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PizzaGraph() {
    const {
        currentMonthLabel,
        currentYearLabel,
        filteredGraphic,
        nextMonth,
        prevMonth,
    } = useGraphicFilter(pizza);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ThemedView style={styles.container}>

                <ThemedText type="title">
                    Distribuição de Gastos
                </ThemedText>

                <MonthNavigator
                    month={currentMonthLabel}
                    year={currentYearLabel}
                    onPrev={prevMonth}
                    onNext={nextMonth}
                />

                <PieChart data={filteredGraphic} />

                <LegendList data={filteredGraphic} />

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
        padding: 20
    },
    footerInstruction: {
        marginTop: 25
    },
    instructionText: {
        fontSize: 12,
        fontStyle: "italic",
        color: "#8E8E93"
    },
});