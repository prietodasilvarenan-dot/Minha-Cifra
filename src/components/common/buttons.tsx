import React from "react";
import {
    Text,
    TouchableOpacity,
    useColorScheme,
} from "react-native";
import { getHomeStyles } from "../styles/stylesHome";
import { getSignStyles } from "../styles/stylesSign";

interface ButtonProps {
    onPress: () => void;
}

export const ButtonSignUp: React.FC<ButtonProps> = ({
    onPress,
}) => {
    const isDark = useColorScheme() === "dark";
    const styles = getSignStyles(isDark);

    return (
        <TouchableOpacity
            style={styles.buttonAuth}
            onPress={onPress}
        >
            <Text style={styles.textButtonAuth}>
                Cadastrar
            </Text>
        </TouchableOpacity>
    );
};

export const ButtonSignIn: React.FC<ButtonProps> = ({
    onPress,
}) => {
    const isDark = useColorScheme() === "dark";
    const styles = getSignStyles(isDark);

    return (
        <TouchableOpacity
            style={styles.buttonAuth}
            onPress={onPress}
        >
            <Text style={styles.textButtonAuth}>
                Entrar
            </Text>
        </TouchableOpacity>
    );
};

export const ButtonAjusteDespesas: React.FC<ButtonProps> = ({
    onPress,
}) => {
    const isDark = useColorScheme() === "dark";
    const styles = getHomeStyles(isDark);
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>
                Ajustar despesas
            </Text>
        </TouchableOpacity>
    );
};


export const ButtonAjusteSaldo: React.FC<ButtonProps> = ({
    onPress,
}) => {
    const isDark = useColorScheme() === "dark";
    const styles = getHomeStyles(isDark);
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>
                Ajustar saldo
            </Text>
        </TouchableOpacity>
    );
};