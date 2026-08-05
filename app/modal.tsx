import { ThemedText } from "@/src/components/expo/themed-text";
import { ThemedView } from "@/src/components/expo/themed-view";
import { router } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function ModalScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Bem-Vindo ao MinhaCifra!</ThemedText>

      <ThemedText type="subtitle">
        Entre ou crie uma conta para continuar.
      </ThemedText>
      <TouchableOpacity onPress={() => router.push("/(auth)/signIn")}>
        <ThemedText>Entrar</ThemedText>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/(auth)/signUp")}>
        <ThemedText>Cadastrar</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
