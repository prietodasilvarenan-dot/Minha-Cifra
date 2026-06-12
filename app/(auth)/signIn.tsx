import { loginUser } from "@/src/services/userService";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, View, useColorScheme } from "react-native";
import { EmailArea, PasswordArea } from "../../src/components/common/areas";
import { ButtonSignIn } from "../../src/components/common/buttons";
import { getStyles } from "../../src/components/styles/stylesSign";
import User from "../../src/model/User";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const colorScheme = useColorScheme();
    const isDark = colorScheme === "dark";
    const [focused, setFocused] = useState(false);
    const styles = getStyles(isDark);

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert("Erro", "Preencha todos os campos.");
            return;
        }

        try {
            const userCredentials = new User(email, password);

            const response = await loginUser(userCredentials);

            if (response.status === 200) {
                Alert.alert("Sucesso", "Seja bem vindo!");
                router.replace("/(tabs)");
            }
        } catch (error: any) {
            const errorMsg =
                error.response?.data?.error ||
                "Erro ao conectar com o servidor.";

            Alert.alert("Erro na Autenticação", errorMsg);
        }
    };

    return (
        <LinearGradient
            colors={["#00020f", "#001535", "#002561"]}
            style={{ flex: 1 }}
        >
            <View style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.title}>
                            Minha Cifra
                        </Text>
                    </View>
                    <EmailArea
                        value={email}
                        onChangeText={setEmail}
                    />

                    <PasswordArea
                        value={password}
                        onChangeText={setPassword}
                    />

                    <ButtonSignIn
                        onPress={handleLogin}
                    />

                </View>
            </View>
        </LinearGradient>
    );
}