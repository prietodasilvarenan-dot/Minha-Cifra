import { useCallback } from "react";
import { router } from "expo-router";

export function useOnboardingNavigation() {
  const handleNavigateToSignIn = useCallback(() => {
    router.push("/(auth)/signIn");
  }, []);

  const handleNavigateToSignUp = useCallback(() => {
    router.push("/(auth)/signUp");
  }, []);

  return {
    handleNavigateToSignIn,
    handleNavigateToSignUp,
  };
}
