import { StyleSheet } from "react-native";
import { SIZES, COLORS, FONTS } from "../../constants";

const styles = StyleSheet.create({
    container : {
        height: "100%",
        width: "100%",
        alignItems: "center",

    },
    imgContainer : {
        width : "60%",
        height: "40%"
    },
    imgSize: {
        width: "100%",
        height: "100%",
    },

    input: {
        backgroundColor : COLORS?.white,
        color : COLORS.black,
        height: 50,
        width : 500,
        borderWidth: 1,
        padding: 10,
    },

    textContainer: {
        marginTop: 30,
        alignItems: "center",
        width: "70%",
    },

    title : {
        fontSize: SIZES.xxxLarge,
        fontFamily: FONTS.Bold,
        color: COLORS.white,
        letterSpacing: -1,
        textAlign: "center",
    },
    text : {
        color: COLORS.white,
        fontFamily: FONTS.regular,
        fontSize: SIZES.large,
        textAlign: "center",
    },

})

export default styles