import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Linking } from "react-native";

import logoImage from "../../assets/img/logo.png";

import AntDesign from '@expo/vector-icons/AntDesign';

const openLink = () => {
    Linking.openURL("https://static.vecteezy.com/ti/fotos-gratis/p2/12724094-gato-bocejando-gato-preto-muito-engracado-rindo-o-gatinho-boceja-com-a-boca-aberta-foto.jpg");
};

const openFacebook = () => {
    Linking.openURL("https://www.facebook.com");
};

const openInstagram = () => {
    Linking.openURL("https://www.instagram.com");
};

const openLinkedin = () => {
    Linking.openURL("https://www.linkedin.com");
};

export default () => (
    <View style={Estilo.container}> 
        <View style={Estilo.header}>
            {/* <Image source={logoImage} /> */}
            {/* <Image source={require("../../assets/img/logo.png")} /> */}
            {/* Não funciona */}
        </View>
        <View style={Estilo.body}>
            {/* Login's input */}
            <Text style={Estilo.label}>Login:</Text>
            <TextInput 
                style={Estilo.input}
                placeholder="Insira seu e-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect={true}
            />

            {/* Password's input */}
            <Text style={Estilo.label}>Password:</Text>
            <TextInput 
                style={Estilo.input}
                placeholder="Insira sua senha"
                autoCapitalize="none"
                autoComplete="off"
                secureTextEntry={true}
                autoCorrect={false}
            />

            {/* Forgot Password View */}
            <View style={Estilo.info}>
                <TouchableOpacity 
                    onPress={openLink}
                >
                    <Text style={Estilo.forgotText} >ⓘ Forgot Password?</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={Estilo.footer}>
            {/* Social Medias Button's View */}
            <View style={Estilo.socialButtonsContainer}>
                <TouchableOpacity 
                    style={Estilo.socialButtons}
                    onPress={openFacebook}
                > 
                    <AntDesign                       name="facebook-square"
                        size={50}
                        style={Estilo.socialIcons}
                    />
                </TouchableOpacity>
               
                <TouchableOpacity 
                    style={Estilo.socialButtons}
                    onPress={openInstagram}
                >
                    <AntDesign 
                        name="instagram"
                        size={50}
                        style={Estilo.socialIcons}
                    />
                </TouchableOpacity>
               
                <TouchableOpacity 
                    style={Estilo.socialButtons}
                    onPress={openLinkedin}
                >
                    <AntDesign 
                        name="linkedin-square" 
                        size={50}
                        style={Estilo.socialIcons} />
                </TouchableOpacity>
            </View>

            {/* Form's View */}
            <View style={Estilo.sendFormContainer}>
                <TouchableOpacity 
                    style={Estilo.sendFormButton}
                    onPress={openLink}
                >
                    <Text style={Estilo.sendFormText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
)

const Estilo = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },

    header: {
        alignItems: "center",
        width: "80%",
    },

    body: {
        alignItems: "left",
        width: "80%",
    },

    label: {
        color: "#7a7a7a",
        fontSize: "1.25em",
        marginTop: 10, marginBottom: 10,
    },

    input: {
        backgroundColor: "#f1f1f1",
        width: "100%", height: "auto",
        marginTop: 0, marginBottom: 10, 
        padding: 10,
        borderRadius: 25,
        color: "#7a7a7a",
    },

    info: {
        alignItems: "center",
        marginTop: 20, marginBottom: 50, 
    },

    forgotText: {
        color: "#3eb5d2",
        fontWeight: 600,
    },

    footer: {
        borderTopWidth: 1,
        width: "80%",
        borderTopColor: "#828ee7",
        alignItems: "center",
    },
    
    socialButtonsContainer: {
        flexDirection: "row",
        margin: 30,
    },

    socialButtons: {
        margin: 10, padding: 8,
        border: "3px solid #828ee7",
        borderRadius: "50%",
        boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.2)",

    },

    socialIcons: {
        color: "#828ee7",
    },

    sendFormContainer: {
        width: "90%",
    },

    sendFormButton: {
        backgroundColor: "#3eb5d2",
        margin: 0, padding: 15,
        borderRadius: 25,
        boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.2)",
    },

    sendFormText: {
        textAlign: "center",
        fontWeight: 600,
        fontSize: "1.5em",
        color: "#fff",
        textShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
    },
})