import { getConfigStyles } from "@/src/components/styles/stylesConfig";
import React, { useState } from "react";
import {
    Switch,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen() {
    const isDark = useColorScheme() === "dark";
    const styles = getConfigStyles(isDark);

    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState(true);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Configurações
            </Text>

            <View style={styles.item}>
                <Text style={styles.text}>
                    Modo escuro
                </Text>

                <Switch
                    value={darkMode}
                    onValueChange={setDarkMode}
                />
            </View>

            <View style={styles.item}>
                <Text style={styles.text}>
                    Notificações
                </Text>

                <Switch
                    value={notifications}
                    onValueChange={setNotifications}
                />
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    Outras opções
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    Alterar Dados
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    Gerenciar Assinaturas
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    Sobre o aplicativo
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    Termos de uso
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    Política de Privacidade
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[
                    styles.button,
                    styles.logout,
                ]}
            >
                <Text style={styles.logoutText}>
                    Excluir conta
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[
                    styles.button,
                    styles.logout,
                ]}
            >
                <Text style={styles.logoutText}>
                    Sair
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}