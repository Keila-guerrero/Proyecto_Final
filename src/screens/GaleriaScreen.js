import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { COLORS } from "../theme";

const videos = [
  { titulo: "Carrito en circuito — Video 1", archivo: require("../../assets/video1.mp4") },
  { titulo: "Prueba completa — Video 2",     archivo: require("../../assets/video2.mp4") },
];

export default function GaleriaScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.pageTitle}>Galería y Evidencia</Text>
      <View style={styles.divider} />

      {videos.map((v, i) => (
        <View key={i} style={styles.videoCard}>
          <Video
            source={v.archivo}
            style={styles.video}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
          />
          <Text style={styles.cardTitle}>{v.titulo}</Text>
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
  videoCard: {
    backgroundColor: COLORS.card,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 24,
    overflow: "hidden",
  },
  video: {
    width: "100%",
    height: 220,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.white,
    padding: 14,
  },
});