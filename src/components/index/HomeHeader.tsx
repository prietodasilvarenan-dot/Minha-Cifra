import React from "react";
import { Text, View } from "react-native";

interface Props {
    styles: any;
}

export default function HomeHeader({
    styles,
}: Props) {
    return (
        <View style={styles.header}>
            <Text style={styles.welcome}>
                Bem vindo,{"\n"}USER
            </Text>

            <Text style={styles.subtitle}>
                Aqui está seu panorama financeiro
            </Text>
        </View>
    );
}