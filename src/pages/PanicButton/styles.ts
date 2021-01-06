import { StyleSheet } from "react-native"
import { color } from "react-native-reanimated"



export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        justifyContent: "center",
        flex: 1
    },

    contentImg: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 50
    },
    text: {
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
    },
    item: {
        alignItems: "center",
        color: "#000",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#ddd",
        justifyContent: "center",
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
        color: "#333",
        textTransform: "uppercase"
    },

    btnPanic: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 500,
        backgroundColor: "#D17473",
        marginTop: 40,
        marginBottom: 20,
    }
})



