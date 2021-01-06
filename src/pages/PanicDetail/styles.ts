import { Dimensions, StyleSheet } from "react-native"

const  { width, height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    txtButtonCancelar: {
        marginTop:6,
        textAlign: "center",
        fontSize: 18,
        color: "#fff"
    },

    buttonCancelar: {
        marginTop: 0,
        marginBottom: 20,
        backgroundColor: '#D17473',
        borderRadius: 4,
        width: 100,
        height:40
      
    },
    contadorConteiner: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 40,
        justifyContent: "center",
    },
    container: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 40,
        justifyContent: "center",

    },

    contentImg: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 50

    },
    text: {
        alignItems: "center",
        marginTop: 40,
        marginBottom: 20,
        color: "#333",
        textAlign: "center"
    },
    img: {
        width: 200,
        height: 200,
    },
    contentButtton: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginHorizontal: 30

    },
    item: {
        alignItems: "center",
        color: "#000",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#ddd",
        justifyContent: "center",
        backgroundColor: "#E3E3E3",
        marginRight: 8,
        marginBottom: 20,
        padding: 10,
        width: 98
    },
    selectedItem: {
        borderColor: "red",
        borderWidth: 1
    },

    imgIcon: {
        width: 50,
        height: 50,
    },


    textButton: {
        textAlign: "center",
        paddingTop: 5,
        fontSize: 10,
       // fontFamily: "Archivo_700Bold",
        color: "#333",
        textTransform: "uppercase"
    },

    contentTime: {
        backgroundColor: "#E3E3E3",
    },

    modal:{
        backgroundColor: "#fff",
        flex: 0.30,
        justifyContent: "center",
        borderRadius: 4
    },

    modalContentButton: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20
    },

    modalbutton: {
        marginTop: 0,
        marginBottom: 20,
        backgroundColor: '#D17473',
        borderRadius: 4,
        width: 100,
        height:40
      
    },
    textModal: {
        fontSize: 12,
        paddingBottom: 15,
        fontWeight: "bold",
        textAlign: "center",
        color: "#333"

    },
    modalTxtButton: {
        marginTop:6,
        textAlign: "center",
        fontSize: 18,
        color: "#fff"
    },
    modalbuttonSim: {
        backgroundColor: '#2BBE79',
    },
    modalbuttonNao: {
        backgroundColor: '#D17473',
    }
})



