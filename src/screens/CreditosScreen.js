import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../theme";

const datos = [
  { label: "Institución",       valor: "Universidad Tecnológica de Durango" },
  { label: "Carrera",           valor: "Tecnologías de la Información" },
  { label: "Materia",           valor: "Aplicaciones Móviles" },
  { label: "Docente",           valor: "Ing. Ana Laura Lara Chairez" },
  { label: "Grupo",             valor: "5° A TI" },
  { label: "Cuatrimestre",      valor: "5° Cuatrimestre" },
  { label: "Equipo",            valor: "JIMAK" },
  { label: "Fecha de entrega",  valor: "24 de Abril de 2025" },
];

const integrantes = [
  "Keila Yuridia Cervantes Guerrero",
  "Juan David Casiano Gamiz",
  "Jesus Roberto Mendoza Sanchez",
  "Miguel Angel Bermudez Luna",
];

export default function CreditosScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Ionicons name="ribbon" size={48} color={COLORS.accentLight} style={{ alignSelf: "center" }} />
      <Text style={styles.pageTitle}>Créditos</Text>
      <View style={styles.divider} />

      <View style={styles.card}>
        {datos.map((d, i) => (
          <View key={i} style={[styles.row, i < datos.length - 1 && styles.rowBorder]}>
            <Text style={styles.label}>{d.label}</Text>
            <Text style={styles.valor}>{d.valor}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.secTitle}>Integrantes del equipo</Text>
      <View style={styles.card}>
        {integrantes.map((nombre, i) => (
          <View key={i} style={[styles.row, i < integrantes.length - 1 && styles.rowBorder]}>
            <Ionicons name="person-outline" size={16} color={COLORS.accent} style={{ marginRight: 10, marginTop: 2 }} />
            <Text style={styles.valor}>{nombre}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.footer}>JIMAK © 2025</Text>
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
    marginTop: 12,
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
    marginBottom: 24,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    padding: 14,
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  rowBorder: { borderBottomWidth: 1, borderBottomColor: COLORS.border },
  label: {
    fontSize: 13,
    color: COLORS.gray,
    width: 120,
    fontWeight: "600",
  },
  valor: {
    fontSize: 13,
    color: COLORS.white,
    flex: 1,
    flexWrap: "wrap",
  },
  secTitle: {
    fontSize: 14,
    color: COLORS.accentLight,
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: 12,
  },
  footer: {
    color: COLORS.gray,
    fontSize: 12,
    textAlign: "center",
    marginBottom: 20,
    letterSpacing: 2,
  },
});