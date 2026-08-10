import { ThemedText } from "@/src/components/expo/themed-text";
import { getProfileStyles } from "@/src/components/styles/stylesProfile";
import { useTheme } from "@/src/context/ThemeContext";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "@/src/components/common/header";

export default function PerfilScreen() {
  const { isDark } = useTheme();
  const styles = getProfileStyles(isDark);

  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined,
  );

  const user = {
    name: "Renan",
    email: "renan@gmail.com",
    password: "123987",
    tier: "Plano Gratuito",
  };

  const pickerImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      console.log(result);
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
            {selectedImage ? (
              <Image
                source={{ uri: selectedImage }}
                style={{ width: 100, height: 100, borderRadius: 50 }}
              />
            ) : (
              <Text style={styles.photo} />
            )}
          </TouchableOpacity>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.email}>{user.email}</Text>
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
            <Text style={styles.infoValue}>{user.email}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Senha</Text>

            <Text style={styles.infoValue}>••••••••</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.planCard}
            onPress={() => router.push("/(management)/views/signature")}
          >
            <Text style={styles.planLabel}>Plano atual</Text>

            <Text style={styles.planValue}>{user.tier}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
