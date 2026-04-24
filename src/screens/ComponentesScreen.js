import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../theme";

const componentes = [
  { icon: "car-sport-outline",     nombre: "Chasis",                  funcion: "Estructura física del carrito donde se montan todos los componentes." },
  { icon: "sync-outline",          nombre: "Motores DC",               funcion: "Proporcionan el movimiento a las ruedas del carrito." },
  { icon: "eye-outline",           nombre: "Sensores Infrarrojos",     funcion: "Detectan la línea negra sobre el suelo." },
  { icon: "radio-button-on",       nombre: "Ruedas",                   funcion: "Permiten el desplazamiento del carrito sobre la superficie." },
  { icon: "battery-charging",      nombre: "Batería",                  funcion: "Fuente de energía del sistema." },
  { icon: "cpu-outline",           nombre: "ESP32",                    funcion: "Microcontrolador principal que procesa las señales y controla los motores." }, // ← cambiado
  { icon: "compass-outline",       nombre: "MPU6050",                  funcion: "Giroscopio y acelerómetro que detecta la orientación y movimiento del carrito." }, // ← nuevo
  { icon: "git-branch-outline",    nombre: "Módulo L298N",             funcion: "Controlador de motores que regula la dirección y velocidad." },
  { icon: "git-network-outline",   nombre: "Cables de conexión",       funcion: "Interconectan los componentes electrónicos del circuito." },
];

export default function ComponentesScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.pageTitle}>Componentes y Materiales</Text>
      <View style={styles.divider} />

      {componentes.map((c, i) => (
        <View key={i} style={styles.card}>
          <View style={styles.iconBox}>
            <Ionicons name={c.icon} size={26} color={COLORS.accentLight} />
          </View>
          <View style={styles.info}>
            <Text style={styles.nombre}>{c.nombre}</Text>
            <Text style={styles.funcion}>{c.funcion}</Text>
          </View>
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
    flexDirection: "row",
    backgroundColor: COLORS.card,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 14,
    marginBottom: 12,
    alignItems: "center",
  },
  iconBox: {
    width: 52,
    height: 52,
    borderRadius: 12,
    backgroundColor: COLORS.surface,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  info: { flex: 1 },
  nombre: { fontSize: 15, fontWeight: "700", color: COLORS.white },
  funcion: { fontSize: 13, color: COLORS.gray, marginTop: 4, lineHeight: 19 },
});