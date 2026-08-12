import React, { useState } from "react";
import { Alert, View, useColorScheme } from "react-native";
import { router } from "expo-router";
import LoginForm from "@/src/components/sign/LoginForm";
import LogoHeader from "@/src/components/sign/LogoHeader";
import { getSignStyles } from "@/src/components/styles/stylesSign";
import User from "@/src/model/User";
import { useUser } from "@/src/context/UserContext"; // Importe o Hook

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useUser(); // Hook do contexto

  const isDark = useColorScheme() === "dark";
  const styles = getSignStyles(isDark);

  async function handleLogin() {
    if (!email || !password) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    try {
      const userCredentials = new User(email, password);

      await signIn(userCredentials);

      Alert.alert("Sucesso", "Seja bem vindo!");
      router.replace("/(tabs)");
    } catch (error: any) {
      const errorMsg =
        error.response?.data?.error ?? "Erro ao conectar com o servidor.";

      Alert.alert("Erro na Autenticação", errorMsg);
    }
  }

  return (
    <View style={styles.container}>
      <LogoHeader isDark={isDark} />
      <LoginForm
        isDark={isDark}
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        onLogin={handleLogin}
      />
    </View>
  );
}
