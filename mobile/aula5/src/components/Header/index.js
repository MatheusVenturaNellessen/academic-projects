import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native"

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import Feather from '@expo/vector-icons/Feather';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 64

export default () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Matheus V Nellessen</Text>

                <TouchableOpacity style={styles.buttonUser}>
                    <Feather name="user" size={36} color={"#fff"}></Feather>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#8000ff",
        height: 125,
        paddingStart: 14,
        paddingEnd: 14,
        // paddingTop: statusBarHeight, 
    },

    content: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },  

    title: {
        fontSize: "1.5em",
        fontVariant: "small-caps",
        fontWeight: 600,
        color: "#fff",
        textShadow: "1px 1px 5px rgba(0, 0, 0, 0,3)"
    },

    buttonUser: {
        backgroundColor: "#ffffff44",
        padding: 8,
        borderRadius: "50%",
    },
})