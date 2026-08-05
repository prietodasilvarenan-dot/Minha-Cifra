import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as NavigationThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import { ThemeProvider, useTheme } from "@/src/context/ThemeContext";

interface UserProps {
  name: string;
  email: string;
  password: string;
  photo: any; //todo
}

function App() {
  const { isDark } = useTheme();
  const [user, setUser] = useState<UserProps>();

  return (
    <NavigationThemeProvider value={isDark ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />
        {/**<Stack.Screen name="modal" options={{ presentation: "modal" }} />*/}
      </Stack>

      <StatusBar style={isDark ? "light" : "dark"} />
    </NavigationThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
