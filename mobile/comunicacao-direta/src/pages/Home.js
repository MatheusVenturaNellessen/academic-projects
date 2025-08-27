import { View, StyleSheet } from "react-native";

import Saudacao from "../components/Saudacao/index";

export default () => (
    <View style={Estilos.container}>
        <Saudacao nome="Matheus" />
    </View>
);

const Estilos = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    h1: {
        fontSize: "2em",
        fontWeight: 600,
    },
});