import { useState } from "react";

interface Default {
  year: number;
  month: string;
}

interface ValuesBars extends Default {
  earn: number;
  lost: number;
  investments: number;
}

const MONTH_NAMES = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

export const bars: ValuesBars[] = [
  { year: 2025, month: "Janeiro", earn: 3900, lost: 3000, investments: 700 },
  { year: 2025, month: "Fevereiro", earn: 4000, lost: 2000, investments: 800 },
  { year: 2025, month: "Março", earn: 4000, lost: 3000, investments: 800 },
  { year: 2025, month: "Abril", earn: 2700, lost: 2000, investments: 800 },
  { year: 2025, month: "Maio", earn: 4000, lost: 3000, investments: 900 },
  { year: 2025, month: "Junho", earn: 3900, lost: 2000, investments: 1000 },
  { year: 2025, month: "Julho", earn: 4000, lost: 2000, investments: 1100 },
  { year: 2025, month: "Agosto", earn: 3900, lost: 2000, investments: 1500 },
  { year: 2025, month: "Setembro", earn: 4000, lost: 3000, investments: 1000 },
  { year: 2025, month: "Outubro", earn: 4000, lost: 2000, investments: 1500 },
  { year: 2025, month: "Novembro", earn: 3900, lost: 3000, investments: 2500 },
  { year: 2025, month: "Dezembro", earn: 2700, lost: 2000, investments: 3500 },

  { year: 2026, month: "Janeiro", earn: 4000, lost: 2000, investments: 2500 },
  { year: 2026, month: "Fevereiro", earn: 2700, lost: 2000, investments: 2500 },
  { year: 2026, month: "Março", earn: 4000, lost: 2000, investments: 500 },
  { year: 2026, month: "Abril", earn: 2700, lost: 3000, investments: 500 },
  { year: 2026, month: "Maio", earn: 4000, lost: 2000, investments: 500 },
  { year: 2026, month: "Junho", earn: 3900, lost: 3000, investments: 2500 },
];

export function useGraphicFilter<T extends Default>(items: T[]) {
  const currentDate = new Date();

  const [currentMonthIndex, setCurrentMonthIndex] = useState(
    currentDate.getMonth(),
  );

  const [currentYearIndex, setCurrentYearIndex] = useState(
    currentDate.getFullYear(),
  );

  const prevMonthIndex = currentMonthIndex === 0 ? 11 : currentMonthIndex - 1;

  const nextMonthIndex = currentMonthIndex === 11 ? 0 : currentMonthIndex + 1;

  const filteredGraphic = items.filter(
    (item) =>
      item.month === MONTH_NAMES[currentMonthIndex] &&
      item.year === currentYearIndex,
  );

  const maxVal = Math.max(
    ...bars.flatMap((b) => [b.earn, b.lost, b.investments]),
  );

  const nextMonth = () => {
    setCurrentMonthIndex((prev) => {
      if (prev === 11) {
        setCurrentYearIndex((year) => year + 1);
        return 0;
      }

      return prev + 1;
    });
  };

  const prevMonth = () => {
    setCurrentMonthIndex((prev) => {
      if (prev === 0) {
        setCurrentYearIndex((year) => year - 1);
        return 11;
      }

      return prev - 1;
    });
  };

  return {
    currentPrevMonth: MONTH_NAMES[prevMonthIndex],
    currentMonthLabel: MONTH_NAMES[currentMonthIndex],
    currentNextMonth: MONTH_NAMES[nextMonthIndex],

    currentYearLabel: currentYearIndex,

    filteredGraphic,

    maxVal,

    nextMonth,
    prevMonth,
  };
}
