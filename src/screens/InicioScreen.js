import React from "react";
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity, Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../theme";

export default function InicioScreen({ navigation }) {
  const secciones = [
    { label: "Equipo",         tab: "Equipo",        icon: "people-outline" },
    { label: "Descripción",    tab: "Descripción",   icon: "document-text-outline" },
    { label: "Componentes",    tab: "Componentes",   icon: "hardware-chip-outline" },
    { label: "Funcionamiento", tab: "Funciona",      icon: "settings-outline" },
    { label: "Galería",        tab: "Galería",        icon: "images-outline" },
    { label: "Conclusiones",   tab: "Conclusiones",  icon: "bulb-outline" },
    { label: "Créditos",       tab: "Créditos",      icon: "ribbon-outline" },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>

      <Image
        source={require("../../assets/logo.jpeg")}
        style={styles.logoImg}
      />

      <Text style={styles.title}>Carrito Seguidor{"\n"}de Línea</Text>
      <Text style={styles.team}>Equipo JIMAK</Text>

      <View style={styles.divider} />

      <Text style={styles.subtitle}>SECCIONES</Text>

      <View style={styles.grid}>
        {secciones.map((s) => (
          <TouchableOpacity
            key={s.tab}
            style={styles.card}
            onPress={() => navigation.navigate(s.tab)}
          >
            <Ionicons name={s.icon} size={28} color={COLORS.accentLight} />
            <Text style={styles.cardLabel}>{s.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  content: { alignItems: "center", paddingVertical: 50, paddingHorizontal: 20 },
  logoImg: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 2,
    borderColor: COLORS.accent,
    marginBottom: 24,
    resizeMode: "contain",
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: COLORS.white,
    textAlign: "center",
    letterSpacing: 1,
  },
  team: {
    fontSize: 16,
    color: COLORS.accentLight,
    marginTop: 8,
    fontWeight: "600",
    letterSpacing: 2,
  },
  divider: {
    width: 60,
    height: 2,
    backgroundColor: COLORS.accent,
    borderRadius: 2,
    marginVertical: 24,
  },
  subtitle: {
    fontSize: 12,
    color: COLORS.gray,
    letterSpacing: 3,
    marginBottom: 16,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
  },
  card: {
    width: "47%",
    backgroundColor: COLORS.card,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 18,
    alignItems: "center",
    marginBottom: 14,
  },
  cardLabel: {
    color: COLORS.grayLight,
    fontSize: 13,
    marginTop: 8,
    fontWeight: "600",
  },
});