import { ArrowBackHeader } from "@/src/components/common/arrowBackHeader";
import Photo from "@/src/components/profile/Photo";
import { getEditProfileStyles } from "@/src/components/styles/stylesEditProfile";
import { useTheme } from "@/src/context/ThemeContext";
import { useUser } from "@/src/context/UserContext";
import { useProfileActions } from "@/src/hooks/useProfileActions";
import React from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EditProfileScreen() {
  const { isDark } = useTheme();
  const { user } = useUser();
  const styles = getEditProfileStyles(isDark);
  const { handlePickImageAsync } = useProfileActions();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <ArrowBackHeader title="Editar perfil" route="/(tabs)/perfil" />

        <View style={styles.card}>
          <View style={styles.photoSection}>
            <Photo
              isDark={isDark}
              user={user}
              onPickImage={handlePickImageAsync}
              size={100}
              fallbackText={user?.name?.[0] ?? "U"}
              showPlaceholderLabel={false}
            />

            <TouchableOpacity
              style={styles.photoAction}
              onPress={handlePickImageAsync}
            >
              <Text style={styles.photoActionText}>Alterar foto</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.formSection}>
            <View style={styles.field}>
              <Text style={styles.label}>Nome</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                placeholderTextColor={isDark ? "#888" : "#999"}
                value={user?.name ?? ""}
              />
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite seu e-mail"
                placeholderTextColor={isDark ? "#888" : "#999"}
                keyboardType="email-address"
                autoCapitalize="none"
                value={user?.email ?? ""}
              />
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Senha</Text>
              <TextInput
                style={styles.input}
                placeholder="********"
                placeholderTextColor={isDark ? "#888" : "#999"}
                secureTextEntry
              />
            </View>
          </View>

          <TouchableOpacity style={styles.primaryButton} activeOpacity={0.8}>
            <Text style={styles.primaryButtonText}>Salvar Alterações</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
