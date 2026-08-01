import { ThemedText } from "@/src/components/expo/themed-text";
import { getProfileStyles } from "@/src/components/styles/stylesProfile";
import { useTheme } from "@/src/context/ThemeContext";
import { router } from "expo-router";
import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PerfilScreen() {
  const { isDark } = useTheme();
  const styles = getProfileStyles(isDark);

  const user = {
    name: "Renan",
    email: "renan@gmail.com",
    password: "123987",
    tier: "Plano Gratuito",
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <ThemedText style={styles.title}>Meu Perfil</ThemedText>
          <Text style={styles.subtitle}>
            Gerencie suas informações pessoais
          </Text>
        </View>
        <TouchableOpacity
          style={styles.settingsButton}
          onPress={() => router.replace("/(management)/configuration")}
        >
          <Text style={styles.settingsText}>Configurações</Text>
        </TouchableOpacity>
        <View style={styles.profileCard}>
          <View style={styles.photo}>
            <Text style={styles.photoText}>Foto</Text>
          </View>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.email}>{user.email}</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Editar perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
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
            onPress={() => router.replace("/(management)/views/signature")}
          >
            <Text style={styles.planLabel}>Plano atual</Text>

            <Text style={styles.planValue}>{user.tier}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
