import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as NavigationThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import { ThemeProvider, useTheme } from "@/src/context/ThemeContext";
import { FinanceProvider } from "@/src/context/FinanceContext";
import { UserProvider } from "@/src/context/UserContext";
interface UserProps {
  name: string;
  email: string;
  password: string;
  photo: any;
}

function App() {
  const { isDark } = useTheme();
  const [user, setUser] = useState<UserProps>();

  return (
    <NavigationThemeProvider value={isDark ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName="modal" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack>

      <StatusBar style={isDark ? "light" : "dark"} />
    </NavigationThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <UserProvider>
      <FinanceProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </FinanceProvider>
    </UserProvider>
  );
}
