import { HelloWave } from "@/src/components/expo/hello-wave";
import ParallaxScrollView from "@/src/components/expo/parallax-scroll-view";
import { ThemedText } from "@/src/components/expo/themed-text";
import { ThemedView } from "@/src/components/expo/themed-view";
import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import { Alert, TouchableOpacity, View } from "react-native";

export default function PerfilScreen() {
    const user = {
        name: "Renan",
        email: "renan@gmail.com",
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
                <Image source={{ uri: user.avatar }} />
            }>
                
            <ThemedView>
                <ThemedText type="title">Olá, {user.name}!</ThemedText>
                <HelloWave />
            </ThemedView>

            <ThemedView>
                <ThemedText type="subtitle">{user.email}</ThemedText>
                <View>
                    <ThemedText>{user.tier}</ThemedText>
                </View>
            </ThemedView>

            <View />

            <ThemedText type="defaultSemiBold">Minha Conta</ThemedText>
            
            <ThemedView>
                <TouchableOpacity onPress={() => Alert.alert("Aviso", "Editar Perfil em desenvolvimento.")}>
                    <ThemedText type="default">✏️ Dados Pessoais</ThemedText>
                    <ThemedText>❯</ThemedText>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Alert.alert("Aviso", "Configurações de metas em desenvolvimento.")}>
                    <ThemedText type="default">🎯 Minhas Metas Financeiras</ThemedText>
                    <ThemedText>❯</ThemedText>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.push("/calculator")}>
                    <ThemedText type="default">💼 Planejamento Fiscal (Impostos)</ThemedText>
                    <ThemedText>❯</ThemedText>
                </TouchableOpacity>
            </ThemedView>

            <ThemedText type="defaultSemiBold">Preferências</ThemedText>
            
            <ThemedView>
                <TouchableOpacity onPress={() => Alert.alert("Aviso", "Notificações em desenvolvimento.")}>
                    <ThemedText type="default">🔔 Notificações e Alertas</ThemedText>
                    <ThemedText>❯</ThemedText>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => Alert.alert("Aviso", "Segurança em desenvolvimento.")}>
                    <ThemedText type="default">🔒 Segurança e Senha</ThemedText>
                    <ThemedText>❯</ThemedText>
                </TouchableOpacity>
            </ThemedView>

            <TouchableOpacity onPress={handleLogout}>
                <ThemedText>🚪 Sair da Conta</ThemedText>
            </TouchableOpacity>

        </ParallaxScrollView>
    );
}