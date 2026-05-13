import { router } from "expo-router";
import { useState } from "react";
import User from "./model/User";
import { api } from "./api";

export const handleSignUp = async () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    try {
        const newUser = new User(email, password);

        const response = await api.post("/register", {
            email: newUser.getEmail(),
            password: newUser.getPassword(),
        });

        if (response.status === 201) {
            alert("Usuário cadastrado com sucesso!");
            router.replace("/signIn");
        }
    } catch (error) {
        alert("Erro ao cadastrar usuário.");
    }
};
