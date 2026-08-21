import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import User from "@/src/model/User";
import { loginUser } from "@/src/services/userService";
import {
  isAuthenticated,
  getUserData,
  clearAuthData,
  saveUserData,
} from "@/src/services/authService";

export interface UserData {
  id: string;
  name?: string;
  email: string;
  profileImage?: string;
}

interface UserContextType {
  user: UserData | null;
  setUser: React.Dispatch<React.SetStateAction<UserData | null>>;
  signIn: (userCredentials: User) => Promise<void>;
  signOut: () => Promise<void>;
  updateProfileImage: (imageUri: string) => void;
  updateUser: (updatedUser: UserData) => Promise<void>;
  isUserAuthenticated: () => Promise<boolean>;
  isLoading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const restoreSession = async () => {
      try {
        const authenticated = await isAuthenticated();

        if (authenticated) {
          const userData = await getUserData();
          if (userData) {
            setUser(userData);
          }
        }
      } catch (error) {
        console.error("Erro ao restaurar sessão:", error);
      } finally {
        setIsLoading(false);
      }
    };

    restoreSession();
  }, []);

  const signIn = async (userCredentials: User) => {
    const response = await loginUser(userCredentials);

    if (response.status === 200) {
      setUser({
        id: String(response.data.user.id),
        email: response.data.user.email,
        name:
          response.data.user.name || userCredentials.getEmail().split("@")[0],
        profileImage: response.data.user.profileImage || undefined,
      });
    }
  };

  const signOut = async () => {
    await clearAuthData();
    setUser(null);
  };

  const updateProfileImage = (imageUri: string) => {
    setUser((prevUser) => {
      if (!prevUser) {
        return prevUser;
      }

      return {
        ...prevUser,
        profileImage: imageUri,
      };
    });
  };

  const updateUser = async (updatedUser: UserData) => {
    setUser(updatedUser);
    await saveUserData(updatedUser);
  };

  const isUserAuthenticated = async () => {
    return await isAuthenticated();
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        signIn,
        signOut,
        updateProfileImage,
        updateUser,
        isUserAuthenticated,
        isLoading,
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
