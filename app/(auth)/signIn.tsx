import { loginUser } from "@/src/services/userService";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, View } from "react-native";
import { EmailArea, PasswordArea } from "../../src/components/common/areas";
import { ButtonSignIn } from "../../src/components/common/buttons";
import { styles } from "../../src/components/styles/stylesSign";
import User from "../../src/model/User";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert("Erro", "Preencha todos os campos.");
            return;
        }

        try {
            const userCredentials = new User(email, password);

            const response = await loginUser(userCredentials);

            if(response.status === 200) {
                Alert.alert("Sucesso", "Seja bem vindo!");
                router.replace("/(tabs)");
            }
        }
        catch(error: any) {
            const errorMsg = error.response?.data?.error || "Erro ao conectar com o servidor.";
            Alert.alert("Erro na Autenticação", errorMsg);
        }
    };

    return (
        <View style={styles.container}>
            <Text>Minha Cifra</Text>
            <EmailArea value={email} onChangeText={setEmail} />
            <PasswordArea value={password} onChangeText={setPassword} />

            <ButtonSignIn onPress={handleLogin} />
        </View>
    );
}
