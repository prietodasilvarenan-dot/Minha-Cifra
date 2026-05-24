import { HelloWave } from "@/src/components/expo/hello-wave";
import ParallaxScrollView from "@/src/components/expo/parallax-scroll-view";
import { ThemedText } from "@/src/components/expo/themed-text";
import { ThemedView } from "@/src/components/expo/themed-view";
import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import { Alert, StyleSheet, TouchableOpacity, View } from "react-native";

export default function PerfilScreen() {
    const user = {
        name: "Renan",
        email: "renan@email.com",
        tier: "Plano Gratuito",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80"
    };

    const handleLogout = () => {
        Alert.alert("Sair", "Deseja realmente sair do aplicativo?", [
            { text: "Cancelar", style: "cancel" },
            { 
                text: "Sair", 
                style: "destructive",
                onPress: () => router.replace("/signIn")
            }
        ]);
    };

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
            headerImage={
                <Image
                    source={{ uri: user.avatar }}
                    style={styles.headerAvatar}
                />
            }>
            
            {/* Bloco de Boas-Vindas */}
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Olá, {user.name}!</ThemedText>
                <HelloWave />
            </ThemedView>

            <ThemedView style={styles.subtitleContainer}>
                <ThemedText type="subtitle" style={styles.emailText}>{user.email}</ThemedText>
                <View style={styles.badge}>
                    <ThemedText style={styles.badgeText}>{user.tier}</ThemedText>
                </View>
            </ThemedView>

            <View style={styles.divider} />

            <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>Minha Conta</ThemedText>
            
            <ThemedView style={styles.menuContainer}>
                <TouchableOpacity style={styles.menuItem} onPress={() => Alert.alert("Aviso", "Editar Perfil em desenvolvimento.")}>
                    <ThemedText type="default">✏️ Dados Pessoais</ThemedText>
                    <ThemedText style={styles.arrow}>❯</ThemedText>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem} onPress={() => Alert.alert("Aviso", "Configurações de metas em desenvolvimento.")}>
                    <ThemedText type="default">🎯 Minhas Metas Financeiras</ThemedText>
                    <ThemedText style={styles.arrow}>❯</ThemedText>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem} onPress={() => router.push("/calculator")}>
                    <ThemedText type="default">💼 Planejamento Fiscal (Impostos)</ThemedText>
                    <ThemedText style={styles.arrow}>❯</ThemedText>
                </TouchableOpacity>
            </ThemedView>

            <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>Preferências</ThemedText>
            
            <ThemedView style={styles.menuContainer}>
                <TouchableOpacity style={styles.menuItem} onPress={() => Alert.alert("Aviso", "Notificações em desenvolvimento.")}>
                    <ThemedText type="default">🔔 Notificações e Alertas</ThemedText>
                    <ThemedText style={styles.arrow}>❯</ThemedText>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.menuItem} onPress={() => Alert.alert("Aviso", "Segurança em desenvolvimento.")}>
                    <ThemedText type="default">🔒 Segurança e Senha</ThemedText>
                    <ThemedText style={styles.arrow}>❯</ThemedText>
                </TouchableOpacity>
            </ThemedView>

            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <ThemedText style={styles.logoutText}>🚪 Sair da Conta</ThemedText>
            </TouchableOpacity>

        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        marginTop: 10,
    },
    subtitleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 5,
    },
    headerAvatar: {
        height: 140,
        width: 140,
        borderRadius: 70,
        bottom: -30,
        left: 20,
        position: "absolute",
        borderWidth: 4,
        borderColor: "#FFFFFF",
    },
    emailText: {
        fontSize: 14,
        opacity: 0.7,
    },
    badge: {
        backgroundColor: "#007AFF",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
    },
    badgeText: {
        color: "#FFFFFF",
        fontSize: 12,
        fontWeight: "bold",
    },
    divider: {
        height: 1,
        backgroundColor: "#E9ECEF",
        marginVertical: 20,
    },
    sectionTitle: {
        fontSize: 16,
        marginBottom: 10,
        opacity: 0.8,
    },
    menuContainer: {
        borderRadius: 12,
        overflow: "hidden",
        marginBottom: 20,
        backgroundColor: "rgba(0,0,0,0.02)",
    },
    menuItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0,0,0,0.05)",
    },
    arrow: {
        fontSize: 14,
        color: "#6C757D",
    },
    logoutButton: {
        backgroundColor: "#FFF0F1",
        borderColor: "#FFE0E2",
        borderWidth: 1,
        borderRadius: 12,
        paddingVertical: 15,
        alignItems: "center",
        marginTop: 10,
        marginBottom: 40,
    },
    logoutText: {
        color: "#DC3545",
        fontWeight: "bold",
    },
});