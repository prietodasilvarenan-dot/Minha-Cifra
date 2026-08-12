import { router } from "expo-router";
import User from "../model/User";
import { api } from "./api";

export const registerUser = async (user: User) => {
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

export const loginUser = async (user: User) => {
  try {
    const response = await api.post("/login", {
      email: user.getEmail(),
      password: user.getPassword(),
    });

    return response;
  } catch (error: any) {
    throw error;
  }
};
