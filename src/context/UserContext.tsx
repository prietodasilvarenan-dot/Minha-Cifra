import React, { createContext, useContext, useState, ReactNode } from "react";
import User from "@/src/model/User";
import { loginUser } from "@/src/services/userService";

export interface UserData {
  name?: string;
  email: string;
  profileImage?: string;
}

interface UserContextType {
  user: UserData | null;
  setUser: React.Dispatch<React.SetStateAction<UserData | null>>;
  signIn: (userCredentials: User) => Promise<void>;
  signOut: () => void;
  updateProfileImage: (imageUri: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(null);

  const signIn = async (userCredentials: User) => {
    const response = await loginUser(userCredentials);

    if (response.status === 200) {
      setUser({
        email: userCredentials.getEmail(),
        name: response.data?.name || userCredentials.getEmail().split("@")[0], // fallback para o nome antes do @
        profileImage: response.data?.profileImage || undefined,
      });
    }
  };

  const signOut = () => {
    setUser(null);
  };

  const updateProfileImage = (imageUri: string) => {
    setUser((prevUser) =>
      prevUser ? { ...prevUser, profileImage: imageUri } : null,
    );
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        signIn,
        signOut,
        updateProfileImage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser deve ser usado dentro de um UserProvider");
  }
  return context;
};
