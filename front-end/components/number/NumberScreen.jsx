import { Text, View, Image } from "react-native";
import styles from "./NumberScreen.style"
import { images } from "../../constants";
import NumberInput from "../commons/phoneInput/PhoneInput";

const NumberScreen = () => {
    return(
        <View style={styles.container}>
            <View style={styles.imgContainer}>
            <Image 
                resizeMode="contain"
                source={images.phone}
                style={styles.phoneSize}
            />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Entrez votre numéro</Text>
                <Text style={styles.text}>Veuillez entrer votre pays et votre numéro de téléphone</Text>
            </View>
            <View style={{marginTop: 100, width: "100%"}}>
                <NumberInput />
            </View>
        </View>
    )
}

export default NumberScreen