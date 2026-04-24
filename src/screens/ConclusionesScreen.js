import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../theme";

const conclusiones = [
  {
    icon: "school-outline",
    titulo: "¿Qué aprendimos?",
    items: [
      "Integración de hardware y software en sistemas embebidos",
      "Programación de microcontroladores y control de motores",
      "Trabajo en equipo y distribución de tareas",
      "Desarrollo de aplicaciones móviles con React Native",
    ],
  },
  {
    icon: "alert-circle-outline",
    titulo: "Dificultades",
    items: [
      "Calibración de los sensores infrarrojos en distintas superficies",
      "Control preciso de velocidad con el módulo L298N",
      "Coordinación del equipo en diferentes etapas del proyecto",
    ],
  },
  {
    icon: "rocket-outline",
    titulo: "Mejoras futuras",
    items: [
      "Agregar control inalámbrico vía Bluetooth",
      "Implementar PID para un seguimiento más suave",
      "Añadir pantalla LCD para mostrar estado del sensor",
      "Integrar la app para monitorear el carrito en tiempo real",
    ],
  },
];

export default function ConclusionesScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.pageTitle}>Conclusiones</Text>
      <View style={styles.divider} />

      {conclusiones.map((sec, i) => (
        <View key={i} style={styles.section}>
          <View style={styles.secHeader}>
            <Ionicons name={sec.icon} size={20} color={COLORS.accentLight} />
            <Text style={styles.secTitle}>{sec.titulo}</Text>
          </View>
          {sec.items.map((item, j) => (
            <View key={j} style={styles.item}>
              <View style={styles.bullet} />
              <Text style={styles.itemText}>{item}</Text>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  content: { padding: 24, paddingTop: 50 },
  pageTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: COLORS.white,
    letterSpacing: 1,
    textAlign: "center",
  },
  divider: {
    width: 50,
    height: 2,
    backgroundColor: COLORS.accent,
    borderRadius: 2,
    alignSelf: "center",
    marginVertical: 24,
  },
  section: {
    backgroundColor: COLORS.card,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 18,
    marginBottom: 16,
  },
  secHeader: { flexDirection: "row", alignItems: "center", marginBottom: 14 },
  secTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: COLORS.accentLight,
    marginLeft: 10,
  },
  item: { flexDirection: "row", alignItems: "flex-start", marginBottom: 8 },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.accent,
    marginTop: 7,
    marginRight: 10,
  },
  itemText: { color: COLORS.grayLight, fontSize: 14, flex: 1, lineHeight: 22 },
});