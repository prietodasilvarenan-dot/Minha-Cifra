import React from "react";
import { Text, View } from "react-native";

import { Header } from "@/src/components/common/header";

export default function NewReleaseHeader() {
  return (
    <Header
      title="Novo lançamento"
      subtitle="Adicione novos itens e tags a sua carteira"
    />
  );
}
