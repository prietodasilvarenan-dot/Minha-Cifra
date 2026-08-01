import React, { useState } from "react";
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
  setItems: any;
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
  setItems,
}: Props) {
  const [titleItem, setTitleItem] = useState("");
  const [priceItem, setPriceItem] = useState(0);

  function handleAddItem() {
    if (!titleItem || !priceItem || priceItem === 0) return;
    setItems((items: []) => [
      ...items,
      {
        title: titleItem,
        value: priceItem,
      },
    ]);

    setTitleItem("");
    setPriceItem(0);
  }

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
          <TextInput
            value={titleItem}
            onChangeText={(text) => setTitleItem(text)}
            placeholder="Titulo..."
          />
          <TextInput
            value={priceItem.toString()}
            onChangeText={(text) =>
              setPriceItem(Number(text.replace(",", ".")))
            }
            placeholder="Valor..."
            keyboardType="number-pad"
          />
          <TouchableOpacity onPress={handleAddItem}>
            <Text>Adicionar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View />
      )}

      {button}
    </View>
  );
}
