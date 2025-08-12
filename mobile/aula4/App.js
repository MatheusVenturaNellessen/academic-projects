import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa todo o conteúdo da tela disponível
    backgroundColor: "#fefefe", // fundo off-white
    flexDirection: "row",
    // Eixo principal
    // Por padrão → column
    justifyContent: "center",
    // Alinhamento do eixo principal:
    // center               → centro do eixo
    // flex-end             → final do eixo
    // flex-start (default) → início do eixo
    // space-between        → espaçamento entre os elementos apenas
    // space-around         → espaçamento desigual entre os elementos + pontas 
    // space-evenly         → espaçamento igualitário entre os elementos + pontas
    alignItems: "center",
    // Alinhamento do eixo secundário:
    // flex-start (default) → início do eixo
    // flex-start           → final do eixo
    // strech               → alonga o(s) elemento(s)
    // baseline             → igual ao elemento Pai
    // center               → no centro do eixo
  },

  box1: {
    height: 50, width: 50, // implementa altura e largura das Views
    backgroundColor: "#f00", // cor de fundo das Views
    margin: 5, // implementa espaçamento de 5px
  },

  box2: {
    height: 50, width: 50,
    backgroundColor: "#0f0",
    margin: 5,
  },

  box3: {
    height: 50, width: 50,
    backgroundColor: "#00f",
    margin: 5,
  },
});
