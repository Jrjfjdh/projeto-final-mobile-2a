import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Início", 
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="fort-awesome" size={24} color={color} /> 
          ),
        }}
      />
      <Tabs.Screen
        name="pageone"
        options={{
          title: "História CN", 
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="star" size={24} color={color} /> 
          ),
        }}
      />
      <Tabs.Screen
        name="pagetwo"
        options={{
          title: "Desenhos", 
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="pencil" size={24} color={color} /> 
          ),
        }}
      />
      <Tabs.Screen
        name="cartoon" 
        options={{
          title: "O Canal",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="tv-outline" size={24} color={color} /> 
          ),
        }}
      />
      <Tabs.Screen
        name="criador"
        options={{ 
          title: "O Criador", 
          headerShown: false,
          tabBarIcon: ({color}) => (
            <MaterialIcons name="face" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="video"
        options={{ 
          title: "aberturas", 
          headerShown: false,
          tabBarIcon: ({color}) => (
        <FontAwesome name="music" size={24} color={color} />          ),
        }}
      />
        <Tabs.Screen
        name="aboutme"
        options={{ title: "Sobre Mim", headerShown: false,
        tabBarIcon: ({color}) => <MaterialIcons name="nature-people" size={24} color={color} />,

         }}
      />
    </Tabs>
  );
}