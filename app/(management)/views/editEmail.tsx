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

export default function EditEmailScreen() {
  const { isDark } = useTheme();
  const { user, updateUser } = useUser();
  const styles = getEditFieldStyles(isDark);
  const [email, setEmail] = useState(user?.email ?? "");

  const handleSave = () => {
    if (user) {
      updateUser({ ...user, email });
    }
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <ArrowBackHeader title="Email" route="/(management)/views/editPerfil" />

        <View style={styles.card}>
          <View style={styles.field}>
            <Text style={styles.label}>Seu e-mail</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholder="Digite seu e-mail"
              placeholderTextColor={isDark ? "#888" : "#999"}
            />
          </View>

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
