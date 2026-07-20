import { ThemedText } from "@/src/components/expo/themed-text";
import { ThemedView } from "@/src/components/expo/themed-view";
import { router } from "expo-router";
import React from "react";
import { Alert, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
        <SafeAreaView>


            <ThemedView>
                <ThemedText type="title">Olá, {user.name}!</ThemedText>
            </ThemedView>

            <ThemedView>
                <ThemedText type="subtitle">{user.email}</ThemedText>
            </ThemedView>



            <ThemedText type="defaultSemiBold">Minha Conta</ThemedText>
            <ThemedView>
                <TouchableOpacity onPress={() => Alert.alert("Aviso", "Editar Perfil em desenvolvimento.")}>
                    <ThemedText type="default">Dados Pessoais</ThemedText>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Alert.alert("Aviso", "Configurações de metas em desenvolvimento.")}>
                    <ThemedText type="default">Minhas Metas Financeiras</ThemedText>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.push("/calculator")}>
                    <ThemedText type="default">Planejamento Fiscal (Impostos)</ThemedText>
                </TouchableOpacity>
            </ThemedView>

            <ThemedText type="defaultSemiBold">Preferências</ThemedText>
            <ThemedView>
                <TouchableOpacity onPress={() => Alert.alert("Aviso", "Notificações em desenvolvimento.")}>
                    <ThemedText type="default">Notificações e Alertas</ThemedText>
                </TouchableOpacity>



                <TouchableOpacity onPress={() => Alert.alert("Aviso", "Segurança em desenvolvimento.")}>
                    <ThemedText type="default">Segurança e Senha</ThemedText>
                </TouchableOpacity>
            </ThemedView>

            <TouchableOpacity onPress={handleLogout}>
                <ThemedText>Sair da Conta</ThemedText>
            </TouchableOpacity>

        </SafeAreaView >
    );
}