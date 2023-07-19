import {View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./HomeScreen.style";
import {images, COLORS, SIZES} from "../../constants"
const HomeScreen = () => {
    return(
        <View style={styles.container}>
            <View style={{height:"50%"}}>
            <Image 
                source={images.vazygood}
                resizeMode="contain"
                style={styles.imgSize}
            />
            </View>

            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Vazy</Text>
                </TouchableOpacity>
            
            </View>
        </View>
        
    )

}

export default HomeScreen