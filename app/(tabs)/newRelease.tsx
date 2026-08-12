import { Header } from "@/src/components/common/header";
import AddTagModal from "@/src/components/modal/tagModal";
import { getNewReleaseStyles } from "@/src/components/styles/stylesNewRelease";
import { useFinance } from "@/src/context/FinanceContext";
import { useTheme } from "@/src/context/ThemeContext";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NewReleaseScreen() {
  const router = useRouter();
  const { isDark } = useTheme();
  const styles = getNewReleaseStyles(isDark);

  const {
  tagsEarn,
  tagsInvestments,
  tagsLost,

  addEarn,
  addInvestments,
  addLost,

  addTagEarn,
  addTagInvestments,
  addTagLost,
} = useFinance();

  const [type, setType] = useState<"earn" | "investiments" |"lost">("lost");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

 const currentTags =
  type === "earn"
    ? tagsEarn
    : type === "investiments"
    ? tagsInvestments
    : tagsLost;

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

  const item = {
    title: title.trim(),
    value: numericValue,
    tag: selectedTag,
  };

  if (type === "earn") {
    addEarn(item);
  } else if (type === "investiments") {
    addInvestments(item);
  } else {
    addLost(item);
  }

  setSelectedTag("");
  setTitle("");
  setValue("");

  Alert.alert("Sucesso", "Lançamento adicionado com sucesso!", [
    {
      text: "OK",
      onPress: () => router.push("/"),
    },
  ]);
};

  const handleAddTag = (tag: string) => {
    const newTag = tag.trim();

    if (!newTag) return;

    if (type === "earn") {
      addTagEarn(newTag);
    } else if (type === "investiments") {
      addTagInvestments(newTag);
    } else {
      addTagLost(newTag);
    }

    setSelectedTag(newTag);
    setIsModalVisible(false);
  };

  const handleChangeType = (newType: "earn" | "investiments" | "lost") => {
    setType(newType);
    setSelectedTag("");
    setTitle("");
    setValue("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Header
          title="Novo lançamento"
          subtitle="Adicione novos itens e tags a sua carteira"
        />

        <View style={styles.inputCard}>
          {/* Tipo */}
          <View style={styles.typeContainer}>
            <TouchableOpacity
              style={[
                styles.typeButton,
                type === "earn" && styles.typeButtonEarnActive,
              ]}
              onPress={() => handleChangeType("earn")}
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
                type === "investiments" && styles.typeButtonInvestimentsActive,
              ]}
              onPress={() => handleChangeType("investiments")}
            >
              <Text
                style={[
                  styles.typeText,
                  type === "investiments" && styles.typeTextActive,
                ]}
              >
                Inves.
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.typeButton,
                type === "lost" && styles.typeButtonLostActive,
              ]}
              onPress={() => handleChangeType("lost")}
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

          {/* Título */}
          <Text style={styles.label}>Descrição / Título</Text>

          <TextInput
            style={styles.input}
            placeholder="Ex: Jantar no restaurante, Projeto X"
            value={title}
            onChangeText={setTitle}
          />

          {/* Valor */}
          <Text style={styles.label}>Valor (R$)</Text>

          <TextInput
            style={styles.input}
            placeholder="0,00"
            keyboardType="numeric"
            value={value}
            onChangeText={setValue}
          />

          {/* Tags */}
          <Text style={styles.label}>Selecione uma Tag</Text>

          <View style={styles.tagsContainer}>
            {currentTags.map((tag) => {
              const isSelected = selectedTag === tag;

              return (
                <TouchableOpacity
                  key={tag}
                  style={[
                    styles.tagChip,
                    isSelected && styles.tagChipSelected,
                  ]}
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

          {/* Salvar */}
          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleSave}
          >
            <Text style={styles.saveButtonText}>
              Confirmar Lançamento
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Modal de nova tag */}
      <AddTagModal
        visible={isModalVisible}
        cardTitle={
          type === "earn"
            ? "Ganhos"
            : type === "investiments"
            ? "Investimentos"
            : "Despesas"
        }
        onClose={() => setIsModalVisible(false)}
        onAddTag={handleAddTag}
      />
    </SafeAreaView>
  );
}