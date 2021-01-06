import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bgImg: {
        position: "relative",
        top: -75,
        left: -85,
        width: 250,
        height: 250
    },
    title: {
        fontSize: 40,
        color: "#333"
    },
    content: {
        marginHorizontal: 20 
    },
    textInput: {
        backgroundColor: "#fff",
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        fontSize: 20,
        color: "#000",
        borderRadius: 4
    },
    btn: {
        backgroundColor: "#2BBE79",
        paddingVertical: 10,
        color: "#000",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#ddd"
    },

    textInputError: {
        borderWidth: 1,
        borderColor: "red"
    },
    textButton: {
         textAlign: "center",
         fontSize: 20,
         color: "#fff"
    },

    calendar: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        backgroundColor: "#fff",
        marginBottom: 10,
        paddingVertical: 10,
    },
    textCalendar: {
        fontSize: 20,
        color: "#ccc",
    }
})



