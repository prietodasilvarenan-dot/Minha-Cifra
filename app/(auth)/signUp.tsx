import { DivisorLabel } from "@/src/components/common/divisor";
import { LinkPossui, LinkTermos } from "@/src/components/common/links";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Image, Text, View, useColorScheme } from "react-native";
import {
    ConfirmPasswordArea,
    EmailArea,
    PasswordArea
} from "../../src/components/common/areas";
import { ButtonSignUp } from "../../src/components/common/buttons";
import { getSignStyles } from "../../src/components/styles/stylesSign";
import User from "../../src/model/User";
import { api } from "../../src/services/api";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const colorScheme = useColorScheme();
    const isDark = colorScheme === "dark";

    const styles = getSignStyles(isDark);

    const router = useRouter();

    const handleRegister = async () => {
        if (!email || !password || !confirmPassword) {
            Alert.alert("Erro", "Preencha todos os campos!");
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert("Erro", "Senhas não coincidem!");
            return;
        }

        if (password.length < 6) {
            Alert.alert(
                "Erro",
                "Senha muito curta! Minimo de 6 caracteres."
            );
            return;
        }

        try {
            const newUser = new User(email, password);

            const response = await api.post("/register", {
                email: newUser.getEmail(),
                password: newUser.getPassword(),
            });

            if (response.status === 201) {
                Alert.alert("Sucesso", "Usuário cadastrado!");
                router.replace("/signIn");
            }
        } catch (error: any) {
            const msg =
                error.response?.data?.error ||
                "Erro ao conectar com o servidor";

            Alert.alert("Erro no Cadastro", msg);
        }
    };

    return (
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

                <ConfirmPasswordArea
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />

                <ButtonSignUp onPress={handleRegister} />

                <LinkTermos
                    onPress={() => router.replace("/(tabs)")}
                />
                <DivisorLabel />
                <LinkPossui
                    onPress={() => router.replace("/signIn")}
                />
            </View>
        </View>
    );
}