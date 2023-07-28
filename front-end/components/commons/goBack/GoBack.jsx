import { View, Text, TouchableOpacity, Image } from "react-native"
import { icons } from "../../../constants"
import styles from "./GoBack.style.js"

const GoBack = ({back}) => {


    return(
            <TouchableOpacity onPress={back} style={styles.btn}>
                <Image
                    resizeMode="contain"
                    style={styles.icon}
                    source={icons.arrowLeft}
                />
            </TouchableOpacity>
    )
}

export default GoBack;