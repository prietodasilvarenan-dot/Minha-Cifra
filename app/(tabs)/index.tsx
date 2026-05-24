import { CardHome } from "@/src/components/common/cards";
import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            <View>
                <View>
                    <Text>Seja Bem Vindo!</Text>
                </View>
            </View>

            <ScrollView>
                <CardHome />

            </ScrollView>
        </SafeAreaView>
    );
}
