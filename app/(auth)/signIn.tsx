import { DivisorLabel } from "@/src/components/common/divisor";
import { LinkCadastro } from "@/src/components/common/links";
import { loginUser } from "@/src/services/userService";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, Image, Text, View, useColorScheme } from "react-native";
import { EmailArea, PasswordArea } from "../../src/components/common/areas";
import { ButtonSignIn } from "../../src/components/common/buttons";
import { getSignStyles } from "../../src/components/styles/stylesSign";
import User from "../../src/model/User";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const colorScheme = useColorScheme();
    const isDark = colorScheme === "dark";
    const [focused, setFocused] = useState(false);
    const styles = getSignStyles(isDark);

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
        <View style={styles.container}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        Minha
                    </Text>
                    <Image
                        source={require("../../assets/images/logo_no_background.png")}
                        style={styles.logo}
                    />
                    <Text style={styles.title}>
                        ifra
                    </Text>
                </View>
                <View style={styles.card}>
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
                    <DivisorLabel />
                    <LinkCadastro
                        onPress={() => router.replace("/signUp")}
                    />
                </View>
            </View>
        </View>
    );
}