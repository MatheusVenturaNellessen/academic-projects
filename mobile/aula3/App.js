import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Saudacao from "./src/components/Saudacao/index"
import Calcula from "./src/components/Calcula/index"
import Rodape from "./src/components/Rodape/index"

export default function App() {
  return (
    <View>
      <View style={styles.header}>
        <Saudacao nome='Matheus' />
      </View>

      <View style={styles.body}>
        <Calcula 
          somaA={70} somaB={32} 
          subA={20} subB={5}
        />
      </View>

      <View style={styles.rodape}>
      </View>
      <Rodape /> {/* por algum motivo só funciona assim */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header:{
    backgroundColor: '#f2f2f2',
    height: "auto",
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  body:{
    margin: 15,
  },

  rodape: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 25,
  },
});
