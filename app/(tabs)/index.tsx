import { ThemedText } from "@/src/components/expo/themed-text";
import { ThemedView } from "@/src/components/expo/themed-view";
import { Button } from "@react-navigation/elements";
import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
    interface Items {
        title: string;
        value: number;
        valid: boolean;
    }
    const itemsEarn: Items[] = [
        {title: "Salário", value: 5000, valid: true},
        {title: "Investimentos", value: 500, valid: true},
        {title: "FreeLancer", value: 1000, valid: true},
        {title: "Aniversario", value: 40, valid: true},
    ]
    const itemsLost: Items[] = [
        {title: "Salário", value: -3000, valid: true},
        {title: "asdçlkjfa", value: -3000, valid: true},
        {title: "asdasddsadsadsa", value: -3000, valid: true},
        {title: "Salário", value: -3000, valid: true},
    ]

    return (
       <SafeAreaView>
            <ThemedView>
                <ThemedText type="title">Olá, User!</ThemedText>
            </ThemedView>

            <ThemedText type="default">
                Aqui está o panorama geral das suas finanças hoje.
            </ThemedText>

            <ScrollView>
                
                {/* divisao (card) em relação aos ganhos fixos */}
                <View>
                    <ThemedText>Carteira de Ganhos</ThemedText>
                    {/* text, R$ value */}
                    {itemsEarn.map((item, index)=>{
                        return(
                            <ThemedText key={index}>
                                {item.title}: R${item.value.toFixed(2)}
                            </ThemedText>
                        );
                    })}
                    <Button>Ajustar</Button>
                </View>


                {/* divisao (card) em relação aos gastos fixos */}
                <View>
                    <ThemedText>Carteira de Gastos</ThemedText>
                    {/* text, R$ value */}
                    {itemsLost.map((item, index)=>{
                        return(
                            <ThemedText key={index}>
                                {item.title}: R${item.value.toFixed(2)}
                            </ThemedText>
                        );
                    })}
                    <Button>Ajustar</Button>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}