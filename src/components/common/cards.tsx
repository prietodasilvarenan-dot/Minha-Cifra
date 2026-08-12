import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
interface CardProps {
  saldo?: string;
  despesas?: string;
}

export const CardHome: React.FC<CardProps> = ({
  saldo = "1.250,00",
  despesas = "450,00",
}) => {
  return (
    <View>
      <View>
        <Text>Saldo Geral</Text>
        <Text>R$ {saldo}</Text>

        <View>
          <Text>▲ Entradas: R$ 2.500,00</Text>
          <Text>⏱ Previsão: R$ +300,00</Text>
        </View>

        <TouchableOpacity>
          <Text>Ajustar Saldo</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text>Despesas Gerais</Text>
        <Text>R$ {despesas}</Text>

        <View>
          <Text>▼ Maior Gasto: Alimentação</Text>
          <Text>📊 18% do seu orçamento</Text>
        </View>

        <TouchableOpacity>
          <Text>Lançar Despesa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
