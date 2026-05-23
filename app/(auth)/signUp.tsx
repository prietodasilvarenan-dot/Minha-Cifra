import React, { useState } from "react";
import { Text, View, Alert } from "react-native";
import { styles } from "../../src/components/styles/stylesSign";
import { ConfirmPasswordArea, EmailArea, PasswordArea } from "../../src/components/ui/areas";
import { ButtonSignUp } from "../../src/components/ui/buttons";
import { api } from "../../src/services/api";
import User from "../../src/model/User";
import { useRouter } from "expo-router";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

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
            Alert.alert("Erro", "Senha muito curta! Minimo de 6 caracteres.");
            return;
        }
        try {
            const newUser = new User(email, password);

            const response = await api.post("/register", {
                email: newUser.getEmail(),
                password: newUser.getPassword(),
            });

            if (response.status === 201) {
                Alert.alert("Sucesso", "Usuário casdastrado!");
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
            <Text>Minha Cifra</Text>
            <EmailArea value={email} onChangeText={setEmail} />
            <PasswordArea value={password} onChangeText={setPassword} />
            <ConfirmPasswordArea
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />

            <ButtonSignUp onPress={handleRegister} />
        </View>
    );
}
