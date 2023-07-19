import { StyleSheet } from "react-native";
 
import {COLORS, SIZES} from "../../constants"

const styles = StyleSheet.create({
    container :{
        flex:1, 
    },
    imgSize : {
        width: "100%",
        height:"100%",
    },
    btnContainer : {
        width: "100%",
        height:'30%',
        alignItems:"center",
        justifyContent:'center'
    },
    btn :{
        width: "50%",
        height:70 ,
        backgroundColor:COLORS.secondary, 
        alignItems:"center",
        justifyContent:"center",
        borderRadius: 10,
    },
    btnText : {
        color: COLORS.white,
        fontSize:SIZES.xxLarge,
        fontWeight:"600"
    },
}
)

export default styles