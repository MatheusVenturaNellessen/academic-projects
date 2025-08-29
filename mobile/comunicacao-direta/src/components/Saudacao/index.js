import { Text, View } from "react-native";

export default ({nome = "Undefined", callback}) => {
    callback("Oi pai!")
    return (
        <View>
            <Text>Seja bem vindo {nome}!</Text>
        </View>
    )
}