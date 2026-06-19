import { useState } from "react";

interface Values {
    year: number;
    month: string;
    earn: number;
    lost: number;
    investments: number;
}
const MONTH_NAMES = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];


const bars: Values[] = [
    { year: 2024, month: "Jan", earn: 4000, lost: 3000, investments: 500 },
    { year: 2024, month: "Jan", earn: 4000, lost: 3000, investments: 500 },
    { year: 2024, month: "Fev", earn: 2000, lost: 3500, investments: 100 },
    { year: 2024, month: "Mar", earn: 5000, lost: 2000, investments: 6000 },
    { year: 2024, month: "Dez", earn: 4000, lost: 3000, investments: 500 },
];

export function useGraphicFilter(){
    const currentDate = new Date();
    
    const [currentMonthIndex, setCurrentMonthIndex] = useState(currentDate.getMonth());
    const [currentYearIndex, setCurrentYearIndex] = useState(currentDate.getFullYear());

    const filteredBars = bars.filter(b => b.month === MONTH_NAMES[currentMonthIndex]);
    
    const maxVal = Math.max(...bars.flatMap(b => [b.earn, b.lost, b.investments]));

    const nextMonth = () => {
        setCurrentMonthIndex((prev) => (prev === 11 ? 0 : prev + 1));
    };

    const prevMonth = () => {
        setCurrentMonthIndex((prev) => (prev === 0 ? 11 : prev - 1));
    };
    

    return {
        currentMonthLabel: MONTH_NAMES[currentMonthIndex],
        filteredBars,
        maxVal,
        nextMonth,
        prevMonth
    }
    
}
