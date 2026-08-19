import { useCallback } from "react";
import { Alert } from "react-native";
import { router } from "expo-router";

import { useUser } from "@/src/context/UserContext";
import { deleteUser } from "@/src/services/userService";

export function useConfigurationActions({
  setDeleteModalVisible,
  setDeletingAccount,
}: {
  setDeleteModalVisible: (value: boolean) => void;
  setDeletingAccount: (value: boolean) => void;
}) {
  const { user, signOut } = useUser();

  const handleConfirmDeleteAccount = useCallback(
    async (password: string) => {
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
    },
    [setDeleteModalVisible, setDeletingAccount, signOut, user],
  );

  const handleLogout = useCallback(() => {
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
  }, [signOut]);

  return {
    handleConfirmDeleteAccount,
    handleLogout,
  };
}
