import { Linking, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native"


export default ({pressCallBack, texto = "Undefined", bgColor = "#f00", padding = 0}) => {
    const handelPress = () => {
        console.log("Entrei no handlePress!");
        pressCallBack("Sim!");
    };

    return (
        <View style={Estilo.container}>
            <TouchableOpacity
                style={[Estilo.button, {backgroundColor: bgColor, padding: padding}]}
                onPress={handelPress}
            >
                <Text style={Estilo.buttonLabel}>{texto}</Text>
            </TouchableOpacity>
        </View>
    )
};

const Estilo = StyleSheet.create({
    container: {
        margin: 10, padding: 10,
        backgroundColor: "#dadada",
        borderRadius: 20,
    },

    button: {

    },

    buttonLabel: {
        fontSize: 16,
        fontWeight: 600,
    },
})