import React, { createContext, useContext, useState, ReactNode } from "react";

export interface ItemFinance {
  id: string;
  title: string;
  value: number;
  tag: string;
}

interface FinanceContextData {
  itemsEarn: ItemFinance[];
  setItemsEarn: React.Dispatch<React.SetStateAction<ItemFinance[]>>;
  itemsLost: ItemFinance[];
  setItemsLost: React.Dispatch<React.SetStateAction<ItemFinance[]>>; 
  totalEarn: number;
  totalLost: number;
  balance: number;
  tagsEarn: string[];
  tagsLost: string[];
  addEarn: (item: Omit<ItemFinance, "id">) => void;
  addLost: (item: Omit<ItemFinance, "id">) => void;
}

const FinanceContext = createContext<FinanceContextData>({} as FinanceContextData);

export function FinanceProvider({ children }: { children: ReactNode }) {
  const [itemsEarn, setItemsEarn] = useState<ItemFinance[]>([
  ]);

  const [itemsLost, setItemsLost] = useState<ItemFinance[]>([
  ]);

  const tagsEarn = Array.from(new Set(itemsEarn.map((item) => item.tag)));
  const tagsLost = Array.from(new Set(itemsLost.map((item) => item.tag)));

  const addEarn = (newItem: Omit<ItemFinance, "id">) => {
    const itemWithId: ItemFinance = {
      ...newItem,
      id: Date.now().toString(),
    };
    setItemsEarn((prev) => [...prev, itemWithId]);
  };

  const addLost = (newItem: Omit<ItemFinance, "id">) => {
    const itemWithId: ItemFinance = {
      ...newItem,
      id: Date.now().toString(),
    };
    setItemsLost((prev) => [...prev, itemWithId]);
  };

  const totalEarn = itemsEarn.reduce((acc, item) => acc + item.value, 0);
  const totalLost = itemsLost.reduce((acc, item) => acc + item.value, 0);
  const balance = totalEarn - totalLost;

  return (
    <FinanceContext.Provider
      value={{
        itemsEarn,
        setItemsEarn, 
        itemsLost,
        setItemsLost, 
        totalEarn,
        totalLost,
        balance,
        tagsEarn,
        tagsLost,
        addEarn,
        addLost,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
}

export const useFinance = () => useContext(FinanceContext);