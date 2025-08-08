import { Button, StyleSheet, View } from "react-native";

export default () => (
    <View style={Estilos.container}>
        <Button 
            title="Sair"
            color={"#0f0"}
            onPress={() => console.log("Você clicou no botão!")}
        />
    </View>
)

const Estilos = StyleSheet.create({
    container: {
        alignItems: "center",
    },
})