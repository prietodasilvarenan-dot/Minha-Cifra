import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { getProfileStyles } from "@/src/components/styles/stylesProfile";
import { UserData } from "@/src/context/UserContext";

type ProfileCardProps = {
  isDark: boolean;
  user: UserData | null;
  onPickImage: () => void;
  onEditProfile: () => void;
};

export default function ProfileCard({
  isDark,
  user,
  onPickImage,
  onEditProfile,
}: ProfileCardProps) {
  const styles = getProfileStyles(isDark);

  return (
    <View style={styles.profileCard}>
      <TouchableOpacity onPress={onPickImage}>
        {user?.profileImage ? (
          <Image
            source={{ uri: user.profileImage }}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
        ) : (
          <View style={styles.photo}>
            <Text style={styles.photoText}>Adicionar foto</Text>
          </View>
        )}
      </TouchableOpacity>

      <Text style={styles.name}>{user?.name ?? "Usuário"}</Text>
      <Text style={styles.email}>{user?.email}</Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={onEditProfile} style={styles.button}>
          <Text style={styles.buttonText}>Editar perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPickImage} style={styles.button}>
          <Text style={styles.buttonText}>Alterar foto</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
