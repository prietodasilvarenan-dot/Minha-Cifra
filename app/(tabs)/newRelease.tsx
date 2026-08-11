import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { useFinance } from "@/src/context/FinanceContext";
import { SafeAreaView } from "react-native-safe-area-context";
import AddTagModal from "@/src/components/modal/tagModal";
import { getNewReleaseStyles } from "@/src/components/styles/stylesNewRelease";
import { useTheme } from "@/src/context/ThemeContext";
import { Header } from "@/src/components/common/header";

export default function newReleaseScreen() {
  const router = useRouter();
  const { isDark } = useTheme();
  const styles = getNewReleaseStyles(isDark);

  const { tagsEarn, tagsLost, addEarn, addLost } = useFinance();

  const [type, setType] = useState<"earn" | "lost">("lost");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  // As tags agora vêm diretamente do Contexto global
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

    if (!selectedTag) {
      Alert.alert("Atenção", "Selecione ou crie uma tag.");
      return;
    }

    if (type === "earn") {
      addEarn({ title, value: numericValue, tag: selectedTag });
    } else {
      addLost({ title, value: numericValue, tag: selectedTag });
    }

    Alert.alert("Sucesso", "Lançamento adicionado com sucesso!", [
      {
        text: "OK",
        onPress: () => router.push("/"),
      },
    ]);
  };

  const handleAddTagFromModal = (newItem: { tag: string }) => {
    const newTag = newItem.tag.trim();
    if (!newTag) return;

    if (type === "earn") {
      addEarn({ title: "Adicione itens", value: 0, tag: newTag });
    } else {
      addLost({ title: "Adicione itens", value: 0, tag: newTag });
    }

    setSelectedTag(newTag);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Header
          title="Novo lançamento"
          subtitle="Adicione novos itens ou tags a sua carteira"
        />

        <View style={styles.inputCard}>
          <View style={styles.typeContainer}>
            <TouchableOpacity
              style={[
                styles.typeButton,
                type === "earn" && styles.typeButtonEarnActive,
              ]}
              onPress={() => {
                setType("earn");
                setSelectedTag("");
                setTitle("");
                setValue("");
              }}
            >
              <Text
                style={[
                  styles.typeText,
                  type === "earn" && styles.typeTextActive,
                ]}
              >
                Ganho
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
                setTitle("");
                setValue("");
              }}
            >
              <Text
                style={[
                  styles.typeText,
                  type === "lost" && styles.typeTextActive,
                ]}
              >
                Despesa
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>Descrição / Título</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Jantar no restaurante, Projeto X"
            value={title}
            onChangeText={setTitle}
          />

          <Text style={styles.label}>Valor (R$)</Text>
          <TextInput
            style={styles.input}
            placeholder="0,00"
            keyboardType="numeric"
            value={value}
            onChangeText={setValue}
          />

          <Text style={styles.label}>Selecione uma Tag</Text>
          <View style={styles.tagsContainer}>
            {currentTags.map((tag) => {
              const isSelected = selectedTag === tag;
              return (
                <TouchableOpacity
                  key={tag}
                  style={[styles.tagChip, isSelected && styles.tagChipSelected]}
                  onPress={() => setSelectedTag(tag)}
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

            <TouchableOpacity
              style={[styles.tagChip, styles.addTagChip]}
              onPress={() => setIsModalVisible(true)}
            >
              <Text style={styles.addTagText}>+ Nova Tag</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[styles.saveButton,]}
            onPress={handleSave}
          >
            <Text style={styles.saveButtonText}>Confirmar Lançamento</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <AddTagModal
        visible={isModalVisible}
        cardTitle={type === "earn" ? "Ganhos" : "Despesas"}
        onClose={() => setIsModalVisible(false)}
        onAddTag={handleAddTagFromModal}
      />
    </SafeAreaView>
  );
}