import { ButtonAjusteDespesas, ButtonAjusteSaldo } from "@/src/components/common/buttons";
import { getHomeStyles } from "@/src/components/styles/stylesHome";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    useColorScheme,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {

    const isDark = useColorScheme() === "dark";
    const styles = getHomeStyles(isDark);

    // 👁️ STATE DO OLHO
    const [hideValues, setHideValues] = useState(false);

    const toggleHideValues = () => {
        setHideValues(prev => !prev);
    };

    interface Items {
        title: string;
        value: number;
    }

    const itemsEarn: Items[] = [
        { title: "Salário", value: 5000 },
        { title: "Investimentos", value: 500 },
        { title: "Freelancer", value: 1000 },
    ];

    const itemsLost: Items[] = [
        { title: "Aluguel", value: 1200 },
        { title: "Mercado", value: 500 },
        { title: "Lazer", value: 250 },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.welcome}>
                    Bem vindo,{"\n"}USER
                </Text>

                <Text style={styles.subtitle}>
                    Aqui está seu panorama financeiro
                </Text>
            </View>
            <ScrollView style={styles.content}>
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.cardTitle}>
                            Carteira de Ganhos
                        </Text>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Text style={styles.cardValue}>
                                {hideValues ? "••••••" : "R$ 6.500"}
                            </Text>
                            <TouchableOpacity onPress={toggleHideValues}>
                                <Feather
                                    name={hideValues ? "eye-off" : "eye"}
                                    size={20}
                                    color={isDark ? "#fff" : "#000"}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {itemsEarn.map((item, index) => (
                        <View style={styles.item} key={index}>
                            <Text style={styles.itemText}>
                                {item.title}
                            </Text>

                            <Text style={styles.itemValue}>
                                {hideValues ? "••••" : `R$ ${item.value}`}
                            </Text>
                        </View>
                    ))}
                    <ButtonAjusteSaldo
                        onPress={() => router.replace("/signIn")}
                    />
                </View>
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.cardTitle}>
                            Carteira de Gastos
                        </Text>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Text style={styles.cardValue}>
                                {hideValues ? "••••••" : "R$ 1.950"}
                            </Text>
                            <TouchableOpacity onPress={toggleHideValues}>
                                <Feather
                                    name={hideValues ? "eye-off" : "eye"}
                                    size={20}
                                    color={isDark ? "#fff" : "#000"}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {itemsLost.map((item, index) => (
                        <View style={styles.item} key={index}>
                            <Text style={styles.itemText}>
                                {item.title}
                            </Text>
                            <Text style={styles.itemValue}>
                                {hideValues ? "••••" : `R$ ${item.value}`}
                            </Text>
                        </View>
                    ))}
                    <ButtonAjusteDespesas
                        onPress={() => router.replace("/signIn")}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}