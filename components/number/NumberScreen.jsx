import { Text, View, Image } from "react-native";
import styles from "./NumberScreen.style"
import { images } from "../../constants";
import Input from "../commons/input/Input";

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
                <Text style={styles.text}>veuillez entrer votre pays et votre numéro de téléphone</Text>
            </View>
            <View style={{width : "50%"}}>
                <Input />
            </View>
        </View>
    )
}

export default NumberScreen