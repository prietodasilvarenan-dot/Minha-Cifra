import { useEffect, useState } from "react";
import { isAuthenticated } from "@/src/services/authService";

export function useIsAuthenticated() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const authenticated = await isAuthenticated();
        setIsLoggedIn(authenticated);
      } catch (error) {
        console.error("Erro ao verificar autenticação:", error);
        setIsLoggedIn(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  return {
    isLoggedIn,
    isLoading,
    isAuthenticated: isLoggedIn ?? false,
  };
}
