import { HapticTab } from "@/src/components/expo/haptic-tab";
import { Colors } from "@/src/constants/theme";
import { useTheme } from "@/src/context/ThemeContext";
import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function TabLayout() {
  const { isDark } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarActiveTintColor: "#006BFF",
        tabBarInactiveTintColor: "#888",
        tabBarStyle: {
          backgroundColor: Colors[isDark ? "dark" : "light"].background,
          height: 65,
          paddingBottom: 4,
          paddingTop: 12,
          borderTopWidth: 0,
          elevation: 12,
          shadowColor: "#000",
          shadowOpacity: 0.08,
          shadowRadius: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="graph"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Feather name="bar-chart-2" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
  name="newRelease"
  options={{
    title: "",
    tabBarLabel: () => null,
    tabBarIcon: ({ focused }) => (
      <View
        style={{
          width: 67,
          height: 48,
          borderRadius: 24,
          backgroundColor: "#006BFF",
          justifyContent: "center",
          alignItems: "center",

          shadowColor: focused ? "#006BFF" : "#000",
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: focused ? 0.95 : 0.3,
          shadowRadius: focused ? 10 : 5,

          // Android
          elevation: focused ? 10 : 5,
        }}
      >
        <Feather name="plus" size={28} color="#FFFFFF" />
      </View>
        ),
      }}
    />

      <Tabs.Screen
        name="calculator"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Feather name="percent" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pizzaGraph"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Feather name="trending-down" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
