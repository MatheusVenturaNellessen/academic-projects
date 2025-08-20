import { StyleSheet, Text, View } from "react-native";

export default ({saldo = 0, gasto = 0}) => (
    <View style={styles.container}>
        <View styles={styles.balanceSaldo}>
            <Text style={styles.saldoTitle}>Saldo</Text>
            <Text style={styles.saldoPrice}>R$ {saldo}</Text>
        </View>
        <View styles={styles.balanceGasto}>
            <Text style={styles.gastoTitle}>Gasto</Text>
            <Text style={styles.gastoPrice}>R$ {gasto}</Text>
        </View>
    </View>
)


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 0.2,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16, margin: 16, marginTop: -16,
        borderRadius: 10,
    },

    balanceSaldo: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
    },

    balanceGasto: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
    },

    saldoTitle: {
        fontSize: "1.5em",
        fontWeight: 600,
        color: "#cacaca",
    },

    gastoTitle: {
        fontSize: "1.5em",
        fontWeight: 600,
        color: "#cacaca",
    },

    saldoPrice: {
        fontSize: "2em",
        fontWeight: 600,
        fontVariant: "small-caps",
        color: "#026600",
        
    },
    
    gastoPrice: {
        fontSize: "2em",
        fontWeight: 600,
        fontVariant: "small-caps",
        color: "#810000",
    },
})