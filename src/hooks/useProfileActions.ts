import { useCallback } from "react";
import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";

import { useUser } from "@/src/context/UserContext";

export function useProfileActions() {
  const { updateProfileImage } = useUser();

  const handlePickImageAsync = useCallback(async () => {
    // 1. Solicita permissão para acessar a galeria
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert(
        "Permissão necessária",
        "É preciso permitir o acesso à galeria para alterar a foto de perfil.",
      );
      return;
    }

    // 2. Abre o seletor de imagens
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    // 3. Atualiza se a seleção não foi cancelada
    if (!result.canceled && result.assets?.[0]?.uri) {
      updateProfileImage(result.assets[0].uri);
    }
  }, [updateProfileImage]);

  const handleNavigateToConfiguration = useCallback(() => {
    router.push("/(management)/configuration");
  }, []);

  const handleEditProfile = useCallback(() => {
    router.replace("/(management)/views/editPerfil");
  }, []);

  return {
    handlePickImageAsync,
    handleNavigateToConfiguration,
    handleEditProfile,
  };
}
