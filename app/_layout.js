import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";
import React from "react";

const palette = {
  blue: "#0B67C2",
  pink: "#E65FB2",
  yellow: "#FFD24C",
  white: "#FFFFFF",
  card: "#FFF9F9",
  dark: "#0B1620",
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          paddingBottom: 8,
          paddingTop: 6,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          backgroundColor: palette.card,
          borderTopColor: "transparent",
          shadowColor: "#000",
          shadowOpacity: 0.08,
          shadowOffset: { width: 0, height: -4 },
          shadowRadius: 12,
          elevation: 12,
        },
        tabBarActiveTintColor: palette.dark,
        tabBarInactiveTintColor: "#9aa4b2",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "700",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={22} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="pageone"
        options={{
          title: "Obrigatório",
          tabBarIcon: ({ color }) => (
            <Ionicons name="newspaper-outline" size={22} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="pagetwo"
        options={{
          title: "Tema Livre",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="star" size={22} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="aboutme"
        options={{
          title: "Sobre",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person-pin" size={22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
