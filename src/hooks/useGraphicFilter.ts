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

const MONTH_NAMES = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];


export const bars: ValuesBars[] = [
    { year: 2024, month: "Jan", earn: 2700, lost: 2000, investments: 100 },
    { year: 2024, month: "Fev", earn: 3900, lost: 2000, investments: 200 },
    { year: 2024, month: "Mar", earn: 2700, lost: 2000, investments: 300 },
    { year: 2024, month: "Abr", earn: 4000, lost: 2000, investments: 400 },
    { year: 2024, month: "Mai", earn: 4000, lost: 3000, investments: 500 },
    { year: 2024, month: "Jun", earn: 3900, lost: 2000, investments: 600 },
    { year: 2024, month: "Jul", earn: 4000, lost: 2000, investments: 700 },
    { year: 2024, month: "Ago", earn: 2700, lost: 3000, investments: 800 },
    { year: 2024, month: "Set", earn: 4000, lost: 3000, investments: 800 },
    { year: 2024, month: "Out", earn: 3900, lost: 2000, investments: 800 },
    { year: 2024, month: "Nov", earn: 3900, lost: 3000, investments: 800 },
    { year: 2024, month: "Dez", earn: 4000, lost: 2000, investments: 700 },

    { year: 2025, month: "Jan", earn: 3900, lost: 3000, investments: 700 },
    { year: 2025, month: "Fev", earn: 4000, lost: 2000, investments: 800 },
    { year: 2025, month: "Mar", earn: 4000, lost: 3000, investments: 800 },
    { year: 2025, month: "Abr", earn: 2700, lost: 2000, investments: 800 },
    { year: 2025, month: "Mai", earn: 4000, lost: 3000, investments: 900 },
    { year: 2025, month: "Jun", earn: 3900, lost: 2000, investments: 1000 },
    { year: 2025, month: "Jul", earn: 4000, lost: 2000, investments: 1100 },
    { year: 2025, month: "Ago", earn: 3900, lost: 2000, investments: 1500 },
    { year: 2025, month: "Set", earn: 4000, lost: 3000, investments: 1000 },
    { year: 2025, month: "Out", earn: 4000, lost: 2000, investments: 1500 },
    { year: 2025, month: "Nov", earn: 3900, lost: 3000, investments: 2500 },
    { year: 2025, month: "Dez", earn: 2700, lost: 2000, investments: 3500 },

    { year: 2026, month: "Jan", earn: 4000, lost: 2000, investments: 2500 },
    { year: 2026, month: "Fev", earn: 2700, lost: 2000, investments: 2500 },
    { year: 2026, month: "Mar", earn: 4000, lost: 2000, investments: 500 },
    { year: 2026, month: "Abr", earn: 2700, lost: 3000, investments: 500 },
    { year: 2026, month: "Mai", earn: 4000, lost: 2000, investments: 500 },
    { year: 2026, month: "Jun", earn: 3900, lost: 3000, investments: 2500 },
    { year: 2026, month: "Jul", earn: 4000, lost: 3000, investments: 2500 },
    { year: 2026, month: "Ago", earn: 4000, lost: 2000, investments: 500 },
    { year: 2026, month: "Set", earn: 3900, lost: 2000, investments: 2500 },
    { year: 2026, month: "Out", earn: 4000, lost: 2000, investments: 500 },
    { year: 2026, month: "Nov", earn: 2700, lost: 3000, investments: 500 },
    { year: 2026, month: "Dez", earn: 3900, lost: 2000, investments: 2500 },

    
];

export function useGraphicFilter(items: ValuesBars[]){
    const currentDate = new Date();
    
    const [currentMonthIndex, setCurrentMonthIndex] = useState(currentDate.getMonth());
    const [currentYearIndex, setCurrentYearIndex] = useState(currentDate.getFullYear());

    const filteredGraphic = bars.filter(b => 
        b.month === MONTH_NAMES[currentMonthIndex] && 
        b.year === currentYearIndex
    );
    
    const maxVal = Math.max(...bars.flatMap(b => [b.earn, b.lost, b.investments]));

    const nextMonth = () => {
        setCurrentMonthIndex((prev) => (prev === 11 ? 0 : prev + 1));
        if (currentMonthIndex + 1 == 12){
            setCurrentYearIndex((prev) => (prev+1));
        }
    };

    const prevMonth = () => {
        setCurrentMonthIndex((prev) => (prev === 0 ? 11 : prev - 1));
        if (currentMonthIndex - 1 == -1){
            setCurrentYearIndex((prev) => (prev-1));
        }
    };
    

    return {
        currentMonthLabel: MONTH_NAMES[currentMonthIndex],
        currentYearLabel: currentYearIndex,
        filteredGraphic,
        maxVal,
        nextMonth,
        prevMonth
    }
    
}
