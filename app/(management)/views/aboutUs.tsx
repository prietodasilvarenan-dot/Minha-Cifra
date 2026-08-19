import React from "react";

import StaticContentScreen from "@/src/components/common/StaticContentScreen";
import { SOBRENOS } from "@/src/constants/strings";

export default function AboutUs() {
  return (
    <StaticContentScreen
      title="Sobre nós"
      route="/(management)/configuration"
      content={SOBRENOS.text}
    />
  );
}
