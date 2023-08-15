import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const styles = StyleSheet.create({

    container : {
        backgroundColor : COLORS.secondary,
        height:'100%',
        width: '100%',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft: 20,
        paddingRight: 20,
    },

    helloText : {
        fontFamily: FONTS.Bold,
        color: COLORS.white,
        fontSize: SIZES.xxxLarge,
    
    },
    btn : {
        borderWidth : 3,
        borderColor : COLORS.tertiary,
        borderRadius: 100,
        height: 80,
        width: 300,
    },
    btnText : {
        fontFamily : FONTS.medium,
        fontSize : SIZES.xLarge,
        color: COLORS.tertiary,
        padding : 20,
        textAlign: 'center',
        
    }

})

export default styles