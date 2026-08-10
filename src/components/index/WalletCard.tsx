import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
  Alert,
} from "react-native";
import { ItemFinance } from "@/src/context/FinanceContext";

interface WalletCardProps {
  title: string;
  total: number;
  items: ItemFinance[];
  hidden: boolean;
  isDark: boolean;
  styles: any;
  onToggle: () => void;
  button: React.ReactNode;
  modal: boolean;
  setModal: (value: boolean) => void;
  setItems: React.Dispatch<React.SetStateAction<ItemFinance[]>>;
}

export default function WalletCard({
  title,
  total,
  items,
  hidden,
  styles,
  button,
  modal,
  setModal,
  setItems,
}: WalletCardProps) {
  const [expandedTag, setExpandedTag] = useState<string | null>(null);

  const [novoTitulo, setNovoTitulo] = useState("");
  const [novoValor, setNovoValor] = useState("");
  const [novaTag, setNovaTag] = useState("");

  const groupedItems = items.reduce((acc, item) => {
    const tagName = item.tag || "Geral";
    if (!acc[tagName]) {
      acc[tagName] = {
        items: [],
        total: 0,
      };
    }
    acc[tagName].items.push(item);
    acc[tagName].total += item.value;
    return acc;
  }, {} as Record<string, { items: ItemFinance[]; total: number }>);

  const toggleTag = (tagName: string) => {
    setExpandedTag((prev) => (prev === tagName ? null : tagName));
  };

  const handleAddItem = () => {
    if (!novoTitulo.trim() || !novoValor.trim()) {
      Alert.alert("Atenção", "Preencha o título e o valor.");
      return;
    }

    const valorNumerico = parseFloat(novoValor.replace(",", "."));
    if (isNaN(valorNumerico) || valorNumerico <= 0) {
      Alert.alert("Atenção", "Informe um valor válido.");
      return;
    }

    const novoItem: ItemFinance = {
      id: Date.now().toString(),
      title: novoTitulo.trim(),
      value: valorNumerico,
      tag: novaTag.trim() || "Geral",
    };

    setItems((prev) => [...prev, novoItem]);

    setNovoTitulo("");
    setNovoValor("");
    setNovaTag("");
    setModal(false);
  };

  return (
    <View style={styles.card}>
      {/* header */}
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardValue}>
          {hidden
            ? "R$ •••••"
            : `R$ ${total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`}
        </Text>
      </View>

      {/* lista agrupada por tags*/}
      {!hidden &&
        Object.entries(groupedItems).map(([tag, data]) => {
          const isExpanded = expandedTag === tag;

          return (
            <View key={tag} style={localStyles.tagContainer}>
              <TouchableOpacity
                style={styles.item}
                onPress={() => toggleTag(tag)}
                activeOpacity={0.7}
              >
                <Text style={[styles.itemText, localStyles.tagTitle]}>
                  {isExpanded ? "▲" : "▼"} #{tag} 
                </Text>
                <Text style={styles.itemValue}>
                  R$ {data.total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                </Text>
              </TouchableOpacity>

              {isExpanded && (
                <View style={localStyles.subItemsContainer}>
                  {data.items.map((subItem) => (
                    <View key={subItem.id} style={styles.item}>
                      <Text style={[styles.itemText, localStyles.subItemText]}>
                        • {subItem.title}
                      </Text>
                      <Text style={styles.itemValue}>
                        R${" "}
                        {subItem.value.toLocaleString("pt-BR", {
                          minimumFractionDigits: 2,
                        })}
                      </Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          );
        })}

      {/* botao que gera o modal*/}
      {button}

      <Modal
        visible={modal}
        transparent
        animationType="fade"
        onRequestClose={() => setModal(false)}
      >
        <View style={localStyles.modalOverlay}>
          <View style={localStyles.modalContent}>
            <Text style={localStyles.modalTitle}>Adicionar em {title}</Text>

            <TextInput
              style={localStyles.input}
              placeholder="Descrição (ex: Projeto, Aluguel)"
              value={novoTitulo}
              onChangeText={setNovoTitulo}
            />

            <TextInput
              style={localStyles.input}
              placeholder="Valor (R$)"
              keyboardType="decimal-pad"
              value={novoValor}
              onChangeText={setNovoValor}
            />

            <TextInput
              style={localStyles.input}
              placeholder="Tag (ex: Freelancer, Mercado)"
              value={novaTag}
              onChangeText={setNovaTag}
            />

            <View style={localStyles.modalActions}>
              <TouchableOpacity
                style={[localStyles.modalBtn, localStyles.btnCancel]}
                onPress={() => setModal(false)}
              >
                <Text style={localStyles.btnTextCancel}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[localStyles.modalBtn, localStyles.btnSave]}
                onPress={handleAddItem}
              >
                <Text style={localStyles.btnTextSave}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const localStyles = StyleSheet.create({
  tagContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(150, 150, 150, 0.15)",
    paddingVertical: 4,
  },
  tagTitle: {
    fontWeight: "800",
  },
  subItemsContainer: {
    paddingLeft: 14,
    paddingVertical: 4,
    opacity: 0.85,
  },
  subItemText: {
    fontSize: 13,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContent: {
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  input: {
    backgroundColor: "#F3F4F6",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    fontSize: 15,
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
    marginTop: 10,
  },
  modalBtn: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  btnCancel: {
    backgroundColor: "#E5E7EB",
  },
  btnSave: {
    backgroundColor: "#006BFF",
  },
  btnTextCancel: {
    color: "#374151",
    fontWeight: "600",
  },
  btnTextSave: {
    color: "#FFF",
    fontWeight: "bold",
  },
});