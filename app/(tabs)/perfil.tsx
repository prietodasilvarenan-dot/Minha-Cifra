import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import { getProfileStyles } from "@/src/components/styles/stylesProfile";
import { useTheme } from "@/src/context/ThemeContext";
import { Header } from "@/src/components/common/header";
import { useUser } from "@/src/context/UserContext";

export default function PerfilScreen() {
  const { isDark } = useTheme();
  const { user, updateProfileImage } = useUser();
  const styles = getProfileStyles(isDark);

  const pickerImageAsync = async () => {
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
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Header
          title="Meu Perfil"
          subtitle="Gerencie suas informações pessoais"
        />

        <TouchableOpacity
          style={styles.settingsButton}
          onPress={() => router.push("/(management)/configuration")}
        >
          <Text style={styles.settingsText}>Configurações</Text>
        </TouchableOpacity>

        <View style={styles.profileCard}>
          <TouchableOpacity onPress={pickerImageAsync}>
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
            <TouchableOpacity
              onPress={() => router.replace("/(management)/views/editPerfil")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Editar perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={pickerImageAsync} style={styles.button}>
              <Text style={styles.buttonText}>Alterar foto</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Informações da conta</Text>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Email</Text>
            <Text style={styles.infoValue}>{user?.email}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Senha</Text>
            <Text style={styles.infoValue}>••••••••</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
