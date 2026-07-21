import { ThemedText } from "@/src/components/expo/themed-text";
import GraphBars from "@/src/components/GraphBars";
import GraphLegend from "@/src/components/GraphLegend";
import MonthNavigator from "@/src/components/MonthNavigator";
import { bars, useGraphicFilter } from "@/src/hooks/useGraphicFilter";
import { SafeAreaView, StyleSheet } from "react-native";

export default function BarGraph() {

    const {
        currentMonthLabel,
        currentYearLabel,
        filteredGraphic,
        maxVal,
        nextMonth,
        prevMonth,
    } = useGraphicFilter(bars);

    return (
        <SafeAreaView style={styles.container}>

            <ThemedText
                type="title"
                style={styles.title}
            >
                Resumo Financeiro
            </ThemedText>

            <MonthNavigator
                month={currentMonthLabel}
                year={currentYearLabel}
                onPrev={prevMonth}
                onNext={nextMonth}
            />

            <GraphLegend />

            <GraphBars
                data={filteredGraphic}
                maxValue={maxVal}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: "center",
    },
    title: {
        marginBottom: 15,
    },
});