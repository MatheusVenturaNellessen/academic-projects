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
    flexDirection: "row", // por padrão → column

  },

  box1: {
    height: 50, width: 50,
    backgroundColor: "#f00",
    margin: 5,
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
