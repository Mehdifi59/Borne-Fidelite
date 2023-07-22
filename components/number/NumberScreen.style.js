import { StyleSheet } from "react-native";
import { SIZES, COLORS, FONTS } from "../../constants";

const styles = StyleSheet.create({
    container : {
        height: "100%",
        width: "100%",
        alignItems: "center"
    },
    imgContainer : {
        width : "50%",
        height: "30%"
    },
    phoneSize: {
        width: "100%",
        height: "100%",
    },

    textContainer: {
        alignItems: "center",

        width: "50%",
    },

    title : {
        fontSize: SIZES.xxxLarge,
        fontFamily: FONTS.medium,
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
