import { StyleSheet, Text, View } from "react-native";

import Header from "../../components/Header/index";

import Balance from "../../components/Balance/index"

export default function Home() {
    return (
        <View style={Estilo.container}>
            <Header user="Matheus V Nellessen"/>
            
            <Balance 
                saldo={2}
                gasto={-999}
            />
        </View>
    )
}

const Estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f1f1f1",
    },
})
