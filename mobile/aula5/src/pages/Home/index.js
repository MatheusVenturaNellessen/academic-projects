import { StyleSheet, Text, View } from "react-native";

import Header from "../../components/Header/index";

export default function Home() {
    return (
        <View style={Estilo.container}>
            <Header />
            <Text>Você acessou a page Home</Text>
        </View>
    )
}

const Estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

})
