import React from "react";
import { Text, View } from "react-native";

import LegendList from "@/src/components/graphs/LegendList";
import PieChart from "@/src/components/graphs/PieChart";
import { getPizzaStyles } from "@/src/components/styles/stylesPizza";
import { useTheme } from "@/src/context/ThemeContext";

interface GraphPieLayoutProps {
  data: any[];
  maiorGasto?: string;
  categoria?: string;
  total?: string | number;
}

export const GraphPieLayout = ({
  data,
  maiorGasto = "Aluguel",
  categoria = "Moradia",
  total = "1.950",
}: GraphPieLayoutProps) => {
  const { isDark } = useTheme();
  const pizzaStyles = getPizzaStyles(isDark);

  // Formata o total caso venha como número
  const formattedTotal =
    typeof total === "number"
      ? `R$ ${total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`
      : total.startsWith("R$")
        ? total
        : `R$ ${total}`;

  return (
    <View>
      <View style={pizzaStyles.pizzaCard}>
        <Text style={pizzaStyles.pizzaTitle}>Distribuição por categoria</Text>

        <View style={pizzaStyles.pizzaArea}>
          <PieChart data={data} />
        </View>

        <View style={pizzaStyles.legend}>
          <LegendList data={data} />
        </View>
        <View style={pizzaStyles.summary}>
          <View style={pizzaStyles.summaryCard}>
            <Text style={pizzaStyles.summaryLabel}>Maior gasto</Text>
            <Text style={pizzaStyles.summaryValue}>{maiorGasto}</Text>
          </View>

          <View style={pizzaStyles.summaryCard}>
            <Text style={pizzaStyles.summaryLabel}>Categoria</Text>
            <Text style={pizzaStyles.summaryValue}>{categoria}</Text>
          </View>

          <View style={pizzaStyles.summaryCard}>
            <Text style={pizzaStyles.summaryLabel}>Total</Text>
            <Text style={pizzaStyles.summaryValue}>{formattedTotal}</Text>
          </View>
        </View>
      </View>

      <Text style={pizzaStyles.instructionText}>
        * Toque em uma categoria para auditar os lançamentos associados.
      </Text>
    </View>
  );
};
