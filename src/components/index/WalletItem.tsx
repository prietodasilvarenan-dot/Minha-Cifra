import React from "react";
import { Text, View } from "react-native";

interface Props {
  title: string;
  value: number;
  hidden: boolean;
  styles: any;
}

export default function WalletItem({ title, value, hidden, styles }: Props) {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{title}</Text>

      <Text style={styles.itemValue}>{hidden ? "••••" : `R$ ${value}`}</Text>
    </View>
  );
}
