import { View, Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";
import styles from "./Header.style";
import { useRouter } from "expo-router";
const Header = ({prenom, route}) => {
    const router = route

    const onHandleClick = () => {
        router.replace("/")
    }


    return(
        <View style={styles.container}>
        <View style={{alignItems: "flex-start"}}>
            <Text style={styles.helloText}>Salut {prenom} !</Text>
        </View>
            <TouchableOpacity style={styles.btn} onPress={onHandleClick}>
                <Text style={styles.btnText}>Se déconnecter</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Header