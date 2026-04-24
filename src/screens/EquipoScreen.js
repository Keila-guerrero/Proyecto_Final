import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../theme";

const integrantes = [
  { nombre: "Keila Yuridia Cervantes Guerrero", rol: "Desarrolladora / Líder", icon: "person-circle" },
  { nombre: "Juan David Casiano Gamiz",         rol: "Programador",            icon: "code-slash" },
  { nombre: "Jesus Roberto Mendoza Sanchez",    rol: "Diseño y Hardware",      icon: "construct" },
  { nombre: "Miguel Angel Bermudez Luna",       rol: "Documentación",          icon: "document-text" },
];

export default function EquipoScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.pageTitle}>Equipo de Trabajo</Text>
      <Text style={styles.teamName}>JIMAK</Text>
      <View style={styles.divider} />

      <Image
        source={require("../../assets/equipo.png")}
        style={styles.equipoImg}
      />

      {integrantes.map((item, i) => (
        <View key={i} style={styles.card}>
          <View style={styles.avatarBox}>
            <Ionicons name={item.icon} size={38} color={COLORS.accentLight} />
          </View>
          <View style={styles.info}>
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text style={styles.rol}>{item.rol}</Text>
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
  teamName: {
    fontSize: 14,
    color: COLORS.accentLight,
    textAlign: "center",
    letterSpacing: 4,
    marginTop: 6,
    fontWeight: "600",
  },
  divider: {
    width: 50,
    height: 2,
    backgroundColor: COLORS.accent,
    borderRadius: 2,
    alignSelf: "center",
    marginVertical: 24,
  },
  equipoImg: {
    width: "100%",
    height: 260,
    borderRadius: 14,
    resizeMode: "contain",
    marginBottom: 24,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.surface,
  },
  card: {
    flexDirection: "row",
    backgroundColor: COLORS.card,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 16,
    marginBottom: 14,
    alignItems: "center",
  },
  avatarBox: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: COLORS.surface,
    borderWidth: 2,
    borderColor: COLORS.accent,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  info: { flex: 1 },
  nombre: { fontSize: 15, fontWeight: "700", color: COLORS.white, flexWrap: "wrap" },
  rol: { fontSize: 13, color: COLORS.gray, marginTop: 4 },
});