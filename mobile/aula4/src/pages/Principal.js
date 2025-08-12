import { StyleSheet, Text, View } from "react-native";

export default () => (
    <View style={Estilo.container}>
        <View style={Estilo.box1} />
        <View style={Estilo.box2}>
            <Text style={Estilo.japan}>Japão</Text>
        </View>
        <View style={Estilo.box3} />
    </View>
)

const Estilo = StyleSheet.create({
    container: {
        flex: 1, // ocupa todo espaço disponível
        backgroundColor: "#fefefe",
        flexDirection: "column", // direção do eixo, por default → column
        // justifyContent: "center", // alinhamento do eixo principal
        // alignItems: "center", // alinhamento do eixo secundário
    },

    box1: {
        flex: 1, // ocupa 1 das partes (1/5)
        backgroundColor: "#fff",
    },

    box2: {
        flex: 3, // ocupa 3 das partes (3/5)
        backgroundColor: "#f00",
        borderRadius: "50%",
        margin: 60,
        justifyContent: "center",
        alignItems: "center",
    },

    japan: {
        fontSize: 24,
        fontWeight: 600,
        color: "#fff",
        fontVariant: "small-caps",
    },

    box3: {
        flex: 1, // ocupa 1 das partes (1/5)
        backgroundColor: "#fff",
    },
})