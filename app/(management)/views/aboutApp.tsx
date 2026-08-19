import React from "react";

import StaticContentScreen from "@/src/components/common/StaticContentScreen";
import { SOBREAPP } from "@/src/constants/strings";

export default function AboutApp() {
  return (
    <StaticContentScreen
      title="Sobre o app"
      route="/(management)/configuration"
      content={SOBREAPP.text}
    />
  );
}
