import { FlatList, StyleSheet, Text, View } from "react-native";

const Data = [
    {id: 1, nome: "Maçã"}, 
    {id: 2, nome: "Banana"}, 
    {id: 3, nome: "Abacaxi"}, 
    {id: 4, nome: "Laranja"},
    {id: 5, nome: "Maçã"}
];

export default () => (
    <View style={Estilo.container}>
        <FlatList 
            data={Data}
            renderItem={({item}) => <Text>{item.nome}</Text>} // é um callback
            keyExtractor={(item) => String(item.id)}
        />
    </View>
);

const Estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});