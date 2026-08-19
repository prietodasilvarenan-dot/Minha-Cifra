import { useCallback } from "react";
import { Alert } from "react-native";
import { useRouter } from "expo-router";

import { useFinance } from "@/src/context/FinanceContext";

export type ReleaseType = "earn" | "investiments" | "lost";

interface UseNewReleaseActionsParams {
  type: ReleaseType;
  title: string;
  value: string;
  selectedTag: string;
  setType: (type: ReleaseType) => void;
  setTitle: (value: string) => void;
  setValue: (value: string) => void;
  setSelectedTag: (value: string) => void;
  setIsModalVisible: (value: boolean) => void;
}

export function useNewReleaseActions({
  type,
  title,
  value,
  selectedTag,
  setType,
  setTitle,
  setValue,
  setSelectedTag,
  setIsModalVisible,
}: UseNewReleaseActionsParams) {
  const router = useRouter();

  const {
    addEarn,
    addInvestments,
    addLost,
    addTagEarn,
    addTagInvestments,
    addTagLost,
  } = useFinance();

  const handleSave = useCallback(() => {
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
  }, [
    addEarn,
    addInvestments,
    addLost,
    router,
    selectedTag,
    setSelectedTag,
    setTitle,
    setValue,
    title,
    type,
    value,
  ]);

  const handleAddTag = useCallback(
    (tag: string) => {
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
    },
    [
      addTagEarn,
      addTagInvestments,
      addTagLost,
      setIsModalVisible,
      setSelectedTag,
      type,
    ],
  );

  const handleChangeType = useCallback(
    (newType: ReleaseType) => {
      setType(newType);
      setSelectedTag("");
      setTitle("");
      setValue("");
    },
    [setSelectedTag, setTitle, setType, setValue],
  );

  return {
    handleSave,
    handleAddTag,
    handleChangeType,
  };
}
