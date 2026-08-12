import React, { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import {
  ButtonAjusteDespesas,
  ButtonAjusteSaldo,
} from "@/src/components/common/buttons";
import { getHomeStyles } from "@/src/components/styles/stylesHome";
import HomeHeader from "@/src/components/index/HomeHeader";
import WalletCard from "@/src/components/index/WalletCard";
import { useFinance } from "@/src/context/FinanceContext";
import { useTheme } from "@/src/context/ThemeContext";

export default function HomeScreen() {
  const { isDark } = useTheme();
  const styles = getHomeStyles(isDark);
  const router = useRouter();

  const {
    itemsEarn,
    setItemsEarn,
    totalEarn,
    itemsLost,
    setItemsLost,
    totalLost,
    balance,
    addEarn,
    addLost,
  } = useFinance();

  const [modalEarn, setModalEarn] = useState(false);
  const [modalLost, setModalLost] = useState(false);
  const [hideValues, setHideValues] = useState(false);

  const toggleHideValues = () => setHideValues((prev) => !prev);

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader styles={styles} />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Saldo Total</Text>
          <Text style={styles.balanceValue}>
            {hideValues
              ? "R$ •••••"
              : `R$ ${balance.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`}
          </Text>
        </View>

        <WalletCard
          title="Carteira de Ganhos"
          total={totalEarn}
          items={itemsEarn}
          hidden={hideValues}
          isDark={isDark}
          styles={styles}
          onToggle={toggleHideValues}
          button={
            <ButtonAjusteSaldo
              onPress={() => setModalEarn(!modalEarn)}
              modal={modalEarn}
            />
          }
          modal={modalEarn}
          setModal={setModalEarn}
          onAddItem={addEarn}
        />

        <WalletCard
          title="Carteira de Gastos"
          total={totalLost}
          items={itemsLost}
          hidden={hideValues}
          isDark={isDark}
          styles={styles}
          onToggle={toggleHideValues}
          button={
            <ButtonAjusteDespesas
              onPress={() => setModalLost(!modalLost)}
              modal={modalLost}
            />
          }
          modal={modalLost}
          setModal={setModalLost}
          onAddItem={addLost}
        />

        <TouchableOpacity
          style={[styles.button, { marginBottom: 30 }]}
          onPress={() => router.push("/newRelease")}
        >
          <Text style={styles.buttonText}>Gerenciar Carteiras</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
