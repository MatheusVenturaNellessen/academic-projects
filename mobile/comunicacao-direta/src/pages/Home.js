import { View, StyleSheet } from "react-native";

import Saudacao from "../components/Saudacao/index";

import Botao from "../components/Botao/index";

const receberMsg = (msg) => {
    console.log("Meu filho disse: " + msg);
}

export default () => (
    <View style={Estilos.container}>
        <Saudacao 
            nome={"Camila"} 
            callback={receberMsg} 
        />

        <Botao 
            pressCallBack={
                (msg) => console.log(`Foi? ${msg}`)
            }
            texto={"Logar!"}
            bgColor="green"
            padding={30}
        />

        <Botao 
            pressCallBack={
                (msg) => console.log(`Foi 2? ${msg}`)
            }
            texto={"Logar novamente!"}
            bgColor="blue"
            padding={20}
        />
    </View>
);

const Estilos = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});