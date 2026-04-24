import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import InicioScreen from "../screens/InicioScreen";
import EquipoScreen from "../screens/EquipoScreen";
import DescripcionScreen from "../screens/DescripcionScreen";
import ComponentesScreen from "../screens/ComponentesScreen";
import FuncionamientoScreen from "../screens/FuncionamientoScreen";
import GaleriaScreen from "../screens/GaleriaScreen";
import ConclusionesScreen from "../screens/ConclusionesScreen";
import CreditosScreen from "../screens/CreditosScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import { COLORS } from "../theme";

const headerOptions = {
  headerStyle: { backgroundColor: COLORS.bg },
  headerTintColor: COLORS.accentLight,
  headerTitleStyle: { fontWeight: "700", letterSpacing: 1 },
};

function InicioStack() {
  return (
    <Stack.Navigator screenOptions={headerOptions}>
      <Stack.Screen name="InicioScreen" component={InicioScreen} options={{ title: "INICIO" }} />
    </Stack.Navigator>
  );
}

const tabs = [
  { name: "Inicio",        component: InicioStack,       icon: "home" },
  { name: "Equipo",        component: EquipoScreen,      icon: "people" },
  { name: "Descripción",   component: DescripcionScreen, icon: "document-text" },
  { name: "Componentes",   component: ComponentesScreen, icon: "hardware-chip" },
  { name: "Funciona",      component: FuncionamientoScreen, icon: "settings" },
  { name: "Galería",       component: GaleriaScreen,     icon: "images" },
  { name: "Conclusiones",  component: ConclusionesScreen, icon: "bulb" },
  { name: "Créditos",      component: CreditosScreen,    icon: "ribbon" },
];

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: COLORS.tabBg,
            borderTopColor: COLORS.border,
            height: 62,
          },
          tabBarActiveTintColor: COLORS.accentLight,
          tabBarInactiveTintColor: COLORS.gray,
          tabBarLabelStyle: { fontSize: 10, marginBottom: 4 },
          tabBarIcon: ({ color, size }) => {
            const tab = tabs.find((t) => t.name === route.name);
            return <Ionicons name={tab?.icon || "ellipse"} size={size} color={color} />;
          },
        })}
      >
        {tabs.map((tab) => (
          <Tab.Screen key={tab.name} name={tab.name} component={tab.component} />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
}