import React from "react";
import {
    Text,
    TouchableOpacity,
    useColorScheme,
} from "react-native";
import { getStyles } from "../styles/stylesSign";

interface ButtonProps {
    onPress: () => void;
}

export const ButtonSignUp: React.FC<ButtonProps> = ({
    onPress,
}) => {
    const isDark = useColorScheme() === "dark";
    const styles = getStyles(isDark);

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
    const styles = getStyles(isDark);

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