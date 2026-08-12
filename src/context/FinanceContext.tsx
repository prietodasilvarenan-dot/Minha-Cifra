import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

export interface ItemFinance {
  id: string;
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

  addEarn: (item: Omit<ItemFinance, "id">) => void;
  addInvestments: (item: Omit<ItemFinance, "id">) => void;
  addLost: (item: Omit<ItemFinance, "id">) => void;
}

const FinanceContext = createContext<FinanceContextData>(
  {} as FinanceContextData,
);

export function FinanceProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [itemsEarn, setItemsEarn] = useState<ItemFinance[]>([]);
  const [itemsInvestments, setItemsInvestments] =
    useState<ItemFinance[]>([]);
  const [itemsLost, setItemsLost] = useState<ItemFinance[]>([]);

  const [tagsEarn, setTagsEarn] = useState<string[]>([]);
  const [tagsInvestments, setTagsInvestments] = useState<string[]>([]);
  const [tagsLost, setTagsLost] = useState<string[]>([]);

  const addTagEarn = (tag: string) => {
    const tagFormatada = tag.trim();

    if (!tagFormatada) return;

    setTagsEarn((prev) => {
      if (prev.includes(tagFormatada)) {
        return prev;
      }

      return [...prev, tagFormatada];
    });
  };

  const addTagInvestments = (tag: string) => {
    const tagFormatada = tag.trim();

    if (!tagFormatada) return;

    setTagsInvestments((prev) => {
      if (prev.includes(tagFormatada)) {
        return prev;
      }

      return [...prev, tagFormatada];
    });
  };

  const addTagLost = (tag: string) => {
    const tagFormatada = tag.trim();

    if (!tagFormatada) return;

    setTagsLost((prev) => {
      if (prev.includes(tagFormatada)) {
        return prev;
      }

      return [...prev, tagFormatada];
    });
  };

  const addEarn = (newItem: Omit<ItemFinance, "id">) => {
    const itemWithId: ItemFinance = {
      ...newItem,
      id: Date.now().toString(),
    };

    setItemsEarn((prev) => [...prev, itemWithId]);
  };

  const addInvestments = (newItem: Omit<ItemFinance, "id">) => {
    const itemWithId: ItemFinance = {
      ...newItem,
      id: Date.now().toString(),
    };

    setItemsInvestments((prev) => [...prev, itemWithId]);
  };


  const addLost = (newItem: Omit<ItemFinance, "id">) => {
    const itemWithId: ItemFinance = {
      ...newItem,
      id: Date.now().toString(),
    };

    setItemsLost((prev) => [...prev, itemWithId]);
  };


  const totalEarn = itemsEarn.reduce(
    (acc, item) => acc + item.value,
    0,
  );

  const totalInvestments = itemsInvestments.reduce(
    (acc, item) => acc + item.value,
    0,
  );

  const totalLost = itemsLost.reduce(
    (acc, item) => acc + item.value,
    0,
  );

  const balance =
    totalEarn - (totalLost + totalInvestments);

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