import { ButtonAjusteDespesas, ButtonAjusteSaldo, } from "@/src/components/common/buttons";
import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, useColorScheme, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { getHomeStyles } from "@/src/components/styles/stylesHome";

import HomeHeader from "@/src/components/index/HomeHeader";
import WalletCard from "@/src/components/index/WalletCard";

export default function HomeScreen() {

    const isDark = useColorScheme() === "dark";

    const styles = getHomeStyles(isDark);

    const [hideValues, setHideValues] = useState(false);

    const toggleHideValues = () =>
        setHideValues((prev) => !prev);

    const itemsEarn = [
        { title: "Salário", value: 5000 },
        { title: "Investimentos", value: 500 },
        { title: "Freelancer", value: 1000 },
    ];

    const itemsLost = [
        { title: "Aluguel", value: 1200 },
        { title: "Mercado", value: 500 },
        { title: "Lazer", value: 250 },
    ];

    return (
        <SafeAreaView style={styles.container}>

            <HomeHeader styles={styles} />

            <ScrollView style={styles.content}>

                <WalletCard
                    title="Carteira de Ganhos"
                    total={6500}
                    items={itemsEarn}
                    hidden={hideValues}
                    isDark={isDark}
                    styles={styles}
                    onToggle={toggleHideValues}
                    button={
                        <ButtonAjusteSaldo
                            onPress={() =>
                                router.replace("/signIn")
                            }
                        />
                    }
                />

                <WalletCard
                    title="Carteira de Gastos"
                    total={1950}
                    items={itemsLost}
                    hidden={hideValues}
                    isDark={isDark}
                    styles={styles}
                    onToggle={toggleHideValues}
                    button={
                        <ButtonAjusteDespesas
                            onPress={() =>
                                router.replace("/signIn")
                            }
                        />
                    }
                />

            </ScrollView>

        </SafeAreaView>
    );
}