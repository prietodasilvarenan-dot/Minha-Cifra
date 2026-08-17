import ConfigButton from "@/src/components/config/ConfigButton";
import DeleteAccountModal from "@/src/components/modal/deleteAccountModal";
import { ArrowBackHeader } from "@/src/components/common/arrowBackHeader";
import { getConfigStyles } from "@/src/components/styles/stylesConfig";
import { useTheme } from "@/src/context/ThemeContext";
import { useUser } from "@/src/context/UserContext";
import { deleteUser } from "@/src/services/userService";
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
  const { user, signOut } = useUser();

  const styles = getConfigStyles(isDark);

  const [notifications, setNotifications] = useState(true);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [deletingAccount, setDeletingAccount] = useState(false);

  const ConfigsOptionsList: ConfigsOptions[] = [
    {
      text: "Outras opções",
      router: "/(management)/views/otherOpitions",
    },
    {
      text: "Alterar Dados",
      router: "/(management)/views/editPerfil",
    },
    {
      text: "Sobre o aplicativo",
      router: "/(management)/views/aboutApp",
    },
    {
      text: "Termos de uso",
      router: "/(management)/views/terms",
    },
    {
      text: "Política de Privacidade",
      router: "/(management)/views/policies",
    },
    {
      text: "Sobre nós",
      router: "/(management)/views/aboutUs",
    },
  ];

  const handleConfirmDeleteAccount = async (password: string) => {
    if (!user) {
      Alert.alert("Erro", "Usuário não encontrado.");
      return;
    }

    try {
      setDeletingAccount(true);

      await deleteUser(user.id, password);

      setDeleteModalVisible(false);

      signOut();

      Alert.alert("Conta excluída", "Sua conta foi excluída com sucesso.", [
        {
          text: "OK",
          onPress: () => {
            router.replace("/(auth)/signIn");
          },
        },
      ]);
    } catch (error: any) {
      const message =
        error?.response?.data?.error || "Não foi possível excluir sua conta.";

      Alert.alert("Erro", message);
    } finally {
      setDeletingAccount(false);
    }
  };

  const handleLogout = () => {
    Alert.alert("Sair", "Deseja sair da conta?", [
      {
        text: "Sair",
        onPress: () => {
          signOut();
          router.replace("/(auth)/signIn");
        },
      },
      {
        text: "Cancelar",
        style: "cancel",
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ArrowBackHeader title="Configurações" route="/(tabs)/perfil" />

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
        onPress={() => setDeleteModalVisible(true)}
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

      <DeleteAccountModal
        visible={deleteModalVisible}
        isDark={isDark}
        loading={deletingAccount}
        onConfirm={handleConfirmDeleteAccount}
        onCancel={() => setDeleteModalVisible(false)}
      />
    </SafeAreaView>
  );
}
