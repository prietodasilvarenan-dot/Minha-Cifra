import {
  ButtonAjusteDespesas,
  ButtonAjusteSaldo,
} from "@/src/components/common/buttons";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { getHomeStyles } from "@/src/components/styles/stylesHome";

import HomeHeader from "@/src/components/index/HomeHeader";
import WalletCard from "@/src/components/index/WalletCard";
import { useTheme } from "@/src/context/ThemeContext";

export default function HomeScreen() {
  const { isDark } = useTheme();
  const styles = getHomeStyles(isDark);

  const [modalEarn, setModalEarn] = useState(false);
  const [modalLost, setModalLost] = useState(false);
  const [hideValues, setHideValues] = useState(false);

  const toggleHideValues = () => setHideValues((prev) => !prev);

  const [itemsEarn, setItemsEarn] = useState([
    { title: "Salário", value: 5000 },
    { title: "Investimentos", value: 500 },
    { title: "Freelancer", value: 1000 },
  ]);
  const totalEarn = itemsEarn.reduce((acc, item) => acc + item.value, 0);

  const [itemsLost, setItemsLost] = useState([
    { title: "Aluguel", value: 1200 },
    { title: "Mercado", value: 500 },
    { title: "Lazer", value: 250 },
  ]);
  const totalLost = itemsLost.reduce((acc, item) => acc + item.value, 0);

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader styles={styles} />

      <ScrollView style={styles.content}>
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
          setItems={setItemsEarn}
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
          setItems={setItemsLost}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
