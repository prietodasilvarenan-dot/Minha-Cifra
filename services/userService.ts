import { router } from "expo-router";
import { useState } from "react";
import User from "./model/User";
import { api } from "./api";

export const handleSignUp = async (user: User) => {
    try {
        const response = await api.post("/register", {
            email: user.getEmail(),
            password: user.getPassword(),
        });

        if (response.status === 201) {
            alert("Usuário cadastrado com sucesso!");
            router.replace("/signIn");
        }
    } catch (error) {
        alert("Erro ao cadastrar usuário.");
    }
};
