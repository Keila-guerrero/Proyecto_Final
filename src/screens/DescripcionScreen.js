import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../theme";

const secciones = [
  {
    icon: "help-circle-outline",
    titulo: "¿Qué es?",
    texto:
      "El carrito seguidor de línea es un robot autónomo que detecta y sigue una línea trazada en el suelo (generalmente negra sobre fondo blanco) usando sensores infrarrojos.",
  },
  {
    icon: "checkmark-circle-outline",
    titulo: "¿Para qué sirve?",
    texto:
      "Fue desarrollado como proyecto integrador para aplicar conceptos de programación, electrónica y robótica. Simula sistemas de automatización usados en industrias como logística y manufactura.",
  },
  {
    icon: "flag-outline",
    titulo: "Objetivo general",
    texto:
      "Diseñar y construir un carrito seguidor de línea funcional que demuestre el uso de sensores, microcontroladores y lógica de control en un sistema embebido.",
  },
  {
    icon: "flash-outline",
    titulo: "¿Cómo funciona?",
    texto:
      "Los sensores infrarrojos leen la superficie. El microcontrolador procesa la señal y ajusta la velocidad de cada motor para mantener el carrito sobre la línea en tiempo real.",
  },
];

export default function DescripcionScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.pageTitle}>Descripción del Proyecto</Text>
      <View style={styles.divider} />

      {secciones.map((s, i) => (
        <View key={i} style={styles.card}>
          <View style={styles.iconRow}>
            <Ionicons name={s.icon} size={22} color={COLORS.accentLight} />
            <Text style={styles.cardTitle}>{s.titulo}</Text>
          </View>
          <Text style={styles.cardText}>{s.texto}</Text>
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
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 18,
    marginBottom: 16,
  },
  iconRow: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  cardTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: COLORS.accentLight,
    marginLeft: 10,
  },
  cardText: { fontSize: 14, color: COLORS.grayLight, lineHeight: 22 },
});