import { useCallback } from "react";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";

import { useUser } from "@/src/context/UserContext";

export function useProfileActions() {
  const { updateProfileImage } = useUser();

  const handlePickImageAsync = useCallback(async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      alert("É necessária a permissão para acessar suas fotos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
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
