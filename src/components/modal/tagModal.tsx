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

interface AddTagModalProps {
  visible: boolean;
  cardTitle: string;
  onClose: () => void;
  onAddTag: (newItem: ItemFinance) => void;
}

export default function AddTagModal({
  visible,
  cardTitle,
  onClose,
  onAddTag,
}: AddTagModalProps) {
  const [novaTag, setNovaTag] = useState("");

  const handleSave = () => {
    const tagFormatada = novaTag.trim();

    if (!tagFormatada) {
      Alert.alert("Atenção", "Informe o nome da tag.");
      return;
    }

    const novoItem: ItemFinance = {
      id: Date.now().toString(),
      title: "Adicione itens",
      value: 0,
      tag: tagFormatada,
    };

    onAddTag(novoItem);
    setNovaTag("");
    onClose();
  };

  const handleClose = () => {
    setNovaTag("");
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={handleClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Adicionar Tag em {cardTitle}</Text>

          <TextInput
            style={styles.input}
            placeholder="Nome da Tag (ex: Freelancer, Mercado)"
            value={novaTag}
            onChangeText={setNovaTag}
            autoFocus
          />

          <View style={styles.modalActions}>
            <TouchableOpacity
              style={[styles.modalBtn, styles.btnCancel]}
              onPress={handleClose}
            >
              <Text style={styles.btnTextCancel}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.modalBtn, styles.btnSave]}
              onPress={handleSave}
            >
              <Text style={styles.btnTextSave}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
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
