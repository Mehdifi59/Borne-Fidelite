import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container : {
        backgroundColor: "#fff",
        flex : 1,
        width: 350,
        borderRadius:10,
        margin: 20,
        alignItems: 'center',
        padding: 10
    },
    img : {
        width: '100%',
        height: "70%",
        borderRadius:10,
    },
    title : {
        fontFamily: FONTS.Bold,
        fontSize: SIZES.xxLarge
    },
    points : {
        fontFamily: FONTS.regular,
        fontSize: SIZES.xLarge
    },
    btn : {
        backgroundColor: COLORS.tertiary,
        width: "50%",
        height: 40,
        justifyContent: 'center',
        borderRadius : 30,

        transform: [{ translateY: -19}],


    },
    btnText : {
        textAlign: 'center',
        fontFamily: FONTS.Bold,
        color: COLORS.white,
        fontSize : SIZES.large
    },

})

export default styles