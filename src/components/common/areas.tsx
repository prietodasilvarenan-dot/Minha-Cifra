import { useState } from "react";
import { TextInput } from "react-native";
import { styles } from "../styles/stylesSign";

interface AreaProps {
    value: string;
    onChangeText: (text: string) => void;
}

export const EmailArea: React.FC<AreaProps> = ({ value, onChangeText }) => {
    return (
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder="Digite seu Email"
            keyboardType="email-address"
        />
    );
};

export const PasswordArea: React.FC<AreaProps> = ({ value, onChangeText }) => {
    return (
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder="Digite sua Senha"
            secureTextEntry
        />
    );
};

export const ConfirmPasswordArea: React.FC<AreaProps> = ({
    value,
    onChangeText,
}) => {
    return (
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder="Confirme sua Senha"
            secureTextEntry
        />
    );
};
