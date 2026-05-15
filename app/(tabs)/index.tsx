import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { CardHome } from "@/components/ui/cards";

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
                <CardHome />
            </ScrollView>
        </SafeAreaView>
    );
}
