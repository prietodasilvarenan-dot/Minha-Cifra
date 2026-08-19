import React from "react";

import StaticContentScreen from "@/src/components/common/StaticContentScreen";
import { POLITICAS } from "@/src/constants/strings";

export default function Polices() {
  return (
    <StaticContentScreen
      title="Políticas de privacidade"
      route="/(management)/configuration"
      content={POLITICAS.text}
    />
  );
}
