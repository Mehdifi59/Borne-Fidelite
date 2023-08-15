import { View, Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";
import styles from "./Header.style";
const Header = ({prenom}) => {

    return(
        <View style={styles.container}>
        <View style={{alignItems: "flex-start"}}>
            <Text style={styles.helloText}>Salut {prenom} !</Text>
        </View>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Se déconnecter</Text>
            </TouchableOpacity>
        </View>

    )
}

export default Header