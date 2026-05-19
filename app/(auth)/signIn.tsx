import React, { useState } from "react";
import { Text, View, Alert } from "react-native";
import { styles } from "../../components/styles/stylesSign";
import { EmailArea, PasswordArea} from "../../components/ui/areas";
import { ButtonSignIn } from "../../components/ui/buttons";
import { api } from "../../services/api";
import User from "../../services/model/User";
import { useRouter, router } from "expo-router";
import { loginUser } from "@/services/userService";

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
