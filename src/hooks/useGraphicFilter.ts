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

interface ValuesPizza extends Default {
  id: number;
  title: string;
  value: number;
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

export const pizza: ValuesPizza[] = [
  { id: 1, title: "Aluguel", value: 1100, year: 2025, month: "Janeiro" },
  { id: 2, title: "Mercado", value: 600, year: 2025, month: "Janeiro" },
  { id: 3, title: "Internet", value: 110, year: 2025, month: "Janeiro" },
  { id: 4, title: "Energia", value: 180, year: 2025, month: "Janeiro" },

  { id: 5, title: "Aluguel", value: 1100, year: 2025, month: "Fevereiro" },
  { id: 6, title: "Mercado", value: 620, year: 2025, month: "Fevereiro" },
  { id: 7, title: "Energia", value: 190, year: 2025, month: "Fevereiro" },

  { id: 8, title: "Aluguel", value: 1100, year: 2025, month: "Março" },
  { id: 9, title: "Mercado", value: 640, year: 2025, month: "Março" },
  { id: 10, title: "Lazer", value: 300, year: 2025, month: "Março" },

  { id: 11, title: "Aluguel", value: 1150, year: 2025, month: "Abril" },
  { id: 12, title: "Mercado", value: 650, year: 2025, month: "Abril" },

  { id: 13, title: "Aluguel", value: 1150, year: 2025, month: "Maio" },
  { id: 14, title: "Mercado", value: 680, year: 2025, month: "Maio" },

  { id: 15, title: "Aluguel", value: 1150, year: 2025, month: "Junho" },
  { id: 16, title: "Mercado", value: 700, year: 2025, month: "Junho" },

  { id: 17, title: "Aluguel", value: 1200, year: 2025, month: "Julho" },
  { id: 18, title: "Mercado", value: 710, year: 2025, month: "Julho" },

  { id: 19, title: "Aluguel", value: 1200, year: 2025, month: "Agosto" },
  { id: 20, title: "Mercado", value: 730, year: 2025, month: "Agosto" },

  { id: 21, title: "Aluguel", value: 1200, year: 2025, month: "Setembro" },
  { id: 22, title: "Mercado", value: 720, year: 2025, month: "Setembro" },

  { id: 23, title: "Aluguel", value: 1200, year: 2025, month: "Outubro" },
  { id: 24, title: "Mercado", value: 750, year: 2025, month: "Outubro" },

  { id: 25, title: "Aluguel", value: 1200, year: 2025, month: "Novembro" },
  { id: 26, title: "Mercado", value: 780, year: 2025, month: "Novembro" },

  { id: 27, title: "Aluguel", value: 1200, year: 2025, month: "Dezembro" },
  { id: 28, title: "Mercado", value: 850, year: 2025, month: "Dezembro" },

  { id: 29, title: "Aluguel", value: 1200, year: 2026, month: "Janeiro" },
  { id: 30, title: "Mercado", value: 650, year: 2026, month: "Janeiro" },
  { id: 31, title: "Internet", value: 120, year: 2026, month: "Janeiro" },
  { id: 32, title: "Energia", value: 210, year: 2026, month: "Janeiro" },
  { id: 33, title: "Transporte", value: 340, year: 2026, month: "Janeiro" },
  { id: 34, title: "Lazer", value: 280, year: 2026, month: "Janeiro" },

  { id: 35, title: "Aluguel", value: 1200, year: 2026, month: "Fevereiro" },
  { id: 36, title: "Mercado", value: 700, year: 2026, month: "Fevereiro" },
  { id: 37, title: "Internet", value: 120, year: 2026, month: "Fevereiro" },

  { id: 38, title: "Aluguel", value: 1200, year: 2026, month: "Março" },
  { id: 39, title: "Mercado", value: 680, year: 2026, month: "Março" },

  { id: 40, title: "Aluguel", value: 1250, year: 2026, month: "Abril" },
  { id: 41, title: "Mercado", value: 720, year: 2026, month: "Abril" },

  { id: 42, title: "Aluguel", value: 1250, year: 2026, month: "Maio" },
  { id: 43, title: "Mercado", value: 750, year: 2026, month: "Maio" },

  { id: 44, title: "Aluguel", value: 1250, year: 2026, month: "Junho" },
  { id: 45, title: "Mercado", value: 780, year: 2026, month: "Junho" },
];

export function useGraphicFilter<T extends Default>(items: T[]) {
  const currentDate = new Date();

  const [currentMonthIndex, setCurrentMonthIndex] = useState(
    currentDate.getMonth(),
  );
  const [currentYearIndex, setCurrentYearIndex] = useState(
    currentDate.getFullYear(),
  );

  const prevMonthIndex = (currentMonthIndex + 11) % 12;
  const nextMonthIndex = (currentMonthIndex + 1) % 12;

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
