import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { useFinance } from "@/src/context/FinanceContext";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NovoLancamentoScreen() {
  const router = useRouter();
  const { tagsEarn, tagsLost, addEarn, addLost } = useFinance();

  // Estados do formulário
  const [type, setType] = useState<"earn" | "lost">("lost"); // 'earn' = Ganho, 'lost' = Despesa
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [customTag, setCustomTag] = useState("");

  // Obtém as tags dinâmicas dependendo do tipo escolhido
  const currentTags = type === "earn" ? tagsEarn : tagsLost;

  const handleSave = () => {
    if (!title.trim() || !value.trim()) {
      Alert.alert("Atenção", "Preencha o título e o valor.");
      return;
    }

    const numericValue = parseFloat(value.replace(",", "."));
    if (isNaN(numericValue) || numericValue <= 0) {
      Alert.alert("Atenção", "Informe um valor válido.");
      return;
    }

    // Define a tag (usa a personalizada se digitada, senão usa a selecionada)
    const finalTag = customTag.trim() || selectedTag;

    if (!finalTag) {
      Alert.alert("Atenção", "Selecione ou crie uma tag.");
      return;
    }

    // Salva de acordo com o tipo
    if (type === "earn") {
      addEarn({ title, value: numericValue, tag: finalTag });
    } else {
      addLost({ title, value: numericValue, tag: finalTag });
    }

    Alert.alert("Sucesso", "Lançamento adicionado com sucesso!", [
      {
        text: "OK",
        onPress: () => router.back(),
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.headerTitle}>Novo Lançamento</Text>

        {/* Seleção do Tipo: Ganho ou Despesa */}
        <View style={styles.typeContainer}>
          <TouchableOpacity
            style={[
              styles.typeButton,
              type === "earn" && styles.typeButtonEarnActive,
            ]}
            onPress={() => {
              setType("earn");
              setSelectedTag("");
            }}
          >
            <Text
              style={[
                styles.typeText,
                type === "earn" && styles.typeTextActive,
              ]}
            >
              + Ganho
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.typeButton,
              type === "lost" && styles.typeButtonLostActive,
            ]}
            onPress={() => {
              setType("lost");
              setSelectedTag("");
            }}
          >
            <Text
              style={[
                styles.typeText,
                type === "lost" && styles.typeTextActive,
              ]}
            >
              - Despesa
            </Text>
          </TouchableOpacity>
        </View>

        {/* Campo Título */}
        <Text style={styles.label}>Descrição / Título</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Jantar no restaurante, Projeto X"
          value={title}
          onChangeText={setTitle}
        />

        {/* Campo Valor */}
        <Text style={styles.label}>Valor (R$)</Text>
        <TextInput
          style={styles.input}
          placeholder="0,00"
          keyboardType="numeric"
          value={value}
          onChangeText={setValue}
        />

        {/* Seleção de Tags Existentes */}
        <Text style={styles.label}>Selecione uma Tag Existente</Text>
        <View style={styles.tagsContainer}>
          {currentTags.map((tag) => {
            const isSelected = selectedTag === tag && !customTag;
            return (
              <TouchableOpacity
                key={tag}
                style={[styles.tagChip, isSelected && styles.tagChipSelected]}
                onPress={() => {
                  setSelectedTag(tag);
                  setCustomTag(""); // Limpa tag customizada ao escolher uma existente
                }}
              >
                <Text
                  style={[
                    styles.tagText,
                    isSelected && styles.tagTextSelected,
                  ]}
                >
                  #{tag}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Ou criar uma nova Tag */}
        <Text style={styles.label}>Ou crie uma nova Tag</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Viagem, Educação..."
          value={customTag}
          onChangeText={(text) => {
            setCustomTag(text);
            setSelectedTag("");
          }}
        />

        {/* Botão Salvar */}
        <TouchableOpacity
          style={[
            styles.saveButton,
            type === "earn" ? styles.bgEarn : styles.bgLost,
          ]}
          onPress={handleSave}
        >
          <Text style={styles.saveButtonText}>Confirmar Lançamento</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
  },
  content: {
    padding: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  typeContainer: {
    flexDirection: "row",
    marginBottom: 20,
    gap: 10,
  },
  typeButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#CCC",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  typeButtonEarnActive: {
    backgroundColor: "#2e7d32",
    borderColor: "#2e7d32",
  },
  typeButtonLostActive: {
    backgroundColor: "#c62828",
    borderColor: "#c62828",
  },
  typeText: {
    fontWeight: "bold",
    color: "#666",
  },
  typeTextActive: {
    color: "#FFF",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#444",
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 16,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginVertical: 6,
  },
  tagChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: "#E0E0E0",
  },
  tagChipSelected: {
    backgroundColor: "#1976D2",
  },
  tagText: {
    fontSize: 14,
    color: "#333",
  },
  tagTextSelected: {
    color: "#FFF",
    fontWeight: "bold",
  },
  saveButton: {
    marginTop: 30,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  bgEarn: {
    backgroundColor: "#2e7d32",
  },
  bgLost: {
    backgroundColor: "#c62828",
  },
  saveButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});