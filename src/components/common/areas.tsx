import React, { useState } from "react";
import {
    TextInput,
    useColorScheme,
} from "react-native";
import { getStyles } from "../styles/stylesSign";


interface AreaProps {
    value: string;
    onChangeText: (text: string) => void;
}

export const EmailArea: React.FC<AreaProps> = ({
    value,
    onChangeText,
}) => {
    const isDark = useColorScheme() === "dark";
    const styles = getStyles(isDark);
    const [focused, setFocused] = useState(false);

    return (
        <TextInput
        underlineColorAndroid="transparent"
            style={[
                styles.input,
                focused && styles.inputFocused,
            ]}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            value={value}
            onChangeText={onChangeText}
            placeholder="Digite seu Email"
            placeholderTextColor={
                isDark ? "#888" : "#999"
            }
            keyboardType="email-address"
        />
    );
};

export const PasswordArea: React.FC<AreaProps> = ({
    value,
    onChangeText,
}) => {
    const isDark = useColorScheme() === "dark";
    const styles = getStyles(isDark);
    const [focused, setFocused] = useState(false);

    return (
        <TextInput
        underlineColorAndroid="transparent"
            style={[
                styles.input,
                focused && styles.inputFocused,
            ]}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            value={value}
            onChangeText={onChangeText}
            placeholder="Digite sua Senha"
            placeholderTextColor={
                isDark ? "#888" : "#999"
            }
            secureTextEntry
        />
    );
};

export const ConfirmPasswordArea: React.FC<AreaProps> = ({
    value,
    onChangeText,
}) => {
    const isDark = useColorScheme() === "dark";
    const styles = getStyles(isDark);
    const [focused, setFocused] = useState(false);

    return (
        <TextInput
        underlineColorAndroid="transparent"
            style={[
                styles.input,
                focused && styles.inputFocused,
            ]}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            value={value}
            onChangeText={onChangeText}
            placeholder="Confirme sua Senha"
            placeholderTextColor={
                isDark ? "#888" : "#999"
            }
            secureTextEntry
        />
    );
};