import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import EyeButton from "./EyeButton";
import WalletItem from "./WalletItem";

interface Item {
  title: string;
  value: number;
}

interface Props {
  title: string;
  total: number;
  items: Item[];
  hidden: boolean;
  isDark: boolean;
  styles: any;
  onToggle: () => void;
  button: React.ReactNode;
  modal: boolean;
}

export default function WalletCard({
  title,
  total,
  items,
  hidden,
  isDark,
  styles,
  onToggle,
  button,
  modal,
}: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{title}</Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Text style={styles.cardValue}>
            {hidden ? "••••••" : `R$ ${total}`}
          </Text>

          <EyeButton hidden={hidden} isDark={isDark} onPress={onToggle} />
        </View>
      </View>

      {items.map((item) => (
        <WalletItem
          key={item.title}
          title={item.title}
          value={item.value}
          hidden={hidden}
          styles={styles}
        />
      ))}

      {modal ? (
        <View>
          {"Adicionar um Item"}
          <TextInput placeholder="Titulo..."></TextInput>
          <TextInput placeholder="Valor..."></TextInput>
          <TouchableOpacity>Adicionar</TouchableOpacity>
        </View>
      ) : (
        <View />
      )}

      {button}
    </View>
  );
}
