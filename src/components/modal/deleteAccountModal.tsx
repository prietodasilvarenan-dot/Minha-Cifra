import React, { useState } from "react";
import {
  ActivityIndicator,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface DeleteAccountModalProps {
  visible: boolean;
  isDark: boolean;
  loading: boolean;
  onConfirm: (password: string) => void;
  onCancel: () => void;
}

export default function DeleteAccountModal({
  visible,
  isDark,
  loading,
  onConfirm,
  onCancel,
}: DeleteAccountModalProps) {
  const [password, setPassword] = useState("");

  const handleConfirm = () => {
    if (!password.trim()) {
      return;
    }

    onConfirm(password);

    setPassword("");
  };

  const handleCancel = () => {
    setPassword("");
    onCancel();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={handleCancel}
    >
      <View style={styles.overlay}>
        <View
          style={[
            styles.container,
            {
              backgroundColor: isDark ? "#1E1E1E" : "#FFFFFF",
            },
          ]}
        >
          <Text
            style={[
              styles.title,
              {
                color: isDark ? "#FFFFFF" : "#000000",
              },
            ]}
          >
            Confirmar exclusão
          </Text>

          <Text
            style={[
              styles.description,
              {
                color: isDark ? "#CCCCCC" : "#555555",
              },
            ]}
          >
            Digite sua senha para confirmar a exclusão permanente da sua conta.
          </Text>

          <TextInput
            style={[
              styles.input,
              {
                color: isDark ? "#FFFFFF" : "#000000",
                borderColor: isDark ? "#555555" : "#CCCCCC",
              },
            ]}
            placeholder="Senha"
            placeholderTextColor={isDark ? "#999999" : "#888888"}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            editable={!loading}
          />

          <View style={styles.buttons}>
            <TouchableOpacity
              onPress={handleCancel}
              style={styles.cancelButton}
              disabled={loading}
            >
              <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleConfirm}
              style={styles.deleteButton}
              disabled={loading || !password.trim()}
            >
              {loading ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <Text style={styles.deleteText}>Excluir</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = {
  overlay: {
    flex: 1,
    justifyContent: "center" as const,
    alignItems: "center" as const,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 20,
  },

  container: {
    width: "100%" as const,
    maxWidth: 400,
    borderRadius: 12,
    padding: 24,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold" as const,
    marginBottom: 10,
  },

  description: {
    fontSize: 15,
    lineHeight: 21,
    marginBottom: 20,
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 14,
    fontSize: 16,
    marginBottom: 20,
  },

  buttons: {
    flexDirection: "row" as const,
    justifyContent: "flex-end" as const,
    gap: 10,
  },

  cancelButton: {
    paddingVertical: 12,
    paddingHorizontal: 18,
  },

  cancelText: {
    color: "#777777",
    fontSize: 15,
    fontWeight: "600" as const,
  },

  deleteButton: {
    minWidth: 90,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 8,
    backgroundColor: "#D32F2F",
    alignItems: "center" as const,
  },

  deleteText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600" as const,
  },
};
