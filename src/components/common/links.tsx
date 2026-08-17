import React from "react";
import { Text, TouchableOpacity, View, useColorScheme } from "react-native";
import { useTheme } from "@/src/context/ThemeContext";

import { getSignStyles } from "../styles/stylesSign";

interface LinkLabelProps {
  onPress: () => void;
}

export const LinkTermos: React.FC<LinkLabelProps> = ({ onPress }) => {
  const { isDark } = useTheme();
  const styles = getSignStyles(isDark);

  return (
    <View style={styles.linkContainer}>
      <Text style={styles.label}>
        Ao criar sua conta, você concorda com nossos
      </Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.link}>TERMOS DE USO</Text>
      </TouchableOpacity>
      <Text style={styles.label}>&</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.link}>POLÍTICAS DE PRIVACIDADE</Text>
      </TouchableOpacity>
    </View>
  );
};

export const LinkPossui: React.FC<LinkLabelProps> = ({ onPress }) => {
  const { isDark } = useTheme();
  const styles = getSignStyles(isDark);

  return (
    <View style={styles.linkContainer}>
      <Text style={styles.label}>Já possui uma conta?</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.link}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
};

export const LinkCadastro: React.FC<LinkLabelProps> = ({ onPress }) => {
  const { isDark } = useTheme();
  const styles = getSignStyles(isDark);

  return (
    <View style={styles.linkContainer}>
      <Text style={styles.label}>Não possui uma conta?</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.link}>CADASTRE-SE</Text>
      </TouchableOpacity>
    </View>
  );
};
