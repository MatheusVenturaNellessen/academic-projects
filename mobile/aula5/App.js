import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import {AntDesign} from "@expo/vector-icons";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

import Home from "./src/pages/Home/index"

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Button 
        title='Clica em mim!'
        color={"#f00"}
        onPress={() => console.log("Opa")}
      /> */}

      {/* <AntDesign name="meh" size={24} color={"#f00"}/> */}

      {/* <TouchableOpacity style={styles.botao}>
        <Text style={styles.text}>Botão</Text>
      </TouchableOpacity> */}

      <TouchableOpacity>
        <Text>
          <View style={styles.conteudoDoBotao}>
            <SimpleLineIcons name="social-instagram" size={55} color="black" />
            <Text style={styles.textoDoBotao}>Instagram</Text>
          </View>
        </Text>
      </TouchableOpacity>

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

  botao: {
    backgroundColor: "#0f0",
    margin: 14, padding: 10,
    borderRadius: 12,
    boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.3)",
  },

  text: {
    color: "#fff",
    fontWeight: 600,
    fontSize: "2em",
    textShadow: "1px 1px 5px rgba(0, 0, 0, 0.3)",
  },

  conteudoDoBotao: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  textoDoBotao: {
    margin: 10,
    fontSize: 24,
    fontVariant: "small-caps"
  },
});
