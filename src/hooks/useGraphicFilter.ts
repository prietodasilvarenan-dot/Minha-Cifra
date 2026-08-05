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

export const pizza: ValuesPizza[] = [
    { id: 1, title: "Aluguel", value: 1200, year: 2026, month: "Jan" },
    { id: 2, title: "Mercado", value: 650, year: 2026, month: "Jan" },
    { id: 3, title: "Internet", value: 120, year: 2026, month: "Jan" },
    { id: 4, title: "Energia", value: 210, year: 2026, month: "Jan" },
    { id: 5, title: "Transporte", value: 340, year: 2026, month: "Jan" },
    { id: 6, title: "Lazer", value: 280, year: 2026, month: "Jan" },

    { id: 7, title: "Aluguel", value: 1200, year: 2026, month: "Fev" },
    { id: 8, title: "Mercado", value: 700, year: 2026, month: "Fev" },
    { id: 9, title: "Internet", value: 120, year: 2026, month: "Fev" },
    { id: 10, title: "Energia", value: 190, year: 2026, month: "Fev" },
    { id: 11, title: "Transporte", value: 360, year: 2026, month: "Fev" },
    { id: 12, title: "Lazer", value: 310, year: 2026, month: "Fev" },

    { id: 13, title: "Aluguel", value: 1200, year: 2026, month: "Mar" },
    { id: 14, title: "Mercado", value: 680, year: 2026, month: "Mar" },
    { id: 15, title: "Internet", value: 120, year: 2026, month: "Mar" },
    { id: 16, title: "Energia", value: 240, year: 2026, month: "Mar" },
    { id: 17, title: "Transporte", value: 390, year: 2026, month: "Mar" },
    { id: 18, title: "Lazer", value: 250, year: 2026, month: "Mar" },

    { id: 19, title: "Aluguel", value: 1250, year: 2026, month: "Abr" },
    { id: 20, title: "Mercado", value: 720, year: 2026, month: "Abr" },
    { id: 21, title: "Internet", value: 120, year: 2026, month: "Abr" },
    { id: 22, title: "Energia", value: 260, year: 2026, month: "Abr" },
    { id: 23, title: "Transporte", value: 370, year: 2026, month: "Abr" },
    { id: 24, title: "Lazer", value: 340, year: 2026, month: "Abr" },

    { id: 25, title: "Aluguel", value: 1250, year: 2026, month: "Mai" },
    { id: 26, title: "Mercado", value: 750, year: 2026, month: "Mai" },
    { id: 27, title: "Internet", value: 120, year: 2026, month: "Mai" },
    { id: 28, title: "Energia", value: 230, year: 2026, month: "Mai" },
    { id: 29, title: "Transporte", value: 410, year: 2026, month: "Mai" },
    { id: 30, title: "Lazer", value: 390, year: 2026, month: "Mai" },

    { id: 31, title: "Aluguel", value: 1250, year: 2026, month: "Jun" },
    { id: 32, title: "Mercado", value: 780, year: 2026, month: "Jun" },
    { id: 33, title: "Internet", value: 120, year: 2026, month: "Jun" },
    { id: 34, title: "Energia", value: 250, year: 2026, month: "Jun" },
    { id: 35, title: "Transporte", value: 430, year: 2026, month: "Jun" },
    { id: 36, title: "Lazer", value: 420, year: 2026, month: "Jun" },
];


export function useGraphicFilter<T extends Default>(items: T[]) {
    const currentDate = new Date();
    
    const [currentMonthIndex, setCurrentMonthIndex] = useState(currentDate.getMonth());
    const [currentYearIndex, setCurrentYearIndex] = useState(currentDate.getFullYear());

    const prevMonthIndex = (currentMonthIndex + 11) % 12;
    const nextMonthIndex = (currentMonthIndex + 1) % 12;


    const filteredGraphic = items.filter(item => 
        item.month === MONTH_NAMES[currentMonthIndex] && 
        item.year === currentYearIndex
    );
    
    const maxVal = Math.max(...bars.flatMap(b => [b.earn, b.lost, b.investments]));

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
        prevMonth
    }   
}