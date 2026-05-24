import React from "react";
import { SafeAreaView, TextInput, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            <View>
                <View>
                    Ajustar saldo
                    Saldo: <TextInput placeholder="ex: 1800.00"></TextInput>

                    <View>
                        Itens atuais
                    </View>
                    <TouchableOpacity>
                        Adicionar item
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
