import { ThemedText } from "@/src/components/expo/themed-text";
import LegendList from "@/src/components/graphs/LegendList";
import MonthNavigator from "@/src/components/graphs/MonthNavigator";
import PieChart from "@/src/components/graphs/PieChart";
import { getPizzaStyles } from "@/src/components/styles/stylesPizza";
import { pizza, useGraphicFilter } from "@/src/hooks/useGraphicFilter";
import React from "react";
import {
    ScrollView,
    Text,
    useColorScheme,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PizzaGraph() {
    const isDark = useColorScheme() === "dark";
    const styles = getPizzaStyles(isDark);

    const {
        currentMonthLabel,
        currentYearLabel,
        filteredGraphic,
        nextMonth,
        prevMonth,
    } = useGraphicFilter(pizza);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.header}>
                    <ThemedText
                        type="title"
                        style={styles.title}
                    >
                        Distribuição de Gastos
                    </ThemedText>
                    <Text style={styles.subtitle}>
                        Veja onde seu dinheiro está sendo utilizado
                    </Text>
                </View>

                <View style={styles.balanceCard}>
                    <Text style={styles.balanceLabel}>
                        Total de gastos
                    </Text>
                    <Text style={styles.balanceValue}>
                        R$ 1.950,00
                    </Text>
                </View>

                <View style={styles.pizzaCard}>

                    <Text style={styles.pizzaTitle}>
                        Distribuição por categoria
                    </Text>
                    <MonthNavigator
                        month={currentMonthLabel}
                        year={currentYearLabel}
                        onPrev={prevMonth}
                        onNext={nextMonth}
                    />
                    <View style={styles.pizzaArea}>
                        <PieChart
                            data={filteredGraphic}
                        />
                    </View>
                    <View style={styles.legend}>
                        <LegendList
                            data={filteredGraphic}
                        />
                    </View>
                </View>

                <View style={styles.summary}>
                    <View style={styles.summaryCard}>
                        <Text style={styles.summaryLabel}>
                            Maior gasto
                        </Text>

                        <Text style={styles.summaryValue}>
                            Aluguel
                        </Text>
                    </View>
                    <View style={styles.summaryCard}>
                        <Text style={styles.summaryLabel}>
                            Categoria
                        </Text>

                        <Text style={styles.summaryValue}>
                            Moradia
                        </Text>
                    </View>
                    <View style={styles.summaryCard}>
                        <Text style={styles.summaryLabel}>
                            Total
                        </Text>

                        <Text style={styles.summaryValue}>
                            R$ 1.950
                        </Text>
                    </View>
                </View>
                <Text style={styles.instructionText}>
                    * Toque em uma categoria para auditar os lançamentos associados.
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}