import { useState } from "react";

export const MONTH_NAMES = [
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

export function useGraphicFilter() {
  const currentDate = new Date();

  const [currentMonthIndex, setCurrentMonthIndex] = useState(
    currentDate.getMonth(),
  );

  const [currentYearIndex, setCurrentYearIndex] = useState(
    currentDate.getFullYear(),
  );

  const prevMonthIndex = currentMonthIndex === 0 ? 11 : currentMonthIndex - 1;

  const nextMonthIndex = currentMonthIndex === 11 ? 0 : currentMonthIndex + 1;

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
    currentMonthIndex,

    nextMonth,
    prevMonth,
  };
}
