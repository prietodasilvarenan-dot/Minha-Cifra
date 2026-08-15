import React, { createContext, ReactNode, useContext, useState } from "react";

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

export interface ItemFinance {
  id: string;
  title: string | null;
  value: number;
  tag: string;

  year: number;
  month: string;
}

interface NewItemFinance {
  title: string | null;
  value: number;
  tag: string;
}

interface FinanceContextData {
  itemsEarn: ItemFinance[];
  setItemsEarn: React.Dispatch<React.SetStateAction<ItemFinance[]>>;

  itemsInvestments: ItemFinance[];
  setItemsInvestments: React.Dispatch<React.SetStateAction<ItemFinance[]>>;

  itemsLost: ItemFinance[];
  setItemsLost: React.Dispatch<React.SetStateAction<ItemFinance[]>>;

  totalEarn: number;
  totalInvestments: number;
  totalLost: number;

  balance: number;

  tagsEarn: string[];
  tagsInvestments: string[];
  tagsLost: string[];

  addTagEarn: (tag: string) => void;
  addTagInvestments: (tag: string) => void;
  addTagLost: (tag: string) => void;

  addEarn: (item: NewItemFinance) => void;
  addInvestments: (item: NewItemFinance) => void;
  addLost: (item: NewItemFinance) => void;
}

const FinanceContext = createContext<FinanceContextData>(
  {} as FinanceContextData,
);

export function FinanceProvider({ children }: { children: ReactNode }) {
  const [itemsEarn, setItemsEarn] = useState<ItemFinance[]>([]);

  const [itemsInvestments, setItemsInvestments] = useState<ItemFinance[]>([]);

  const [itemsLost, setItemsLost] = useState<ItemFinance[]>([]);

  const [tagsEarn, setTagsEarn] = useState<string[]>([]);

  const [tagsInvestments, setTagsInvestments] = useState<string[]>([]);

  const [tagsLost, setTagsLost] = useState<string[]>([]);

  // =========================
  // DATA ATUAL
  // =========================

  const getCurrentDate = () => {
    const date = new Date();

    return {
      year: date.getFullYear(),
      month: MONTH_NAMES[date.getMonth()],
    };
  };

  // =========================
  // TAGS - RECEITAS
  // =========================

  const addTagEarn = (tag: string) => {
    const tagFormatada = tag.trim();

    if (!tagFormatada) {
      return;
    }

    setTagsEarn((prev) => {
      if (prev.includes(tagFormatada)) {
        return prev;
      }

      return [...prev, tagFormatada];
    });
  };

  const addTagInvestments = (tag: string) => {
    const tagFormatada = tag.trim();

    if (!tagFormatada) {
      return;
    }

    setTagsInvestments((prev) => {
      if (prev.includes(tagFormatada)) {
        return prev;
      }

      return [...prev, tagFormatada];
    });
  };

  const addTagLost = (tag: string) => {
    const tagFormatada = tag.trim();

    if (!tagFormatada) {
      return;
    }

    setTagsLost((prev) => {
      if (prev.includes(tagFormatada)) {
        return prev;
      }

      return [...prev, tagFormatada];
    });
  };

  const addEarn = (newItem: NewItemFinance) => {
    const { year, month } = getCurrentDate();

    const itemWithId: ItemFinance = {
      ...newItem,
      id: Date.now().toString(),
      year,
      month,
    };

    setItemsEarn((prev) => [...prev, itemWithId]);
  };

  const addInvestments = (newItem: NewItemFinance) => {
    const { year, month } = getCurrentDate();

    const itemWithId: ItemFinance = {
      ...newItem,
      id: Date.now().toString(),
      year,
      month,
    };

    setItemsInvestments((prev) => [...prev, itemWithId]);
  };

  const addLost = (newItem: NewItemFinance) => {
    const { year, month } = getCurrentDate();

    const itemWithId: ItemFinance = {
      ...newItem,
      id: Date.now().toString(),
      year,
      month,
    };

    setItemsLost((prev) => [...prev, itemWithId]);
  };

  const totalEarn = itemsEarn.reduce((acc, item) => acc + item.value, 0);

  const totalInvestments = itemsInvestments.reduce(
    (acc, item) => acc + item.value,
    0,
  );

  const totalLost = itemsLost.reduce((acc, item) => acc + item.value, 0);

  const balance = totalEarn - (totalLost + totalInvestments);

  return (
    <FinanceContext.Provider
      value={{
        itemsEarn,
        setItemsEarn,

        itemsInvestments,
        setItemsInvestments,

        itemsLost,
        setItemsLost,

        totalEarn,
        totalInvestments,
        totalLost,

        balance,

        tagsEarn,
        tagsInvestments,
        tagsLost,

        addTagEarn,
        addTagInvestments,
        addTagLost,

        addEarn,
        addInvestments,
        addLost,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
}

export const useFinance = () => useContext(FinanceContext);
