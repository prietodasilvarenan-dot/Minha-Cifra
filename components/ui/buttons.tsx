import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/stylesSign";

interface ButtonProps {
    onPress: () => void;
}

export const ButtonSignUp: React.FC<ButtonProps> = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.buttonAuth} onPress={onPress}>
            <Text style={styles.textButtonAuth}>Cadastrar</Text>
        </TouchableOpacity>
    );
};

export const ButtonSignIn: React.FC<ButtonProps> = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.buttonAuth} onPress={onPress}>
            <Text style={styles.textButtonAuth}>Entrar</Text>
        </TouchableOpacity>
    );
};
