import ConfigButton from "@/src/components/config/ConfigButton";
import { getConfigStyles } from "@/src/components/styles/stylesConfig";
import { useTheme } from "@/src/context/ThemeContext";
import { Href, router } from "expo-router";
import React, { useState } from "react";
import { Alert, Switch, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ConfigsOptions {
  text: string;
  router: Href;
}

export default function SettingsScreen() {
  const { isDark, toggleTheme } = useTheme();

  const styles = getConfigStyles(isDark);

  const [notifications, setNotifications] = useState(true);

  const ConfigsOptionsList: ConfigsOptions[] = [
    { text: "Outras opções", router: "/" },
    { text: "Alterar Dados", router: "/" },
    { text: "Gerenciar Assinaturas", router: "/(management)/views/signature" },
    { text: "Sobre o aplicativo", router: "/(management)/views/aboutApp" },
    { text: "Termos de uso", router: "/(management)/views/terms" },
    { text: "Política de Privacidade", router: "/(management)/views/policies" },
    { text: "Sobre nós", router: "/(management)/views/aboutUs" },
  ];

  const handleDeleteAccount = () => {
    Alert.alert(
      "Excluir a conta",
      "Deseja Excluir sua conta permanentemente?",
      [
        { text: "Excluir", onPress: () => router.replace("/signUp") },
        { text: "Cancelar" },
      ],
    );
  };

  const handleLogout = () => {
    Alert.alert("Sair", "Deseja sair da conta?", [
      { text: "Sair", onPress: () => router.replace("/(auth)/signIn") },
      { text: "Cancelar" },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        <TouchableOpacity onPress={() => router.replace("/(tabs)/perfil")}>
          <Text>⟵</Text>
        </TouchableOpacity>
        Configurações
      </Text>

      <View style={styles.item}>
        <Text style={styles.text}>Modo escuro</Text>

        <Switch value={isDark} onValueChange={toggleTheme} />
      </View>

      <View style={styles.item}>
        <Text style={styles.text}>Notificações</Text>

        <Switch value={notifications} onValueChange={setNotifications} />
      </View>

      {ConfigsOptionsList.map((item) => (
        <ConfigButton
          key={item.text}
          text={item.text}
          onPress={() => router.replace(item.router)}
        />
      ))}

      <TouchableOpacity
        onPress={handleDeleteAccount}
        style={[styles.button, styles.logout]}
      >
        <Text style={styles.logoutText}>Excluir conta</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleLogout}
        style={[styles.button, styles.logout]}
      >
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
