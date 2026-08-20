import React, { useEffect, useState } from "react";
import {
  Image,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

import { getProfileStyles } from "@/src/components/styles/stylesProfile";
import { UserData } from "@/src/context/UserContext";

type PhotoProps = {
  isDark: boolean;
  user: UserData | null;
  onPickImage: () => void;
  size?: number;
  containerStyle?: StyleProp<ViewStyle>;
  placeholderStyle?: StyleProp<ViewStyle>;
  placeholderTextStyle?: StyleProp<TextStyle>;
  fallbackText?: string;
  showPlaceholderLabel?: boolean;
  placeholderLabel?: string;
};

export default function Photo({
  isDark,
  user,
  onPickImage,
  size = 100,
  containerStyle,
  placeholderStyle,
  placeholderTextStyle,
  fallbackText = "U",
  showPlaceholderLabel = true,
  placeholderLabel = "Adicionar foto",
}: PhotoProps) {
  const styles = getProfileStyles(isDark);
  const [imageLoadError, setImageLoadError] = useState(false);

  useEffect(() => {
    setImageLoadError(false);
  }, [user?.profileImage]);

  const handleImageError = () => {
    console.warn("Erro ao carregar a imagem");
    setImageLoadError(true);
  };

  return (
    <TouchableOpacity onPress={onPickImage} style={containerStyle}>
      {user?.profileImage && !imageLoadError ? (
        <Image
          source={{ uri: user.profileImage }}
          style={{ width: size, height: size, borderRadius: size / 2 }}
          onError={handleImageError}
        />
      ) : (
        <View style={placeholderStyle ?? styles.photo}>
          <Text style={placeholderTextStyle ?? styles.photoText}>
            {placeholderLabel}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
}
