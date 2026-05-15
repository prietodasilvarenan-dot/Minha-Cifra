import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
} from "react-native";

interface CardProps {}

export const CardHome: React.FC<CardProps> = () => {
    return (
        <View>
            <View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <View />
                    <Text>Saldo geral: </Text>
                    <Text>R$9.999,00</Text>
                </View>
            </View>

            <View />

            <View>
                <View>
                    <Text>Carteira principal</Text>
                </View>
                <Text>R$9.999,00</Text>
            </View>

            <View>
                <View>
                    <Text>Investimentos</Text>
                </View>
                <Text>R$00,00</Text>
            </View>

            <TouchableOpacity>
                <Text>Ajustar saldo</Text>
            </TouchableOpacity>
        </View>
    );
};
