import { HapticTab } from "@/src/components/expo/haptic-tab";
import { Colors } from "@/src/constants/theme";
import { useColorScheme } from "@/src/hooks/use-color-scheme";
import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarButton: HapticTab,
				tabBarActiveTintColor: "#006BFF",
				tabBarInactiveTintColor: "#888",
				tabBarStyle: {
					backgroundColor: Colors[colorScheme ?? "light"].background,
					height: 65,
					paddingBottom: 8,
					paddingTop: 8,
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
					title: "Início",
					tabBarIcon: ({ color }) => (
						<Feather name="home" size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="barGraph"
				options={{
					title: "Estatísticas",
					tabBarIcon: ({ color }) => (
						<Feather name="bar-chart-2" size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="calculator"
				options={{
					title: "Calculadora",
					tabBarIcon: ({ color }) => (
						<Feather name="percent" size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="pizzaGraph"
				options={{
					title: "Gastos",
					tabBarIcon: ({ color }) => (
						<Feather name="trending-down" size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="perfil"
				options={{
					title: "Perfil",
					tabBarIcon: ({ color }) => (
						<Feather name="user" size={24} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}