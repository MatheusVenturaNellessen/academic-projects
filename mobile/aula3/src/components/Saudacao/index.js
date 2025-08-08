import { StyleSheet, Text } from "react-native"

export default ({nome = "Usuário"}) => (
    <Text style={Formata.textoSaudacao}>Bem vindo {nome}</Text>
)

const Formata = StyleSheet.create({
    textoSaudacao: {
        fontSize: 34,
        fontWeight: 700,
    }
})