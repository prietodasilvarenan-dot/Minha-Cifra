import { ArrowBackHeader } from "@/src/components/common/arrowBackHeader";
import { getEditFieldStyles } from "@/src/components/styles/stylesEditField";
import { useTheme } from "@/src/context/ThemeContext";
import { useUser } from "@/src/context/UserContext";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EditPasswordScreen() {
  const { isDark } = useTheme();
  const { user, updateUser } = useUser();
  const styles = getEditFieldStyles(isDark);
  const [password, setPassword] = useState("");

  const handleSave = () => {
    if (user) {
      updateUser({ ...user, password });
    }
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <ArrowBackHeader title="Senha" route="/(management)/views/editPerfil" />

        <View style={styles.card}>
          <View style={styles.field}>
            <Text style={styles.label}>Nova senha</Text>
            <TextInput
              style={styles.inputPassword}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              placeholder="Digite uma nova senha"
              placeholderTextColor={isDark ? "#888" : "#999"}
            />
          </View>

          <Text style={styles.hint}>
            Sua senha será atualizada após confirmar.
          </Text>

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
