import { ThemedText } from "@/src/components/expo/themed-text";
import { ThemedView } from "@/src/components/expo/themed-view";
import { router } from "expo-router";
import React from "react";
//import { Alert, TextInput, TouchableOpacity, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function PerfilScreen() {
    const user = {
        name: "Renan",
        email: "renan@gmail.com",
        password: "123987",
        tier: "Plano Gratuito",
    };

    return (
        <SafeAreaView>

            <ThemedView>
                <TouchableOpacity onPress={() => router.replace("/(management)/configuration")}>Configurações</TouchableOpacity>
                <ThemedText>foto</ThemedText>
                <ThemedText>{user.name}</ThemedText>
                <TouchableOpacity>Editar perfil</TouchableOpacity>
            </ThemedView>

            <ThemedView>
                <ThemedText>Plano: {user.tier}</ThemedText>
                <ThemedText>Email: {user.email}</ThemedText>
                <ThemedText>Senha: {user.password}</ThemedText>
            </ThemedView>

        </SafeAreaView >
    );
}