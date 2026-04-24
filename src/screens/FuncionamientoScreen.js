import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../theme";

const pasos = [
  { num: "01", titulo: "Lectura de sensores",   desc: "Los sensores infrarrojos escanean la superficie continuamente detectando contraste entre la línea negra y el fondo blanco." },
  { num: "02", titulo: "Procesamiento",          desc: "El microcontrolador recibe las señales digitales de los sensores y evalúa la posición del carrito respecto a la línea." },
  { num: "03", titulo: "Decisión de dirección",  desc: "Según la lectura, el programa determina si el carrito debe avanzar recto, girar a la izquierda o girar a la derecha." },
  { num: "04", titulo: "Control de motores",     desc: "El módulo L298N recibe la señal y ajusta la velocidad/dirección de cada motor DC de forma independiente." },
  { num: "05", titulo: "Corrección continua",    desc: "El ciclo se repite miles de veces por segundo, permitiendo seguir la línea de forma precisa y fluida." },
];

export default function FuncionamientoScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.pageTitle}>Funcionamiento</Text>
      <View style={styles.divider} />

      <View style={styles.infoCard}>
        <Ionicons name="information-circle-outline" size={20} color={COLORS.accentLight} />
        <Text style={styles.infoText}>
          El carrito usa un ciclo de retroalimentación para mantenerse sobre la línea en tiempo real.
        </Text>
      </View>

      {pasos.map((p, i) => (
        <View key={i} style={styles.step}>
          <View style={styles.numBox}>
            <Text style={styles.num}>{p.num}</Text>
            {i < pasos.length - 1 && <View style={styles.line} />}
          </View>
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>{p.titulo}</Text>
            <Text style={styles.stepDesc}>{p.desc}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  content: { padding: 24, paddingTop: 50, paddingBottom: 40 },
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
  infoCard: {
    flexDirection: "row",
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.accent,
    padding: 14,
    marginBottom: 28,
    alignItems: "flex-start",
  },
  infoText: {
    color: COLORS.grayLight,
    fontSize: 13,
    flex: 1,
    marginLeft: 10,
    lineHeight: 20,
  },
  step: { flexDirection: "row", marginBottom: 8 },
  numBox: { alignItems: "center", marginRight: 16 },
  num: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.card,
    borderWidth: 2,
    borderColor: COLORS.accent,
    color: COLORS.accentLight,
    fontWeight: "800",
    fontSize: 13,
    textAlign: "center",
    textAlignVertical: "center",
    lineHeight: 36,
  },
  line: {
    width: 2,
    flex: 1,
    backgroundColor: COLORS.border,
    marginTop: 4,
    minHeight: 30,
  },
  stepContent: {
    flex: 1,
    backgroundColor: COLORS.card,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 14,
    marginBottom: 12,
  },
  stepTitle: { fontSize: 15, fontWeight: "700", color: COLORS.white },
  stepDesc: { fontSize: 13, color: COLORS.gray, marginTop: 6, lineHeight: 20 },
});